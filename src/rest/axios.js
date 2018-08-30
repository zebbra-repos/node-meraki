const axios = require('axios')
const Bottleneck = require('bottleneck')
const debug = require('debug')('node-meraki:axios')
const JSONBigInt = require('json-bigint')({ 'storeAsString': true })

let request = axios
const limiter = new Bottleneck()
limiter.initialized = false

const handleBigInt = (data) => {
  try {
    return JSONBigInt.parse(data)
  } catch (err) {
    return data
  }
}

const getOptions = {
  method: 'GET',
  transformResponse: [handleBigInt]
}

const postOptions = {
  method: 'POST',
  transformResponse: [handleBigInt]
}

const putOptions = {
  method: 'PUT',
  transformResponse: [handleBigInt]
}

const deleteOptions = {
  method: 'DELETE',
  transformResponse: [handleBigInt]
}

function _createOptions ({ base, apiKey, target = 'api', url = '/', data, params }) {
  const baseURL = base.baseURL.replace(/api/, target)

  return Object.assign({}, base, {
    baseURL,
    url,
    headers: {
      'X-Cisco-Meraki-API-Key': apiKey,
      'Content-Type': 'application/json',
      'Cookie': null
    },
    params,
    data
  })
}

function _get (apiKey, target, url, params) {
  const options = _createOptions({ base: getOptions, apiKey, target, url, params })
  debug(`method=get options=${JSON.stringify(options)}`)

  return request(options).then((response) => response.data)
}

function _post (apiKey, target, url, data) {
  const options = _createOptions({ base: postOptions, apiKey, target, url, data })
  debug(`method=post options=${JSON.stringify(options)}`)

  return request(options).then((response) => response.data)
}

function _put (apiKey, target, url, data) {
  const options = _createOptions({ base: putOptions, apiKey, target, url, data })
  debug(`method=put options=${JSON.stringify(options)}`)

  return request(options).then((response) => response.data)
}

function _delete (apiKey, target, url) {
  const options = _createOptions({ base: deleteOptions, apiKey, target, url })
  debug(`method=delete options=${JSON.stringify(options)}`)

  return request(options).then((response) => response.data)
}

module.exports = ({ baseUrl = 'https://api.meraki.com', rateLimiter }) => {
  getOptions.baseURL = baseUrl
  postOptions.baseURL = baseUrl
  putOptions.baseURL = baseUrl
  deleteOptions.baseURL = baseUrl

  if (rateLimiter.enabled && !limiter.initialized) {
    limiter.initialized = true
    limiter.updateSettings(rateLimiter)
    request = limiter.wrap(request)
  }

  return {
    _get,
    _post,
    _put,
    _delete
  }
}
