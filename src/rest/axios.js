const axios = require('axios')
const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:axios')
const JSONBigInt = require('json-bigint')({ storeAsString: true })

const settings = {}
const pool = {}

const handleBigInt = (data) => {
  try {
    return JSONBigInt.parse(data)
  } catch (err) {
    return data
  }
}

function _exec ({
  method,
  apiKey,
  target = 'api',
  scope = 'default',
  url = '/',
  data,
  params = {},
  priority = 5
}) {
  const scopedAxios =
    settings.rateLimiter.scoped === true
      ? _getScope(scope)
      : _getScope('default')
  const baseURL = scopedAxios.instance.defaults.baseURL.replace(/api/, target)

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
  if (settings.logger) {
    let message = `=> ${options.method}: ${options.url}`
    if (options.params) {
      message += ` Params: ${JSON.stringify(options.params)}`
    }
    if (options.data) {
      message += ` Data: ${JSON.stringify(options.data)}`
    }

    settings.logger.info(message)
  }

  if (scopedAxios.limiter) {
    if (priority < 0) {
      priority = 0
    } else if (priority > 9) {
      priority = 9
    }

    return scopedAxios.limiter
      .schedule({ priority }, scopedAxios.instance, options)
      .then((response) => (params.withFullResponse ? response : response.data))
      .then((response) => {
        if (settings.logger) {
          settings.logger.info(
            '<= DATA:',
            params.withFullResponse ? response : JSON.stringify(response)
          )
        }

        return response
      })
  } else {
    return scopedAxios
      .instance(options)
      .then((response) => (params.withFullResponse ? response : response.data))
      .then((response) => {
        if (settings.logger) {
          settings.logger.info(
            '<= DATA:',
            params.withFullResponse ? response : JSON.stringify(response)
          )
        }

        return response
      })
  }
}

function _get (apiKey, target, scope, url, params = {}, priority = 5) {
  return _exec({ method: 'GET', apiKey, target, scope, url, params, priority })
}

function _post (apiKey, target, scope, url, data, params = {}, priority = 5) {
  return _exec({
    method: 'POST',
    apiKey,
    target,
    scope,
    url,
    data,
    params,
    priority
  })
}

function _put (apiKey, target, scope, url, data, params = {}, priority = 5) {
  return _exec({
    method: 'PUT',
    apiKey,
    target,
    scope,
    url,
    data,
    params,
    priority
  })
}

function _delete (apiKey, target, scope, url, priority = 5) {
  return _exec({ method: 'DELETE', apiKey, target, scope, url, priority })
}

function _getScope (scope) {
  if (!pool[scope]) {
    if (settings.logger) {
      settings.logger.info(
        'On the fly creating scoped axios instance for scope:',
        scope
      )
    }
    pool[scope] = {}

    const instance = axios.create({
      baseURL: settings.baseURL,
      transformResponse: [handleBigInt]
    })

    instance.interceptors.response.use(
      (res) => {
        debug(res.headers)
        return res
      },
      (error) => {
        if (error.response) {
          if (
            [301, 302, 307, 308].indexOf(error.response.status) !== -1 &&
            error.response.headers.location
          ) {
            const config = error.response.config
            config.url = error.response.headers.location
            return instance(config)
          }
        }

        return Promise.reject(error)
      }
    )

    pool[scope].instance = instance

    if (settings.rateLimiter.enabled) {
      const limiter = new Bottleneck()
      limiter.updateSettings(settings.rateLimiter)

      pool[scope].limiter = limiter
    }
  }

  return pool[scope]
}

module.exports = ({ baseUrl, rateLimiter, logger = false }) => {
  settings.baseURL = baseUrl
  settings.rateLimiter = rateLimiter
  settings.logger = logger

  if (!rateLimiter.scoped) {
    _getScope('default')
  }

  return {
    _get,
    _post,
    _put,
    _delete
  }
}
