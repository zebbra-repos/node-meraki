/**
 * Create a Meraki REST API wrapper for the config template ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#config-templates} for more information.
 *
 * @module meraki/rest/config-templates
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the config template ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the config template ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const templateEndpoints = require('./lib/rest/templates')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createTemplatesEndpoints ({ apiKey, target, basePath, baseUrl = 'https://api.meraki.com', rateLimiter }) {
  const axios = require('./axios')({ baseUrl, rateLimiter })

  /**
   * List the configuration templates for this organization.
   *
   * @memberof module:meraki/rest/config-templates
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } orgId      The organization id
   * @return { Promise } A promise holding the configuration templates for this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id": "N_1234",
   *     "name": "Your config template"
   *   }
   * ]
   */
  function listConfigurationTemplates ({ apiKey: localApiKey, target: localTarget, orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${orgId}/configTemplates`)
  }

  /**
   * Remove a configuration template.
   *
   * @memberof module:meraki/rest/config-templates
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } orgId      The organization id
   * @param { string } templateId The id of the template to delete
   * @return { Promise } A promise with no data
   */
  function deleteConfigurationTemplate ({ apiKey: localApiKey, target: localTarget, orgId, templateId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!templateId) {
      return Promise.reject(new Error('The parameter templateId is mandatory'))
    }

    return axios._delete(localApiKey || apiKey, localTarget || target, `${basePath}/${orgId}/configTemplates/${templateId}`)
  }

  return {
    listConfigurationTemplates,
    deleteConfigurationTemplate
  }
}

module.exports = createTemplatesEndpoints
