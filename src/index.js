const debug = require('debug')('node-meraki:rest')

/**
 * Create a Meraki REST API wrapper. See the [online documentation]{@link https://dashboard.meraki.com/api_docs}
 * for more information.
 *
 * @module meraki
 * @param { Object } settings                     The configuration object used to create the api wrapper
 * @param { string } [settings.version='v0']      Which Meraki api version to use
 * @param { string } [settings.apiKey='']         The Meraki api key
 * @param { string } [settings.target='api']      The Meraki target
 * @param { string } [settings.baseUrl='https://api.meraki.com'] The Meraki organization id
 * @return { Object } The initialized Meraki REST API wrapper
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0' (default)
 * const target = 'n12'
 * const baseUrl = 'https://api.meraki.com' (default)
 * const meraki = require('./lib')({ version, apiKey, target, baseUrl })
 */
function createRestAPI (settings) {
  const { version = 'v0', apiKey = '', target = 'api' } = settings
  let { baseUrl = 'https://api.meraki.com' } = settings
  baseUrl = baseUrl.replace(/api/, target)
  const basePath = `/api/${version}`

  debug(`init rest api wrapper with settings apiKey=${apiKey} target=${target} baseUrl=${baseUrl} basePath=${basePath}`)

  /**
   * The admin endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/admins
   */
  const adminEndpoints = require('./rest/admins')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations` })

  /**
   * The client endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/clients
   */
  const clientEndpoints = require('./rest/clients')({ apiKey, target, baseUrl, basePath })

  /**
   * The config template endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/templates
   */
  const templatesEndpoints = require('./rest/templates')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations` })

  /**
   * The device endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/devices
   */
  const devicesEndpoints = require('./rest/devices')({ apiKey, target, baseUrl, basePath: `${basePath}/networks` })

  /**
   * The group policy endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/policies
   */
  const policiesEndpoints = require('./rest/policies')({ apiKey, target, baseUrl, basePath: `${basePath}/networks` })

  /**
   * The network endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/networks
   */
  const networksEndpoints = require('./rest/networks')({ apiKey, target, baseUrl, basePath })

  /**
   * The organization endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/ogranizations
   */
  const organizationEndpoints = require('./rest/organizations')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations` })

  /**
   * The SSID endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/ssids
   */
  const ssidsEndpoints = require('./rest/ssids')({ apiKey, target, baseUrl, basePath: `${basePath}/networks` })

  /**
   * The static route endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/routes
   */
  const routesEndpoints = require('./rest/routes')({ apiKey, target, baseUrl, basePath: `${basePath}/networks` })

  /**
   * The switch port endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/ports
   */
  const portsEndpoints = require('./rest/ports')({ apiKey, target, baseUrl, basePath: `${basePath}/devices` })

  /**
   * The VLAN endpoints
   *
   * @memberof module:meraki
   * @see module:lib/rest/vlans
   */
  const vlansEndpoints = require('./rest/vlans')({ apiKey, target, baseUrl, basePath: `${basePath}/networks` })

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
