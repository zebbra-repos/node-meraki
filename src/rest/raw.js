function rawEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter, logger }) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  return {
    getRaw ({ apiKey: localApiKey, target: localTarget, scope, path }) {
      return axios._get(localApiKey || apiKey, localTarget || target, scope, path)
    },

    postRaw ({ apiKey: localApiKey, target: localTarget, scope, path, data }) {
      return axios._post(localApiKey || apiKey, localTarget || target, scope, path, data)
    },

    putRaw ({ apiKey: localApiKey, target: localTarget, scope, path, data }) {
      return axios._put(localApiKey || apiKey, localTarget || target, scope, path, data)
    },

    deleteRaw ({ apiKey: localApiKey, target: localTarget, scope, path }) {
      return axios._put(localApiKey || apiKey, localTarget || target, scope, path)
    }
  }
}

module.exports = rawEndpoints
