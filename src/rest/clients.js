/**
 * Create a Meraki REST API wrapper for the client ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#clients} for more information.
 *
 * @module meraki/rest/clients
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the client ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the client ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const clientEndpoints = require('./lib/rest/clients')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createClientsEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter, logger }) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the clients of a device, up to a maximum of a month ago. The usage of each client is
   * returned in kilobytes. If the device is a switch, the switchport is returned; otherwise
   * the switchport field is null.
   *
   * @memberof module:meraki/rest/clients
   * @param { string } [apiKey]       Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]       Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]        Optional custom scope for rate limiter
   * @param { string } deviceSerial   The serial number of the device for which to list the clients
   * @param { number } timespan       The timespan for which clients will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds)
   * @return { Promise } A promise holding the clients for this device
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "description": "Hayg's Nexus 5",
   *     "mdnsName": "Hayg's Nexus 5",
   *     "dhcpHostname": "HaygNexus5",
   *     "usage": {"sent": 1337.0, "recv": 7331.0},
   *     "mac": "00:18:D3:AD:B3:3F",
   *     "ip": "1.2.3.4",
   *     "id": "lk12uq",
   *     "switchport": null
   *   },
   *   ...
   * ]
   */
  function listClients ({ apiKey: localApiKey, target: localTarget, scope, deviceSerial, timespan = 2592000 }) {
    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    const params = { timespan }
    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/devices/${deviceSerial}/clients`, params)
  }

  /**
   * Return the policy assigned to a client on the network.
   *
   * @memberof module:meraki/rest/clients
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the clients
   * @param { number } timespan   The timespan for which clients will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds)
   * @param { string } mac        The mac address of the client for which to show the assigned policy
   * @return { Promise } A promise holding the clients policy group
   * @example <caption>Example response</caption>
   * {
   *   "mac": "00:11:22:33:44:55",
   *   "type": "Group policy",
   *   "groupPolicyId": 101
   * }
   */
  function showClientPolicy ({ apiKey: localApiKey, target: localTarget, scope, networkId, timespan = 2592000, mac }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!mac) {
      return Promise.reject(new Error('The parameter mac is mandatory'))
    }

    const params = { timespan }
    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/networks/${networkId}/clients/${mac}/policy`, params)
  }

  /**
   * Update the policy assigned to a client on the network.
   *
   * @memberof module:meraki/rest/clients
   * @param { string } [apiKey]       Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]       Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]        Optional custom scope for rate limiter
   * @param { string } networkId      The id of the network for which to list the clients
   * @param { number } timespan       The timespan for which clients will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds)
   * @param { string } mac            The mac address of the client for which to show the assigned policy
   * @param { string } devicePolicy   The group policy (Whitelisted, Blocked, Normal, Group policy)
   * @param { number } groupPolicyId  [optional] If devicePolicy param is set to `group` this param is used to specify the group ID
   * @return { Promise } A promise holding the updated clients policy group
   * @example <caption>Example response</caption>
   * {
   *   "mac": "00:11:22:33:44:55",
   *   "type": "Group policy",
   *   "groupPolicyId": 101
   * }
   */
  function updateClientPolicy ({ apiKey: localApiKey, target: localTarget, scope, networkId, timespan = 2592000, mac, devicePolicy, groupPolicyId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!mac) {
      return Promise.reject(new Error('The parameter mac is mandatory'))
    }

    const data = { timespan, devicePolicy, groupPolicyId }
    return axios._put(localApiKey || apiKey, localTarget || target, scope, `${basePath}/networks/${networkId}/clients/${mac}/policy`, data)
  }

  /**
   * Return the splash authorization for a client, for each SSID they've associated with through splash.
   *
   * @memberof module:meraki/rest/clients
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the clients
   * @param { number } timespan   The timespan for which clients will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds)
   * @param { string } mac        The mac address of the client for which to show the assigned policy
   * @return { Promise } A promise holding splash authorization information for this client
   * @example <caption>Example response</caption>
   * {
   *   "ssids": {
   *     "0": {
   *       "isAuthorized": true,
   *       "authorizedAt": "2017-07-19 16:24:13 UTC",
   *       "expiresAt": "2017-07-20 16:24:13 UTC"
   *     },
   *     "2": {
   *       "isAuthorized": false
   *     }
   *   }
   * }
   */
  function showClientSplashAuthorization ({ apiKey: localApiKey, target: localTarget, scope, networkId, timespan = 2592000, mac }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!mac) {
      return Promise.reject(new Error('The parameter mac is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/networks/${networkId}/clients/${mac}/splashAuthorizationStatus`)
  }

  /**
   * Update a client's splash authorization.
   *
   * @memberof module:meraki/rest/clients
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the clients
   * @param { string } mac        The mac address of the client for which to show the assigned policy
   * @param { Object } ssids      The target SSIDs. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency
   * @return { Promise } A promise holding the updated splash authorization information for this client
   * @example <caption>Example ssids data</caption>
   * {
   *   "ssids": {
   *     "0": {
   *       "isAuthorized": true
   *     },
   *     "2": {
   *       "isAuthorized": false
   *     }
   *   }
   * }
   * @example <caption>Example response</caption>
   * {
   *   "ssids": {
   *     "0": {
   *       "isAuthorized": true,
   *       "authorizedAt": "2017-07-19 16:24:13 UTC",
   *       "expiresAt": "2017-07-20 16:24:13 UTC"
   *     },
   *     "2": {
   *       "isAuthorized": false
   *     }
   *   }
   * }
   */
  function updateClientSplashAuthorization ({ apiKey: localApiKey, target: localTarget, scope, networkId, mac, ssids }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!mac) {
      return Promise.reject(new Error('The parameter mac is mandatory'))
    }

    const data = { ssids }
    return axios._put(localApiKey || apiKey, localTarget || target, scope, `${basePath}/networks/${networkId}/clients/${mac}/splashAuthorizationStatus`, data)
  }

  return {
    listClients,
    showClientPolicy,
    updateClientPolicy,
    showClientSplashAuthorization,
    updateClientSplashAuthorization
  }
}

module.exports = createClientsEndpoints
