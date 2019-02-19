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
  const baseURL = instance.defaults.baseURL.replace(/api/, target).replace(/account/, target)

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
    params,
    data
  }

  debug(options)
  if (limiter) {
    return limiter.schedule(instance, options).then((response) => (params.withFullResponse) ? response : response.data)
  } else {
    return instance(options).then((response) => (params.withFullResponse) ? response : response.data)
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

module.exports = ({ baseUrl, rateLimiter }) => {
  if (!instance) {
    instance = axios.create({
      baseURL: baseUrl,
      transformResponse: [handleBigInt]
    })

    instance.interceptors.response.use((res) => {
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
