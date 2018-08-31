/**
 * Create a Meraki REST API wrapper for the group policy ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#group-policies} for more information.
 *
 * @module meraki/rest/group-policies
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the group policy ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the group policy ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const policyEndpoints = require('./lib/rest/policies')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createPoliciesEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter }) {
  const axios = require('./axios')({ baseUrl, rateLimiter })

  /**
   * List the group policies in a network.
   *
   * @memberof module:meraki/rest/group-policies
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId  The id of the network for which to list the group policies
   * @return { Promise } A promise holding the group policies of this network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "name": "No video streaming",
   *     "groupPolicyId": 102
   *   }
   *   ...
   * ]
   */
  function listNetworkGroupPolicies ({ apiKey: localApiKey, target: localTarget, networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/groupPolicies`)
  }

  return { listNetworkGroupPolicies }
}

module.exports = createPoliciesEndpoints
