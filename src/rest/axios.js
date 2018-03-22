const axios = require('axios')
const debug = require('debug')('node-meraki:axios')

const getOptions = {
  method: 'GET'
}

const postOptions = {
  method: 'POST'
}

const putOptions = {
  method: 'PUT'
}

const deleteOptions = {
  method: 'DELETE'
}

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

module.exports = ({ baseUrl = 'https://api.meraki.com' }) => {
  getOptions.baseURL = baseUrl
  postOptions.baseURL = baseUrl
  putOptions.baseURL = baseUrl
  deleteOptions.baseURL = baseUrl

  return {
    _get,
    _post,
    _put,
    _delete
  }
}
