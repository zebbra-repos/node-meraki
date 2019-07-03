/**
 * Create a Meraki REST API wrapper for the http servers (webhooks) ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#http-servers} for more information.
 *
 * @module meraki/rest/httpServers
 * @param { string } [apiKey='']      The Meraki api key
 * @param { string } [target='api']   The Meraki target
 * @param { string } [basePath='/']   The Meraki base path for the ressource
 * @param { string } [baseUrl='https://api.meraki.com']   The Meraki base url for the ressource
 * @param { string } rateLimiter      The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the http server (webhook) ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/network`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const httpServersEndpoints = require('./lib/rest/httpServers')({ apiKey, target, basePath, baseUrl, rateLimiter, logger })
 */
function createHTTPServersEndpoints ({
  apiKey = '',
  target = 'api',
  basePath = '/',
  baseUrl = 'https://api.meraki.com',
  rateLimiter,
  logger
}) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the http servers for a network.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]      Optional custom scope for rate limiter
   * @param { string } networkId    The id of the network for which to list the http servers
   * @return { Promise } A promise holding the http servers for this network
   * @example <caption>Example response</caption>
   * [
   *  {
   *    "id": "ABC123",
   *    "networkId": "N_123",
   *    "name": "My HTTP server",
   *    "url": "https://www.example.com/webhooks",
   *    "sharedSecret": "foobar"
   *  }
   * ]
   */
  function listHTTPServers ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers`
    )
  }

  /**
   * Get a http servers of a network.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]      Optional custom scope for rate limiter
   * @param { string } networkId    The id of the network
   * @param { string } webhookId    The id of the webhook (http server)
   * @return { Promise } A promise holding the http server of this network
   * @example <caption>Example response</caption>
   * {
   *    "id": "ABC123",
   *    "networkId": "N_123",
   *    "name": "My HTTP server",
   *    "url": "https://www.example.com/webhooks",
   *    "sharedSecret": "foobar"
   *  }
   */
  function getHTTPServer ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    webhookId
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    if (!webhookId) { return Promise.reject(new Error('The parameter webhookId is mandatory')) }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers/${webhookId}`
    )
  }

  /**
   * Update http server.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]             Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]             Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]              Optional custom scope for rate limiter
   * @param { string } networkId            The id of the network
   * @param { string } webhookId            The id of the webhook (http server)
   * @param { object } webhook              The webhook (http server) itself
   * @param { string } webhook.name         The name of the webhook
   * @param { string } webhook.url          The url / target of the webhook
   * @param { string } webhook.sharedSecret The shared secret of this webhook
   * @return { Promise } A promise holding the updated webhook (http server)
   * @example <caption>Example request data</caption>
   *   {
   *     "name": "My HTTP server",
   *     "url": "https://www.example.com/webhooks",
   *     "sharedSecret": "foobar"
   *   }
   * @example <caption>Example response</caption>
   *   {
   *     "id": "ABC123",
   *     "networkId": "N_123",
   *     "name": "My HTTP server",
   *     "url": "https://www.example.com/webhooks",
   *     "sharedSecret": "foobar"
   *   }
   */
  function updateHTTPServer ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    webhookId,
    webhook
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    if (!webhookId) { return Promise.reject(new Error('The parameter webhookId is mandatory')) }
    if (!webhook) { return Promise.reject(new Error('The parameter webhook is mandatory')) }
    if (!webhook.hasOwnProperty('name')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property name')
      )
    }
    if (!webhook.hasOwnProperty('url')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property url')
      )
    }
    if (!webhook.hasOwnProperty('sharedSecret')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property sharedSecret')
      )
    }

    return axios._put(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers/${webhookId}`,
      webhook
    )
  }

  /**
   * Add a http server.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]             Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]             Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]              Optional custom scope for rate limiter
   * @param { string } networkId            The id of the network
   * @param { object } webhook              The webhook (http server) itself
   * @param { string } webhook.name         The name of the webhook
   * @param { string } webhook.url          The url / target of the webhook
   * @param { string } webhook.sharedSecret The shared secret of this webhook
   * @return { Promise } A promise holding the webhook (http server)
   * @example <caption>Example request data</caption>
   *   {
   *     "name": "My HTTP server",
   *     "url": "https://www.example.com/webhooks",
   *     "sharedSecret": "foobar"
   *   }
   * @example <caption>Example response</caption>
   *   {
   *     "id": "ABC123",
   *     "networkId": "N_123",
   *     "name": "My HTTP server",
   *     "url": "https://www.example.com/webhooks",
   *     "sharedSecret": "foobar"
   *   }
   */
  function addHTTPServer ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    webhook
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    if (!webhook) { return Promise.reject(new Error('The parameter webhook is mandatory')) }
    if (!webhook.hasOwnProperty('name')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property name')
      )
    }
    if (!webhook.hasOwnProperty('url')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property url')
      )
    }
    if (!webhook.hasOwnProperty('sharedSecret')) {
      return Promise.reject(
        new Error('The parameter webhook must have a property sharedSecret')
      )
    }

    return axios._post(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers`,
      webhook
    )
  }

  /**
   * Delete a http servers of a network.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]      Optional custom scope for rate limiter
   * @param { string } networkId    The id of the network
   * @param { string } webhookId    The id of the webhook (http server)
   * @return { Promise } A promise holding nothing
   * @example <caption>Example response</caption>
   * (empty)
   */
  function deleteHTTPServer ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    webhookId
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    if (!webhookId) { return Promise.reject(new Error('The parameter webhookId is mandatory')) }

    return axios._delete(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers/${webhookId}`
    )
  }

  /**
   * send a test webhook.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]             Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]             Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]              Optional custom scope for rate limiter
   * @param { string } networkId            The id of the network
   * @param { string } url                  The url where the webhook should be sent to
   * @return { Promise } A promise holding the webhook test
   * @example <caption>Example request data</caption>
   *   {
   *     "url": "https://www.example.com/webhooks"
   *   }
   * @example <caption>Example response</caption>
   *   {
   *     "id": "1234",
   *     "url": "https://www.example.com/path",
   *     "status": "enqueued"
   *   }
   */
  function sendTestWebhook ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    url
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    // I don't care if it is an empty string or 0
    if (typeof url === 'undefined') { return Promise.reject(new Error('The parameter url is mandatory')) }

    return axios._post(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers/webhookTests`,
      { url: url }
    )
  }

  /**
   * Return the status of a webhook test.
   *
   * @memberof module:meraki/rest/httpServers
   * @param { string } [apiKey]      Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]      Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]       Optional custom scope for rate limiter
   * @param { string } networkId     The id of the network for which to list the http servers
   * @param { string } webhookTestId The id of the test
   * @return { Promise } A promise holding the status of this test
   * @example <caption>Example response</caption>
   *   {
   *     "id": "1234",
   *     "url": "https://www.example.com/path",
   *     "status": "enqueued"
   *   }
   */
  function getWebhookTestStatus ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    webhookTestId
  }) {
    if (!networkId) { return Promise.reject(new Error('The parameter networkId is mandatory')) }
    if (!webhookTestId) {
      return Promise.reject(
        new Error('The parameter webhookTestId is mandatory')
      )
    }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/httpServers/webhookTests/${webhookTestId}`
    )
  }

  return {
    listHTTPServers,
    getHTTPServer,
    updateHTTPServer,
    addHTTPServer,
    deleteHTTPServer,
    sendTestWebhook,
    getWebhookTestStatus
  }
}

module.exports = createHTTPServersEndpoints
