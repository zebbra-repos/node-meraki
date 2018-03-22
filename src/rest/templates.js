/**
 * Create a Meraki REST API wrapper for the config template ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#config-templates} for more information.
 *
 * @module meraki/rest/config-templates
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the config template ressource
 * @return { Object } The initialized Meraki REST API wrapper for the config template ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const templateEndpoints = require('./lib/rest/templates')({ apiKey, target, basePath, baseUrl })
 */
function createTemplatesEndpoints ({ apiKey, target, basePath, baseUrl = 'https://api.meraki.com' }) {
  const axios = require('./axios')({ baseUrl })

  /**
   * List the configuration templates for this organization.
   *
   * @memberof module:meraki/rest/config-templates
   * @param { Object } param            The template information
   * @param { string } param.orgId      The organization id
   * @return { Promise } A promise holding the configuration templates for this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id": "N_1234",
   *     "name": "Your config template"
   *   }
   * ]
   */
  function listConfigurationTemplates ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}/configTemplates`)
  }

  /**
   * Remove a configuration template.
   *
   * @memberof module:meraki/rest/config-templates
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The organization id
   * @param { string } param.templateId       The id of the template to delete
   * @return { Promise } A promise with no data
   */
  function deleteConfigurationTemplate ({ orgId, templateId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!templateId) {
      return Promise.reject(new Error('The parameter templateId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/${orgId}/configTemplates/${templateId}`)
  }

  return {
    listConfigurationTemplates,
    deleteConfigurationTemplate
  }
}

module.exports = createTemplatesEndpoints
