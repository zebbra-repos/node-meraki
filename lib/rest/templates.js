const axios = require('./axios')

/**
 * Create a Meraki REST API wrapper for the config template ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#config-templates} for more information.
 *
 * @module lib/rest/config-templates
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the config template ressource
 * @return { Object } The initialized Meraki REST API wrapper for the config template ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/organizations/${organizationId}`
 * const adminEndpoints = require('./lib/rest/organization')({ apiKey, target, basePath })
 */
function createTemplatesEndpoints ({ apiKey, target, basePath }) {
  /**
   * List the configuration templates for this organization.
   *
   * @memberof module:lib/rest/config-templates
   * @return { Promise } A promise holding the configuration templates for this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id": "N_1234",
   *     "name": "Your config template"
   *   }
   * ]
   */
  function listConfigurationTemplates () {
    return axios._get(apiKey, target, `${basePath}/configTemplates`)
  }

  /**
   * Remove a configuration template.
   *
   * @memberof module:lib/rest/config-templates
   * @param { Object } param                  The parameters for this request
   * @param { string } param.templateId       The id of the template to delete
   * @return { Promise } A promise with no data
   */
  function deleteConfigurationTemplate ({ templateId }) {
    if (!templateId) {
      return Promise.reject(new Error('The parameter templateId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/configTemplates/${templateId}`)
  }

  return {
    listConfigurationTemplates,
    deleteConfigurationTemplate
  }
}

module.exports = createTemplatesEndpoints
