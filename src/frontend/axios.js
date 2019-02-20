const axios = require('axios')
const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:axios')
const JSONBigInt = require('json-bigint')({ 'storeAsString': true })

let instance
let limiter
let csrfToken = 'asdf'
const cookies = new Map()

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

  const headers = {
    'X-Cisco-Meraki-API-Key': apiKey,
    maxredirects: maxRedirects,
    'Cookie': Array.from(cookies).map((cookie) => `${cookie[0]}=${cookie[1]}`).join(';'),
    accept: 'application/json,text/html',
    'X-Requested-With': 'XMLHTTPRequest',
    'X-CSRF-Token': csrfToken
  }

  const options = {
    method,
    baseURL,
    url,
    maxRedirects,
    headers: headers,
    withCredentials: true,
    params,
    data
  }

  debug(options)
  if (limiter) {
    return limiter.schedule(instance, options).then((response) => {
      try {
        const parsed = JSON.parse(response.data)
        if (parsed.mode === 'login') return new Error('session ended')
      } catch (err) { }

      if (params.withFullResponse) return response

      return response.data
    })
  } else {
    return instance(options).then((response) => {
      try {
        const parsed = JSON.parse(response.data)
        if (parsed.mode === 'login') return new Error('session ended')
      } catch (err) { }

      if (params.withFullResponse) return response

      return response.data
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

function setCookie (key, value) {
  cookies.set(key, value)
}

function deleteCookie (key) {
  cookies.delete(key)
}

function setCSRFToken (token) {
  csrfToken = token
}

module.exports = ({ baseUrl, rateLimiter, headers }) => {
  if (!instance) {
    instance = axios.create({
      baseURL: baseUrl,
      transformResponse: [handleBigInt]
    })

    instance.interceptors.response.use((res) => {
      debug(res.headers)
      if (res.headers.hasOwnProperty('set-cookie')) {
        for (const cookie of res.headers['set-cookie']) {
          setCookie(cookie.split('=')[0], cookie.split('=')[1].split(';')[0])
        }
      }

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
    _delete,
    setCookie,
    deleteCookie,
    setCSRFToken
  }
}
