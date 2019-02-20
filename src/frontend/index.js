const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:frontend')

/**
 * Create a Meraki Frontend API wrapper. This is uses the same API as the Meraki webfrontend. So stuff can break
 *
 * @module meraki/frontend
 * @param { string } [target='account']                      The Meraki target
 * @param { string } [baseUrl='https://account.meraki.com']  The Meraki organization id
 * @param { string } [email]                             The E-Mail address to login with
 * @param { string } [password]                          The password for the login process
 * @param { Object } [rateLimiter]                       The rate limiter ([bottleneck]{@link https://github.com/SGrondin/bottleneck/blob/master/README.md}) configuration
 * @param { boolean } [rateLimiter.enabled]              Whether use the rate limiter
 * @param { number } [rateLimiter.maxConcurrent=5]       How many jobs can be running at the same time (null for unlimited)
 * @param { number } [rateLimiter.minTime=200]           How long to wait after launching a job before launching another one
 * @param { number } [rateLimiter.highWater=1000]        How long can the queue get? When the queue length exceeds that value, the selected `strategy` is executed to shed the load
 * @param { string } [rateLimiter.strategy='LEAK']       Which strategy to use if the queue gets longer than the high water mark. [Read about strategies]{@link https://github.com/SGrondin/bottleneck/blob/master/README.md#strategies}.
 * @return { Promise<Object> } The initialized Meraki Frontend API wrapper
 * @example
 * const target = 'n12'
 * const baseUrl = 'https://account.meraki.com' (default)
 * const rateLimiter = {
 *   enabled: true
 * }
 * const meraki = require('./lib')({ target, baseUrl, rateLimiter })
 */
async function createFrontendApi (settings) {
  const { target = 'account', email, password } = settings
  let { baseUrl = 'https://account.meraki.com' } = settings
  baseUrl = baseUrl.replace(/account/, target)

  // setup the rate limiter configuration
  const rateLimiterConfig = settings.rateLimiter || {}
  const rateLimiter = {
    enabled: rateLimiterConfig.enabled !== false,
    maxConcurrent: rateLimiterConfig.maxConcurrent || 5,
    minTime: rateLimiterConfig.minTime || 200,
    highWater: rateLimiterConfig.highWater || 1000,
    strategy: Bottleneck.strategy[rateLimiterConfig.strategy] || Bottleneck.strategy.LEAK
  }

  debug(`init frontend api wrapper with settings target=${target} baseUrl=${baseUrl} rateLimiter=${JSON.stringify(rateLimiter)}`)

  /**
   * The authentication endpoints
   *
   * @memberof module:meraki/frontend
   * @see module:meraki/frontend/authentication
   */
  const authenticationEndpoints = require('./authentication')({ target: target, basePath: '', baseUrl, rateLimiter })

  /**
 * The organization endpoints
 *
 * @memberof module:meraki/frontend
 * @see module:meraki/frontend/organizations
 */
  const organizationEndpoints = require('./organizations')({ target: target, basePath: '/o', baseUrl, rateLimiter })

  // login into the account
  await authenticationEndpoints.login({ target, email, password })

  return Object.assign({},
    authenticationEndpoints,
    organizationEndpoints
  )
}

module.exports = createFrontendApi
