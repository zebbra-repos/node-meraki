const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:rest')

/**
 * Create a Meraki REST API wrapper. See the [online documentation]{@link https://dashboard.meraki.com/api_docs}
 * for more information.
 *
 * @module meraki/rest
 * @param { string } [version='v0']                      Which Meraki api version to use
 * @param { string } [apiKey='']                         The Meraki api key
 * @param { string } [target='api']                      The Meraki target
 * @param { string } [baseUrl='https://api.meraki.com']  The Meraki organization id
 * @param { Object } [rateLimiter]                       The rate limiter ([bottleneck]{@link https://github.com/SGrondin/bottleneck/blob/master/README.md}) configuration
 * @param { boolean } [rateLimiter.enabled]              Whether use the rate limiter
 * @param { number } [rateLimiter.maxConcurrent=5]       How many jobs can be running at the same time (null for unlimited)
 * @param { number } [rateLimiter.minTime=200]           How long to wait after launching a job before launching another one
 * @param { number } [rateLimiter.highWater=1000]        How long can the queue get? When the queue length exceeds that value, the selected `strategy` is executed to shed the load
 * @param { string } [rateLimiter.strategy='LEAK']       Which strategy to use if the queue gets longer than the high water mark. [Read about strategies]{@link https://github.com/SGrondin/bottleneck/blob/master/README.md#strategies}.
 * @return { Object } The initialized Meraki REST API wrapper
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0' (default)
 * const target = 'n12'
 * const baseUrl = 'https://api.meraki.com' (default)
 * const rateLimiter = {
 *   enabled: true
 * }
 * const meraki = require('./lib')({ version, apiKey, target, baseUrl, rateLimiter })
 */
function createRestAPI (settings) {
  const { version = 'v0', apiKey = '', target = 'api' } = settings
  let { baseUrl = 'https://api.meraki.com' } = settings
  baseUrl = baseUrl.replace(/api/, target)
  const basePath = `/api/${version}`

  // setup the rate limiter configuration
  const rateLimiterConfig = settings.rateLimiter || {}
  const rateLimiter = {
    enabled: rateLimiterConfig.enabled !== false,
    maxConcurrent: rateLimiterConfig.maxConcurrent || 5,
    minTime: rateLimiterConfig.minTime || 200,
    highWater: rateLimiterConfig.highWater || 1000,
    strategy: Bottleneck.strategy[rateLimiterConfig.strategy] || Bottleneck.strategy.LEAK
  }

  debug(`init rest api wrapper with settings apiKey=${apiKey} target=${target} baseUrl=${baseUrl} basePath=${basePath} rateLimiter=${JSON.stringify(rateLimiter)}`)

  /**
   * The admin endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/admins
   */
  const adminEndpoints = require('./admins')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations`, rateLimiter })

  /**
   * The client endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/clients
   */
  const clientEndpoints = require('./clients')({ apiKey, target, baseUrl, basePath, rateLimiter })

  /**
   * The config template endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/templates
   */
  const templatesEndpoints = require('./templates')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations`, rateLimiter })

  /**
   * The device endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/devices
   */
  const devicesEndpoints = require('./devices')({ apiKey, target, baseUrl, basePath: `${basePath}/networks`, rateLimiter })

  /**
   * The group policy endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/policies
   */
  const policiesEndpoints = require('./policies')({ apiKey, target, baseUrl, basePath: `${basePath}/networks`, rateLimiter })

  /**
   * The network endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/networks
   */
  const networksEndpoints = require('./networks')({ apiKey, target, baseUrl, basePath, rateLimiter })

  /**
   * The organization endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/ogranizations
   */
  const organizationEndpoints = require('./organizations')({ apiKey, target, baseUrl, basePath: `${basePath}/organizations`, rateLimiter })

  /**
   * The SSID endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/ssids
   */
  const ssidsEndpoints = require('./ssids')({ apiKey, target, baseUrl, basePath: `${basePath}/networks`, rateLimiter })

  /**
   * The static route endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/routes
   */
  const routesEndpoints = require('./routes')({ apiKey, target, baseUrl, basePath: `${basePath}/networks`, rateLimiter })

  /**
   * The switch port endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/ports
   */
  const portsEndpoints = require('./ports')({ apiKey, target, baseUrl, basePath: `${basePath}/devices`, rateLimiter })

  /**
   * The VLAN endpoints
   *
   * @memberof module:meraki/rest
   * @see module:meraki/rest/vlans
   */
  const vlansEndpoints = require('./vlans')({ apiKey, target, baseUrl, basePath: `${basePath}/networks`, rateLimiter })

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