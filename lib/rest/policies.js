const axios = require('./axios')

/**
 * Create a Meraki REST API wrapper for the group policy ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#group-policies} for more information.
 *
 * @module lib/rest/group-policies
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the group policy ressource
 * @return { Object } The initialized Meraki REST API wrapper for the group policy ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const policyEndpoints = require('./lib/rest/policies')({ apiKey, target, basePath })
 */
function createPoliciesEndpoints ({ apiKey = '', target = 'api', basePath = '/' }) {
  /**
   * List the group policies in a network.
   *
   * @memberof module:lib/rest/group-policies
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the group policies
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
  function listNetworkGroupPolicies ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/groupPolicies`)
  }

  return { listNetworkGroupPolicies }
}

module.exports = createPoliciesEndpoints
