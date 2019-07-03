/**
 * Create a Meraki REST API wrapper for the raw requests.
 *
 * @module meraki/rest/raw
 * @param { string } [apiKey='']      The Meraki api key
 * @param { string } [target='api']   The Meraki target
 * @param { string } [basePath='/']   The Meraki base path
 * @param { string } rateLimiter      The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the raw requests
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const rawEndpoints = require('./lib/rest/raw')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function rawEndpoints ({
  apiKey = '',
  target = 'api',
  basePath = '/',
  baseUrl = 'https://api.meraki.com',
  rateLimiter,
  logger
}) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  return {
    /**
     * Call a specific meraki GET endpoint
     *
     * @memberof module:meraki/rest/raw
     * @param { string } [apiKey] Optional custom apiKey for this request (if not set will take the inital apiKey)
     * @param { string } [target] Optional custom target for this request (if not set will take the inital target)
     * @param { string } [scope]  Optional custom scope for rate limiter
     * @param { string } path     The ressource path to call
     * @return { Promise } A promise holding the meraki api response
     *
     */
    getRaw ({ apiKey: localApiKey, target: localTarget, scope, path }) {
      return axios._get(
        localApiKey || apiKey,
        localTarget || target,
        scope,
        path
      )
    },

    /**
     * Call a specific meraki POST endpoint
     *
     * @memberof module:meraki/rest/raw
     * @param { string } [apiKey] Optional custom apiKey for this request (if not set will take the inital apiKey)
     * @param { string } [target] Optional custom target for this request (if not set will take the inital target)
     * @param { string } [scope]  Optional custom scope for rate limiter
     * @param { string } path     The ressource path to call
     * @param { object } data     The data to pass to the POST request
     * @return { Promise } A promise holding the meraki api response
     *
     */
    postRaw ({ apiKey: localApiKey, target: localTarget, scope, path, data }) {
      return axios._post(
        localApiKey || apiKey,
        localTarget || target,
        scope,
        path,
        data
      )
    },

    /**
     * Call a specific meraki PUT endpoint
     *
     * @memberof module:meraki/rest/raw
     * @param { string } [apiKey] Optional custom apiKey for this request (if not set will take the inital apiKey)
     * @param { string } [target] Optional custom target for this request (if not set will take the inital target)
     * @param { string } [scope]  Optional custom scope for rate limiter
     * @param { string } path     The ressource path to call
     * @param { object } data     The data to pass to the PUT request
     * @return { Promise } A promise holding the meraki api response
     *
     */
    putRaw ({ apiKey: localApiKey, target: localTarget, scope, path, data }) {
      return axios._put(
        localApiKey || apiKey,
        localTarget || target,
        scope,
        path,
        data
      )
    },

    /**
     * Call a specific meraki DELETE endpoint
     *
     * @memberof module:meraki/rest/raw
     * @param { string } [apiKey] Optional custom apiKey for this request (if not set will take the inital apiKey)
     * @param { string } [target] Optional custom target for this request (if not set will take the inital target)
     * @param { string } [scope]  Optional custom scope for rate limiter
     * @param { string } path     The ressource path to call
     * @return { Promise } A promise holding the meraki api response
     *
     */
    deleteRaw ({ apiKey: localApiKey, target: localTarget, scope, path }) {
      return axios._put(
        localApiKey || apiKey,
        localTarget || target,
        scope,
        path
      )
    }
  }
}

module.exports = rawEndpoints
