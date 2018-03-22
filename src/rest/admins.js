/**
 * Create a Meraki REST API wrapper for the admin ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#admins} for more information.
 *
 * @module meraki/rest/admins
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the admin ressource
 * @return { Object } The initialized Meraki REST API wrapper for the admin ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/organizations`
 * const adminEndpoints = require('./lib/rest/admins')({ apiKey, target, basePath, baseUrl })
 */
function createAdminEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com' }) {
  const axios = require('./axios')({ baseUrl })

  /**
   * List the dashboard administrators in this organization.
   *
   * @memberof module:meraki/rest/admins
   * @param { Object } param            The dashboard administrator information
   * @param { string } param.orgId      The organization id for which to list the admins
   * @return { Promise } A promise holding the dashboard administrators in this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id":"1",
   *     "name":"Miles Meraki",
   *     "email":"miles@meraki.com",
   *     "orgAccess":"none",
   *     "tags":[
   *       {
   *         "tag":"west",
   *         "access":"read-only"
   *       }
   *     ],
   *     "networks":[
   *       {
   *         "id":"N_249",
   *         "access":"full"
   *       }
   *     ]
   *   }
   * ]
   */
  function listAdmins ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}/admins`)
  }

  /**
   * Create a new dashboard administrator.
   *
   * @memberof module:meraki/rest/admins
   * @param { Object } param            The dashboard administrator information
   * @param { string } param.orgId      The organization id
   * @param { string } param.email      The email of the dashboard administrator. This attribute can not be updated
   * @param { string } param.name       The name of the dashboard administrator
   * @param { string } param.orgAcess   The privilege of the dashboard administrator on the organization (full, read-only, none)
   * @param { Array }  param.tags       The list of tags that the dashboard administrator has privileges on
   * @return { Promise } A promise holding the newly created dashboard administrator
   * @example <caption>Example response</caption>
   * {
   *   "id":"212406",
   *   "name":"Miles Meraki",
   *   "email":"miles@meraki.com",
   *   "orgAccess":"none",
   *   "tags":[
   *     {
   *       "tag":"west",
   *       "access":"read-only"
   *     }
   *   ],
   *   "networks":[]
   * }
   */
  function createAdmin ({ orgId, email, name, orgAccess, tags, networks }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!orgAccess && !tags && !networks) {
      return Promise.reject(new Error('Administrator accounts must be granted access to either the Organization, Networks, or Tags'))
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._post(apiKey, target, `${basePath}/${orgId}/admins`, data)
  }

  /**
   * Update an administrator.
   *
   * @memberof module:meraki/rest/admins
   * @param { Object } param            The dashboard administrator information
   * @param { string } param.orgId      The organization id
   * @param { string } param.adminId    The id of the dashboard administrator
   * @param { string } param.email      The email of the dashboard administrator. This attribute can not be updated
   * @param { string } param.name       The name of the dashboard administrator
   * @param { string } param.orgAcess   The privilege of the dashboard administrator on the organization (full, read-only, none)
   * @param { Array }  param.tags       The list of tags that the dashboard administrator has privileges on
   * @return { Promise } A promise holding the updated dashboard administrator
   * @example <caption>Example response</caption>
   * {
   *   "id":"212406",
   *   "name":"Miles Meraki",
   *   "email":"miles@meraki.com",
   *   "orgAccess":"read-only",
   *   "tags":[
   *     {
   *       "tag":"west",
   *       "access":"read-only"
   *     }
   *   ],
   *   "networks":[]
   * }
   */
  function updateAdmin ({ orgId, adminId, email, name, orgAccess, tags, networks }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._put(apiKey, target, `${basePath}/${orgId}/admins/${adminId}`, data)
  }

  /**
   * Revoke all access for a dashboard administrator within this organization.
   *
   * @memberof module:meraki/rest/admins
   * @param { Object } param            The dashboard administrator information
   * @param { string } param.orgId      The organization id
   * @param { string } param.adminId    The if of the dashboard administrator to delete
   * @return { Promise } A promise with no data
   */
  function deleteAdmin ({ orgId, adminId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/${orgId}/admins/${adminId}`)
  }

  return {
    listAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
  }
}

module.exports = createAdminEndpoints
