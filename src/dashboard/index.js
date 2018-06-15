const assert = require('assert')
const debug = require('debug')('node-meraki:dashboard')
const SessionStore = require('./sessionStore')

/**
 * Create a Meraki Dashboard API wrapper. This is an experimental feature and must be
 * used at your own risk.
 *
 * @module meraki/dashboard
 * @param { string } [target='api']                      The Meraki target
 * @param { string } [baseUrl='https://api.meraki.com']  The Meraki base url
 * @param { string } email                               The Meraki dashboard account email
 * @param { string } password                            The Meraki dashboard account password
 * @param { boolean } [keepAlive=true]                   Whether to trigger the idleKeepAlive requests for the stored sessions
 * @return { Object } The initialized Meraki Dashboard API wrapper
 * @example
 * const target = 'n12'
 * const baseUrl = 'https://api.meraki.com' (default)
 * const email = 'john.doe@email.com'
 * const password = 'password1234'
 *
 * const dashboardAPI = require('./lib/dashboard')({ target, baseUrl, email, password })
 */
function createDashboardAPI (settings) {
  const { target = 'api', email, password, keepAlive } = settings
  let { baseUrl = 'https://api.meraki.com' } = settings
  baseUrl = baseUrl.replace(/api/, target)

  assert(email, 'email is required')
  assert(password, 'password is required')

  debug(`init rest api wrapper with settings target=${target} baseUrl=${baseUrl} email=${email} password=${password} keepAlive=${keepAlive}`)
  const store = new SessionStore(baseUrl, email, password, keepAlive)

  /**
   * The admin endpoints
   *
   * @memberof module:meraki/dashboard
   * @see module:meraki/dashboard/admins
   */
  const adminsEndpoints = require('./admins')({ baseUrl, store })

  /**
   * The organization endpoints
   *
   * @memberof module:meraki/dashboard
   * @see module:meraki/dashboard/ogranizations
   */
  const organizationsEndpoints = require('./organizations')({ baseUrl, store, email })

  return Object.assign({},
    adminsEndpoints,
    organizationsEndpoints
  )
}

module.exports = createDashboardAPI
