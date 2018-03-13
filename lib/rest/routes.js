const axios = require('./axios')

/**
 * Create a Meraki REST API wrapper for the static route ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#static-routes} for more information.
 *
 * @module lib/rest/static-routes
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the static route ressource
 * @return { Object } The initialized Meraki REST API wrapper for the static route ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const routeEndpoints = require('./lib/rest/routes')({ apiKey, target, basePath })
 */
function createRoutesEndpoints ({ apiKey, target, basePath }) {
  /**
   * List the static routes for this network.
   *
   * @memberof module:lib/rest/static-routes
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the static routes
   * @return { Promise } A promise holding the static routes of this network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id": "10",
   *     "networkId": "N_1234",
   *     "name": "VOIP",
   *     "gatewayIp": "10.8.0.5",
   *     "subnet": "192.168.10.0/24"
   *   }
   * ]
   */
  function listStaticNetworkRoutes ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/staticRoutes`)
  }

  /**
   * Return a static route.
   *
   * @memberof module:lib/rest/static-routes
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the static routes
   * @param { string } param.srId             The id of the static route for which to show the details
   * @return { Promise } A promise holding the details of a static route this network
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "gatewayIp": "10.8.0.5",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function showStaticNetworkRoute ({ networkId, srId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/staticRoutes/${srId}`)
  }

  /**
   * Update a static route.
   *
   * @memberof module:lib/rest/static-routes
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the static routes
   * @param { string } param.srId             The id of the static route to update
   * @param { string } param.name             The name of the static route
   * @param { string } param.subnet           The subnet of the static route
   * @param { string } param.gatewayIp        The gateway IP (next hop) of the static route
   * @param { boolean } param.enabled         The enabled state of the static route
   * @param { string } param.fixedIpAssignments The DHCP fixed IP assignments on the static route
   * @param { string } param.reservedIpRanges   The DHCP reserved IP ranges on the static route
   * @return { Promise } A promise holding the updated static route of this network
   * @example <caption>Example request data</caption>
   * {
   *   "name": "VOIP",
   *   "subnet": "192.168.10.0/24",
   *   "fixedIpAssignments": {
   *     "13:37:de:ad:be:ef": {
   *       "ip": "192.168.10.5",
   *       "name": "fixed"
   *     }
   *   },
   *   "reservedIpRanges": [{
   *     "start": "192.168.10.20",
   *     "end": "192.168.10.30",
   *     "comment": "reserved"
   *   }]
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "gatewayIp": "10.8.0.5",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function updateStaticNetworkRoute ({ networkId, srId, name, subnet, gatewayIp, enabled, fixedIpAssignments, reservedIpRanges }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    const data = { name, subnet, gatewayIp, enabled, fixedIpAssignments, reservedIpRanges }
    return axios._put(apiKey, target, `${basePath}/${networkId}/staticRoutes/${srId}`, data)
  }

  /**
   * Add a static route.
   *
   * @memberof module:lib/rest/static-routes
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the static routes
   * @param { string } param.name             The name of the static route
   * @param { string } param.subnet           The subnet of the static route
   * @param { string } param.gatewayIp        The gateway IP (next hop) of the static route
   * @return { Promise } A promise holding the newly created static route of this network
   * @example <caption>Example request data</caption>
   * {
   *   "name": "VOIP",
   *   "subnet": "192.168.10.0/24",
   *   "gatewayIp":"10.0.13.37"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "gatewayIp":"10.0.13.37",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function createStaticNetworkRoute ({ networkId, name, subnet, gatewayIp }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const data = { name, subnet, gatewayIp }
    return axios._post(apiKey, target, `${basePath}/${networkId}/staticRoutes`, data)
  }

  /**
   * Delete a static route.
   *
   * @memberof module:lib/rest/static-routes
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the static routes
   * @param { string } param.srId             The id of the static route to remove
   * @return { Promise } A promise with no data
   */
  function deleteStaticNetworkRoute ({ networkId, srId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/${networkId}/staticRoutes/${srId}`)
  }

  return {
    listStaticNetworkRoutes,
    showStaticNetworkRoute,
    updateStaticNetworkRoute,
    createStaticNetworkRoute,
    deleteStaticNetworkRoute
  }
}

module.exports = createRoutesEndpoints
