/**
 * Create a Meraki REST API wrapper. See the [online documentation]{@link https://dashboard.meraki.com/api_docs}
 * for more information.
 *
 * @module lib/rest
 * @param { Object } settings                     The configuration object used to create the api wrapper
 * @param { string } [settings.version='v0']      Which Meraki api version to use
 * @param { string } [settings.apiKey='']         The Meraki api key
 * @param { string } [settings.target='api']      The Meraki target
 * @param { string } [settings.organizationId=''] The Meraki organization id
 * @return { Object } The initialized Meraki REST API wrapper
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const rest = require('./lib/rest')({ version, apiKey, target, organizationId })
 */
function createRestAPI (settings) {
  const { version = 'v0', apiKey = '', target = 'api', organizationId = '' } = settings
  const basePath = `/api/${version}`

  /**
   * The admin endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/admins
   */
  const adminEndpoints = require('./rest/admins')({ apiKey, target, basePath: `${basePath}/organizations/${organizationId}` })

  /**
   * The client endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/clients
   */
  const clientEndpoints = require('./rest/clients')({ apiKey, target, basePath })

  /**
   * The config template endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/templates
   */
  const templatesEndpoints = require('./rest/templates')({ apiKey, target, basePath: `${basePath}/organizations/${organizationId}` })

  /**
   * The device endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/devices
   */
  const devicesEndpoints = require('./rest/devices')({ apiKey, target, basePath: `${basePath}/networks` })

  /**
   * The group policy endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/policies
   */
  const policiesEndpoints = require('./rest/policies')({ apiKey, target, basePath: `${basePath}/networks` })

  /**
   * The network endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/networks
   */
  const networksEndpoints = require('./rest/networks')({ apiKey, target, basePath, organizationId })

  /**
   * The organization endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/ogranizations
   */
  const organizationEndpoints = require('./rest/organizations')({ apiKey, target, basePath: `${basePath}/organizations/${organizationId}` })

  /**
   * The SSID endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/ssids
   */
  const ssidsEndpoints = require('./rest/ssids')({ apiKey, target, basePath: `${basePath}/networks` })

  /**
   * The static route endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/routes
   */
  const routesEndpoints = require('./rest/routes')({ apiKey, target, basePath: `${basePath}/networks` })

  /**
   * The switch port endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/ports
   */
  const portsEndpoints = require('./rest/ports')({ apiKey, target, basePath: `${basePath}/devices` })

  /**
   * The VLAN endpoints
   *
   * @memberof module:lib/rest
   * @see module:lib/rest/vlans
   */
  const vlansEndpoints = require('./rest/vlans')({ apiKey, target, basePath: `${basePath}/networks` })

  return Object.assign({},
    adminEndpoints,
    clientEndpoints,
    templatesEndpoints,
    devicesEndpoints,
    policiesEndpoints,
    networksEndpoints,
    organizationEndpoints,
    ssidsEndpoints,
    routesEndpoints,
    portsEndpoints,
    vlansEndpoints
  )
}

module.exports = createRestAPI
