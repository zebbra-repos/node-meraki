const debug = require('debug')('node-meraki:frontend/authentication')

/**
 * Create a Meraki Frontend API wrapper for the authentication process. This is uses the same API as the Meraki webfrontend. So stuff can break
 *
 * @module meraki/frontend/authentication
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
 * const authenticationEndpoints = require('./lib/frontend/authentication')({ basePath, baseUrl, rateLimiter })
 */
function createAuthenticationEndpoints ({ targetOrg, basePath, baseUrl, rateLimiter }) {
  const axios = require('../utils/axios')({ baseUrl, rateLimiter })

  /**
   * Authenticates the user against the "api"
   *
   * @memberof module:meraki/frontend/authentication
   * @param { string } [target=targetOrt]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [email]              email address of the user to authenticate with
   * @param { string } [password]           password of the user to authenticate with
   * @return { Promise } A promise holding the organizations this user has privileges on
   * @example <caption>Example response</caption>
   * {
   * success: true,
   * org_eid: '123',
   * user:
   * { id: '123',
   *      name: '123 123',
   *      email: '123.123@123.123',
   *      is_admin: false,
   *      is_write_admin: false,
   *      is_org_admin: true,
   *      is_org_write_admin: true,
   *      is_org_enterprise_admin: false,
   *      is_sales_demo_admin: false,
   *      admin_permissions_hash:
   *   { '682858293500110100': [Object],
   *        '682858293500110095': [Object],
   *        '682858293500110098': [Object],
   *        '682858293500110096': [Object],
   *        '682858293500110099': [Object],
   *        '682858293500110097': [Object] },
   *    administered_networks: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
   *    path: 'https://n123.meraki.com/' },
   *    orgs: [ { id: '123',
   *      eid: '123',
   *      uid: '123',
   *      org_admin_type: 'write',
   *      name: 'Api Delete',
   *      node_groups: {},
   *      num_networks: 2,
   *      locales: {},
   *      shard_id: 213,
   *      licensed_product_edition_name: 'enterprise',
   *      license_expires_on: 0,
   *      block_meraki_admins: false,
   *      org: [Object],
   *      inventory: [],
   *      api_level: 0,
   *      support_password: '123' }],
   *    mobile_auth_token:'MY_SUPER_SECRET_TOKEN' }
   */
  async function login ({ target = targetOrg, email, password }) {
    if (typeof email === 'undefined') return Promise.reject(new Error('the parameter email is mandatory'))
    if (email.indexOf('@') < -1) return Promise.reject(new Error('the parameter email is in the wrong format'))
    if (typeof password === 'undefined') return Promise.reject(new Error('the parameter password is mandatory'))

    debug(`Login step 1: Authenticate`)
    const orgChoose = await axios._post('', target, `${basePath}/login/login`, `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)

    debug(`Login step 2: Choose organisation`)
    return axios._get('', target, `${basePath}/login/org_choose?eid=${orgChoose.orgs[0].eid}`)
  }

  return {
    login
  }
}

module.exports = createAuthenticationEndpoints
