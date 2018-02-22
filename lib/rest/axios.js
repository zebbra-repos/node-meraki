const axios = require('axios')
const debug = require('debug')('node-meraki:axios')

const baseOptions = {
  baseURL: 'https://n213.meraki.com',
  port: 443,
  url: ''
}

const getOptions = Object.assign({}, baseOptions, {
  method: 'GET'
})

const postOptions = Object.assign({}, baseOptions, {
  method: 'POST'
})

const putOptions = Object.assign({}, baseOptions, {
  method: 'PUT'
})

const deleteOptions = Object.assign({}, baseOptions, {
  method: 'DELETE'
})

function _createOptions ({ base, apiKey, target = 'api', url = '/', data, params }) {
  const baseURL = base.baseURL.replace(/api/, target)

  return Object.assign({}, base, {
    baseURL,
    url,
    headers: {
      'X-Cisco-Meraki-API-Key': apiKey,
      'Content-Type': 'application/json'
    },
    params,
    data
  })
}

function _get (apiKey, target, url, params) {
  const options = _createOptions({ base: getOptions, apiKey, target, url, params })
  debug(`method=get options=${JSON.stringify(options)}`)

  return axios(options).then((response) => response.data)
}

function _post (apiKey, target, url, data) {
  const options = _createOptions({ base: postOptions, apiKey, target, url, data })
  debug(`method=post options=${JSON.stringify(options)}`)

  return axios(options).then((response) => response.data)
}

function _put (apiKey, target, url, data) {
  const options = _createOptions({ base: putOptions, apiKey, target, url, data })
  debug(`method=put options=${JSON.stringify(options)}`)

  return axios(options).then((response) => response.data)
}

function _delete (apiKey, target, url) {
  const options = _createOptions({ base: deleteOptions, apiKey, target, url })
  debug(`method=delete options=${JSON.stringify(options)}`)

  return axios(options).then((response) => response.data)
}

module.exports = {
  _get,
  _post,
  _put,
  _delete
}
