/**
 * Create a Meraki REST API wrapper for the admin ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#admins} for more information.
 *
 * @module meraki/rest/admins
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the admin ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the admin ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/organizations`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const adminEndpoints = require('./lib/rest/admins')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createAdminEndpoints ({
  apiKey = '',
  target = 'api',
  basePath = '/',
  baseUrl = 'https://api.meraki.com',
  rateLimiter,
  logger
}) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the dashboard administrators in this organization.
   *
   * @memberof module:meraki/rest/admins
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } orgId      The organization id for which to list the admins
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
  function listAdmins ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    orgId
  }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${orgId}/admins`
    )
  }

  /**
   * Create a new dashboard administrator.
   *
   * @memberof module:meraki/rest/admins
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } orgId      The organization id
   * @param { string } email      The email of the dashboard administrator. This attribute can not be updated
   * @param { string } name       The name of the dashboard administrator
   * @param { string } orgAcess   The privilege of the dashboard administrator on the organization (full, read-only, none)
   * @param { Array }  tags       The list of tags that the dashboard administrator has privileges on
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
  function createAdmin ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    orgId,
    email,
    name,
    orgAccess,
    tags,
    networks
  }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!orgAccess && !tags && !networks) {
      return Promise.reject(
        new Error(
          'Administrator accounts must be granted access to either the Organization, Networks, or Tags'
        )
      )
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._post(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${orgId}/admins`,
      data
    )
  }

  /**
   * Update an administrator.
   *
   * @memberof module:meraki/rest/admins
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } orgId      The organization id
   * @param { string } adminId    The id of the dashboard administrator
   * @param { string } email      The email of the dashboard administrator. This attribute can not be updated
   * @param { string } name       The name of the dashboard administrator
   * @param { string } orgAcess   The privilege of the dashboard administrator on the organization (full, read-only, none)
   * @param { Array }  tags       The list of tags that the dashboard administrator has privileges on
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
  function updateAdmin ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    orgId,
    adminId,
    email,
    name,
    orgAccess,
    tags,
    networks
  }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    const data = { email, name, orgAccess, tags, networks }
    return axios._put(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${orgId}/admins/${adminId}`,
      data
    )
  }

  /**
   * Revoke all access for a dashboard administrator within this organization.
   *
   * @memberof module:meraki/rest/admins
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } orgId      The organization id
   * @param { string } adminId    The if of the dashboard administrator to delete
   * @return { Promise } A promise with no data
   */
  function deleteAdmin ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    orgId,
    adminId
  }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    if (!adminId) {
      return Promise.reject(new Error('The parameter adminId is mandatory'))
    }

    return axios._delete(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${orgId}/admins/${adminId}`
    )
  }

  return {
    listAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
  }
}

module.exports = createAdminEndpoints
