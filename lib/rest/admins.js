const axios = require('./axios')

/**
 * Create a Meraki REST API wrapper for the admin ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#admins} for more information.
 *
 * @module lib/rest/admins
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the admin ressource
 * @return { Object } The initialized Meraki REST API wrapper for the admin ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/organizations/${organizationId}`
 * const adminEndpoints = require('./lib/rest/admins')({ apiKey, target, basePath })
 */
function createAdminEndpoints ({ apiKey = '', target = 'api', basePath = '/' }) {
  /**
   * List the dashboard administrators in this organization.
   *
   * @memberof module:lib/rest/admins
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
  function listAdmins () {
    return axios._get(apiKey, target, `${basePath}/admins`)
  }

  /**
   * Create a new dashboard administrator.
   *
   * @memberof module:lib/rest/admins
   * @param { Object } param            The dashboard administrator information
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
  function createAdmin ({ email, name, orgAccess, tags, networks }) {
    if (!networks && !tags && !networks) {
      return Promise.reject(new Error('Administrator accounts must be granted access to either the Organization, Networks, or Tags'))
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._post(apiKey, target, `${basePath}/admins`, data)
  }

  /**
   * Update an administrator.
   *
   * @memberof module:lib/rest/admins
   * @param { Object } param            The dashboard administrator information
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
  function updateAdmin ({ adminId, email, name, orgAccess, tags, networks }) {
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._put(apiKey, target, `${basePath}/admins/${adminId}`, data)
  }

  /**
   * Revoke all access for a dashboard administrator within this organization.
   *
   * @memberof module:lib/rest/admins
   * @param { string } adminId The if of the dashboard administrator to delete
   * @return { Promise } A promise with no data
   */
  function deleteAdmin ({ adminId }) {
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/admins/${adminId}`)
  }

  return {
    listAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
  }
}

module.exports = createAdminEndpoints
