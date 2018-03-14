/**
 * Create a Meraki REST API wrapper for the network ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#networks} for more information.
 *
 * @module lib/rest/networks
 * @param { Object } settings                     The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']         The Meraki api key
 * @param { string } [settings.target='api']      The Meraki target
 * @param { string } [settings.basePath='/']      The Meraki base path for the network ressource
 * @return { Object } The initialized Meraki REST API wrapper for the network ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const networkEndpoints = require('./lib/rest/networks')({ apiKey, target, basePath, baseUrl, port })
 */
function createNetworksEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', port = 443 }) {
  const axios = require('./axios')({ baseUrl, port })

  /**
   * List the networks in an organization.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The organization id
   * @param { string } param.configTemplateId An optional parameter that is the ID of a config template. Will return all networks bound to that template
   * @return { Promise } A promise holding the networks this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id":"N_1234",
   *     "organizationId":"1234",
   *     "type": "wireless",
   *     "name":"My network",
   *     "timeZone": "US/Pacific",
   *     "tags": null
   *   }
   * ]
   */
  function listNetworks ({ orgId, configTemplateId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    const params = { configTemplateId }
    return axios._get(apiKey, target, `${basePath}/organizations/${orgId}/networks`, params)
  }

  /**
   * Return a network.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network to return
   * @return { Promise } A promise holding the network details
   * @example <caption>Example response</caption>
   * {
   *   "id":"N_1234",
   *   "organizationId":"1234",
   *   "type": "wireless",
   *   "name":"My network",
   *   "timeZone": "US/Pacific",
   *   "tags": null
   * }
   */
  function showNetwork ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/networks/${networkId}`)
  }

  /**
   * Update a network.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network to update
   * @param { string } param.name             The name of the new network
   * @param { string } param.timeZone         The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in [this article]{@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones}
   * @param { string } param.tags             A space-separated list of tags to be applied to the network
   * @return { Promise } A promise holding the updated network details
   * @example <caption>Example network data</caption>
   * {
   *   "id": "N_1234",
   *   "organizationId": 1234,
   *   "name": "My network",
   *   "tags": "tag1 tag2"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id":"N_1234",
   *   "organizationId":"1234",
   *   "type": "wireless",
   *   "name":"My network",
   *   "timeZone": "US/Pacific",
   *   "tags": null
   * }
   */
  function updateNetwork ({ networkId, name, timeZone, tags }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const data = { name, timeZone, tags }
    return axios._put(apiKey, target, `${basePath}/networks/${networkId}`, data)
  }

  /**
   * Create a network.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The organization id
   * @param { string } param.name             The name of the new network
   * @param { string } param.type             The type of the new network. Valid types are `wireless` (for MR), `switch` (for MS), `appliance` (for MX, Z1, or Z3), `phone` (for MC), or a space-separated list of those for a combined network
   * @param { string } param.timeZone         The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in [this article]{@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones}
   * @param { string } param.tags             A space-separated list of tags to be applied to the network
   * @return { Promise } A promise holding the newly create network details
   * @example <caption>Example network data</caption>
   * {
   *   "name": "My network",
   *   "type": "wireless",
   *   "tags": "tag1 tag2"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id":"N_1234",
   *   "organizationId":"1234",
   *   "type": "wireless",
   *   "name":"My network",
   *   "timeZone": "US/Pacific",
   *   "tags": null
   * }
   */
  function createNetwork ({ orgId, name, type, timeZone, tags }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    const data = { name, type, timeZone, tags }
    return axios._post(apiKey, target, `${basePath}/organizations/${orgId}/networks`, data)
  }

  /**
   * Delete a network.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network to remove
   * @return { Promise } A promise with no data
   */
  function deleteNetwork ({ networkId, name, timeZone, tags }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/networks/${networkId}`)
  }

  /**
   * Bind a network to a template.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network to bind to the template
   * @param { string } param.configTemplateId The ID of the template to which the network should be bound
   * @param { boolean } param.autoBind        Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model
   * @return { Promise } A promise with no data
   */
  function bindNetworkToTemplate ({ networkId, configTemplateId, autoBind }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const data = { configTemplateId, autoBind }
    return axios._post(apiKey, target, `${basePath}/networks/${networkId}/bind`, data)
  }

  /**
   * Unbind a network from a template.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network to unbind
   * @return { Promise } A promise with no data
   */
  function unbindNetworkFromTemplate ({ networkId, configTemplateId, autoBind }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._post(apiKey, target, `${basePath}/networks/${networkId}/unbind`)
  }

  /**
   * The traffic analysis data for this network.
   * [Traffic Analysis with Hostname Visibility]{@link https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility}
   * must be enabled on the network.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the traffic analysis
   * @param { number } param.timespan         The timespan for the data. Must be an integer representing a duration in seconds between two hours and one month. (Mandatory.)
   * @param { number } param.deviceType       Filter the data by device type: combined (default), wireless, switch, appliance. When using combined, for each rule the data will come from the device type with the most usage.
   * @return { Promise } A promise holding the network traffic analysis data
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "application": "Gmail",
   *     "destination": null,
   *     "protocol": "TCP",
   *     "port": 443,
   *     "sent": 100,
   *     "recv": 200,
   *     "numClients": 7,
   *     "activeTime": 77000,
   *     "flows": 300
   *   },
   *   {
   *     "application": "ICMP",
   *     "destination": "wired.meraki.com",
   *     "protocol": "ICMP",
   *     "port": null,
   *     "sent": 11,
   *     "recv": 20,
   *     "numClients": 1,
   *     "activeTime": 7,
   *     "flows": 3
   *   }
   * ]
   */
  function listTrafficAnalysis ({ networkId, timespan = 2592000, deviceType }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const params = { timespan, deviceType }
    return axios._get(apiKey, target, `${basePath}/networks/${networkId}/traffic`, params)
  }

  /**
   * List the access policies for this network. Only valid for MS networks.
   *
   * @memberof module:lib/rest/networks
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the access policies
   * @return { Promise } A promise holding the network access policies
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "number": 1,
   *     "name": "Access policy 1",
   *     "accessType": "8021.x",
   *     "guestVlan": 3700,
   *     "radiusServers": [
   *       {
   *         "ip": "1.2.3.4",
   *         "port": 1337
   *       },
   *       {
   *         "ip": "2.3.4.5",
   *         "port": 1337
   *       }
   *     ]
   *   },
   *   {
   *     "number": 2,
   *     "name": "Access policy 2",
   *     "accessType": "MAC authentication bypass",
   *     "guestVlan": 1661,
   *     "radiusServers": [
   *       {
   *         "ip": "4.5.6.7",
   *         "port": 2222
   *       }
   *     ]
   *   }
   * ]
   */
  function listNetworkAccessPolicies ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/networks/${networkId}/accessPolicies`)
  }

  return {
    listNetworks,
    showNetwork,
    updateNetwork,
    createNetwork,
    deleteNetwork,
    bindNetworkToTemplate,
    unbindNetworkFromTemplate,
    listTrafficAnalysis,
    listNetworkAccessPolicies
  }
}

module.exports = createNetworksEndpoints