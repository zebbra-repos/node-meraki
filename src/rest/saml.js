/**
 * Create a Meraki REST API wrapper for the saml-roles ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#saml-roles} for more information.
 *
 * @module meraki/rest/saml-roles
 * @param { string } [apiKey='']      The Meraki api key
 * @param { string } [target='api']   The Meraki target
 * @param { string } [basePath='/']   The Meraki base path for the saml-roles ressource
 * @param { string } rateLimiter      The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the saml-roles ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const samlEndpoints = require('./lib/rest/saml')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createSamlEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter, logger }) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the SAML roles in an organization.
   *
   * @memberof module:meraki/rest/saml-roles
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]          Optional custom scope for rate limiter
   * @param { string } orgId            The organization id
   * @return { Promise } A promise holding the SAML roles this organization
   * @example <caption>Example response</caption>
   * [{
   *   "id": "TEdJIEN1c3RvbWVy",
   *   "role": "myrole",
   *   "orgAccess": "none",
   *   "networks": [{
   *     "id": "N_1234",
   *     "access": "full"
   *   }],
   *   "tags": [{
   *     "tag": "west",
   *     "access": "read-only"
   *   }]
   * }]
   */
  function listSamlRoles ({ apiKey: localApiKey, target: localTarget, scope, orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${orgId}/samlRoles`)
  }

  /**
   * Return a SAML role.
   *
   * @memberof module:meraki/rest/saml-roles
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]          Optional custom scope for rate limiter
   * @param { string } orgId            The organization id
   * @param { string } roleId           The SAML role id
   * @return { Promise } A promise holding the SAML role for this role id
   * @example <caption>Example response</caption>
   * {
   *   "id": "TEdJIEN1c3RvbWVy",
   *   "role": "myrole",
   *   "orgAccess": "none",
   *   "networks": [{
   *     "id": "N_1234",
   *     "access": "full"
   *   }],
   *   "tags": [{
   *     "tag": "west",
   *     "access": "read-only"
   *   }]
   * }
   */
  function showSamlRole ({ apiKey: localApiKey, target: localTarget, scope, orgId, roleId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    if (!roleId) {
      return Promise.reject(new Error('The parameter roleId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${orgId}/samlRoles/${roleId}`)
  }

  /**
   * Create a SAML role.
   *
   * @memberof module:meraki/rest/saml-roles
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]          Optional custom scope for rate limiter
   * @param { string } orgId            The organization id
   * @param { string } role             The role of the SAML administrator
   * @param { string } orgAccess        The privilege of the SAML administrator on the organization (none, read-only, full)
   * @param { array } tags              The list of tags that the SAML administrator has privileges on
   * @param { string } tags.tag         The name of the tag
   * @param { string } tags.access      The privilege of the SAML administrator on the tag
   * @param { array } networks          The list of networks that the SAML administrator has privileges on
   * @param { string } networks.id      The network ID
   * @param { string } networks.access  The privilege of the SAML administrator on the network
   * @return { Promise } A promise holding the new SAML role
   * @example <caption>Example response</caption>
   * {
   *   "id": "TEdJIEN1c3RvbWVy",
   *   "role": "myrole",
   *   "orgAccess": "none",
   *   "networks": [{
   *     "id": "N_1234",
   *     "access": "full"
   *   }],
   *   "tags": [{
   *     "tag": "west",
   *     "access": "read-only"
   *   }]
   * }
   */
  function createSamlRole (data) {
    const { orgId, target: localTarget, scope } = data
    delete data.orgId
    delete data.target
    delete data.scope

    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._post(data.apiKey || apiKey, localTarget || target, scope, `${basePath}/${orgId}/samlRoles`, data)
  }

  /**
   * Update a SAML role.
   *
   * @memberof module:meraki/rest/saml-roles
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]          Optional custom scope for rate limiter
   * @param { string } orgId            The organization id
   * @param { string } roleId           The SAML role id
   * @param { string } role             The role of the SAML administrator
   * @param { string } orgAccess        The privilege of the SAML administrator on the organization (none, read-only, full)
   * @param { array } tags              The list of tags that the SAML administrator has privileges on
   * @param { string } tags.tag         The name of the tag
   * @param { string } tags.access      The privilege of the SAML administrator on the tag
   * @param { array } networks          The list of networks that the SAML administrator has privileges on
   * @param { string } networks.id      The network ID
   * @param { string } networks.access  The privilege of the SAML administrator on the network
   * @return { Promise } A promise holding the updated SAML role for this role id
   * @example <caption>Example response</caption>
   * {
   *   "id": "TEdJIEN1c3RvbWVy",
   *   "role": "myrole",
   *   "orgAccess": "none",
   *   "networks": [{
   *     "id": "N_1234",
   *     "access": "full"
   *   }],
   *   "tags": [{
   *     "tag": "west",
   *     "access": "read-only"
   *   }]
   * }
   */
  function updateSamlRole (data) {
    const { orgId, roleId, target: localTarget, scope } = data
    delete data.orgId
    delete data.roleId
    delete data.target
    delete data.scope

    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    if (!roleId) {
      return Promise.reject(new Error('The parameter roleId is mandatory'))
    }

    return axios._put(data.apiKey || apiKey, localTarget || target, scope, `${basePath}/${orgId}/samlRoles/${roleId}`, data)
  }

  /**
   * Remove a SAML role.
   *
   * @memberof module:meraki/rest/saml-roles
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]          Optional custom scope for rate limiter
   * @param { string } orgId            The organization id
   * @param { string } roleId           The SAML role id
   * @return { Promise } A promise with no data
   */
  function deleteSamlRole ({ apiKey: localApiKey, target: localTarget, scope, orgId, roleId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    if (!roleId) {
      return Promise.reject(new Error('The parameter roleId is mandatory'))
    }

    return axios._delete(localApiKey || apiKey, localTarget || target, scope, `${basePath}/${orgId}/samlRoles/${roleId}`)
  }

  return {
    listSamlRoles,
    showSamlRole,
    createSamlRole,
    updateSamlRole,
    deleteSamlRole
  }
}

module.exports = createSamlEndpoints
