const axios = require('axios')
const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:axios')
const JSONBigInt = require('json-bigint')({ 'storeAsString': true })

let instance
let limiter

const handleBigInt = (data) => {
  try {
    return JSONBigInt.parse(data)
  } catch (err) {
    return data
  }
}

function _exec ({ method, apiKey, target = 'api', url = '/', data, params = {} }) {
  const baseURL = instance.defaults.baseURL.replace(/api/, target)

  let maxRedirects = 5
  if (target === 'api') {
    maxRedirects = 0
  }

  const options = {
    method,
    baseURL,
    url,
    maxRedirects,
    headers: {
      'X-Cisco-Meraki-API-Key': apiKey,
      maxredirects: maxRedirects
    },
    withCredentials: true,
    params,
    data
  }

  debug(options)
  if (instance.logger) {
    let message = `=> ${options.method}: ${options.url}`
    if (options.params) {
      message += ` Params: ${JSON.stringify(options.params)}`
    }
    if (options.data) {
      message += ` Data: ${JSON.stringify(options.data)}`
    }

    instance.logger.info(message)
  }

  if (limiter) {
    return limiter
      .schedule(instance, options)
      .then((response) => (params.withFullResponse) ? response : response.data)
      .then((response) => {
        if (instance.logger) {
          instance.logger.info('<= DATA:', params.withFullResponse ? response : JSON.stringify(response))
        }

        return Promise.resolve(response)
      })
  } else {
    return instance(options)
      .then((response) => (params.withFullResponse) ? response : response.data)
      .then((response) => {
        if (instance.logger) {
          instance.logger.info('<= DATA:', params.withFullResponse ? response : JSON.stringify(response))
        }

        return Promise.resolve(response)
      })
  }
}

function _get (apiKey, target, url, params = {}) {
  return _exec({ method: 'GET', apiKey, target, url, params })
}

function _post (apiKey, target, url, data, params = {}) {
  return _exec({ method: 'POST', apiKey, target, url, data, params })
}

function _put (apiKey, target, url, data, params = {}) {
  return _exec({ method: 'PUT', apiKey, target, url, data, params })
}

function _delete (apiKey, target, url) {
  return _exec({ method: 'DELETE', apiKey, target, url })
}

module.exports = ({ baseUrl, rateLimiter, headers, logger }) => {
  if (!instance) {
    instance = axios.create({
      baseURL: baseUrl,
      transformResponse: [handleBigInt]
    })

    if (logger) {
      instance.logger = logger
    }

    instance.interceptors.response.use((res) => {
      debug(res.headers)
      return res
    }, (error) => {
      if (error.response) {
        if ([301, 302, 307, 308].indexOf(error.response.status) !== -1 && error.response.headers.location) {
          const config = error.response.config
          config.url = error.response.headers.location
          return instance(config)
        }
      }

      return Promise.reject(error)
    })

    if (rateLimiter.enabled) {
      limiter = new Bottleneck()
      limiter.updateSettings(rateLimiter)
    }
  }

  return {
    _get,
    _post,
    _put,
    _delete
  }
}
