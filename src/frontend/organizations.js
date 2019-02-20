const debug = require('debug')('node-meraki:frontend/organizations')

/**
 * Create a Meraki Frontend API wrapper for the organizations process. This is uses the same API as the Meraki webfrontend. So stuff can break
 *
 * @module meraki/frontend/organizations
 * @param { string } [target='account']    The Meraki target
 * @param { string } [basePath]             The Meraki base path for the Authentication ressource
 * @param { string } [baseUrl]              The Meraki base url for the Authentication ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the Authentication ressource
 * @example
 * const target = 'n12'
 * const basePath = ``
 * const rateLimiter = {
 *  enabled: true
 * }
 * const organizationEndpoints = require('./lib/frontend/organizations')({ basePath, baseUrl, rateLimiter })
 */
function createOrganizationEndpoints ({ targetOrg, basePath, baseUrl, rateLimiter }) {
  const axios = require('./axios')({ baseUrl, rateLimiter })

  /**
   * Get the information about the org from the api
   *
   * @memberof module:meraki/frontend/organizations
   * @param { string } [target=targetOrt]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [eid]              email address of the user to authenticate with
   * @return { Promise } A promise holding the informations about this organization
   * @example <caption>Example response</caption>
   * {
      "id":"123",
      "eid":"asdfasdf",
      "uid":"123",
      "org_admin_type":"write",
      "name":"Test api Deletion",
      "node_groups":{

      },
      "num_networks":0,
      "locales":{

      },
      "shard_id":123,
      "licensed_product_edition_name":"enterprise",
      "license_expires_on":0,
      "block_meraki_admins":false,
      "org":{
        "reported_api_level":4,
        "resolved_api_level":4,
        "id":"123",
        "eid":"asdfasdf",
        "l3_vpn_config_hash":{
          "participants":[

          ],
          "firewall_rules":[

          ],
          "vpn_firewall_inbound_default_rules_logging":true,
          "vpn_firewall_outbound_default_rules_logging":true,
          "ipsec_peers":[

          ]
        },
        "mcn":"1233-1233"
      },
      "inventory":[

      ],
      "api_level":4,
      "support_password":"1234"
    }
   */
  async function getOrganization ({ target = targetOrg, eid }) {
    if (typeof eid === 'undefined') return Promise.reject(new Error('the parameter email is mandatory'))

    debug(`get organization information ${eid}`)
    return axios._get('', target, `${basePath}/${eid}/manage/organization/map`)
  }

  /**
   * delete the org
   *
   * @memberof module:meraki/frontend/organizations
   * @param { string } [target=targetOrt]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [eid]              email address of the user to authenticate with
   * @return { Promise } A promise holding the informations about this organization
   * @example <caption>Example response</caption>
   * { success:true }
   */
  async function deleteOrganization ({ target, eid }) {
    if (typeof eid === 'undefined') return Promise.reject(new Error('the parameter email is mandatory'))

    // the correct shard id is needed to build the url
    const org = await getOrganization({ target: 'account', eid })
    let shardId = 0
    if (org && org.hasOwnProperty('shard_id') && org.shard_id) {
      shardId = org.shard_id
    } else {
      return Promise.reject(new Error('unable to determine the correct shard id'))
    }
    debug(`got the correct shard_id ${shardId}`)

    // because it is an form in the frontend it need also a csrfToken (no JSON access)
    const csrfSource = await axios._get('', `n${shardId}`, `${basePath}/${eid}/manage/organization/edit`)
    const csrfToken = csrfSource.split('Mkiconf.authenticity_token = "')[1].split('";')[0]
    debug(`got csrf token ${csrfToken}`)
    axios.setCSRFToken(csrfToken)

    // delete the organization and remove the csrf token
    const delResponse = await axios._post('', `n${shardId}`, `${basePath}/${eid}/manage/organization/delete_org`, ``)
    debug(`organization ${eid} deleted`)
    axios.setCSRFToken('')

    if (delResponse.indexOf('window.location.reload()') > -1) {
      return Promise.reject(new Error('some error occured'))
    }

    return Promise.resolve({ success: true })
  }

  return {
    getOrganization,
    deleteOrganization
  }
}

module.exports = createOrganizationEndpoints
