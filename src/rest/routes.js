/**
 * Create a Meraki REST API wrapper for the static route ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#static-routes} for more information.
 *
 * @module meraki/rest/static-routes
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the static route ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the static route ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const routeEndpoints = require('./lib/rest/routes')({ apiKey, target, basePath, baseUrl })
 */
function createRoutesEndpoints ({ apiKey, target, basePath, baseUrl = 'https://api.meraki.com', rateLimiter, logger }) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the static routes for this network.
   *
   * @memberof module:meraki/rest/static-routes
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the static routes
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
  function listStaticNetworkRoutes ({ apiKey: localApiKey, target: localTarget, scope, networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${networkId}/staticRoutes`)
  }

  /**
   * Return a static route.
   *
   * @memberof module:meraki/rest/static-routes
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the static routes
   * @param { string } srId       The id of the static route for which to show the details
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
  function showStaticNetworkRoute ({ apiKey: localApiKey, target: localTarget, scope, networkId, srId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${networkId}/staticRoutes/${srId}`)
  }

  /**
   * Update a static route.
   *
   * @memberof module:meraki/rest/static-routes
   * @param { string } [apiKey]           Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]           Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]            Optional custom scope for rate limiter
   * @param { string } networkId          The id of the network for which to list the static routes
   * @param { string } srId               The id of the static route to update
   * @param { string } name               The name of the static route
   * @param { string } subnet             The subnet of the static route
   * @param { string } gatewayIp          The gateway IP (next hop) of the static route
   * @param { boolean } enabled           The enabled state of the static route
   * @param { string } fixedIpAssignments The DHCP fixed IP assignments on the static route
   * @param { string } reservedIpRanges   The DHCP reserved IP ranges on the static route
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
  function updateStaticNetworkRoute ({ apiKey: localApiKey, target: localTarget, scope, networkId, srId, name, subnet, gatewayIp, enabled, fixedIpAssignments, reservedIpRanges }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    const data = { name, subnet, gatewayIp, enabled, fixedIpAssignments, reservedIpRanges }
    return axios._put(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${networkId}/staticRoutes/${srId}`, data)
  }

  /**
   * Add a static route.
   *
   * @memberof module:meraki/rest/static-routes
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the static routes
   * @param { string } name       The name of the static route
   * @param { string } subnet     The subnet of the static route
   * @param { string } gatewayIp  The gateway IP (next hop) of the static route
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
  function createStaticNetworkRoute ({ apiKey: localApiKey, target: localTarget, scope, networkId, name, subnet, gatewayIp }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const data = { name, subnet, gatewayIp }
    return axios._post(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${networkId}/staticRoutes`, data)
  }

  /**
   * Delete a static route.
   *
   * @memberof module:meraki/rest/static-routes
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the static routes
   * @param { string } srId       The id of the static route to remove
   * @return { Promise } A promise with no data
   */
  function deleteStaticNetworkRoute ({ apiKey: localApiKey, target: localTarget, scope, networkId, srId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!srId) {
      return Promise.reject(new Error('The parameter srId is mandatory'))
    }

    return axios._delete(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${networkId}/staticRoutes/${srId}`)
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
