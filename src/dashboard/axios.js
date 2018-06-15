const axios = require('axios')
const qs = require('qs')
const _ = require('lodash')
const { toCookieString } = require('../utils')

module.exports = ({ baseUrl, store }) => {
  axios.defaults.baseURL = baseUrl
  axios.defaults.withCredentials = true

  function commonHeaders (session) {
    return {
      'Cookie': toCookieString(session.cookies),
      'X-CSRF-Token': session.token
    }
  }

  function _get (eid, url, params) {
    return store
      .get(eid)
      .then((session) => axios.get(url, {
        params,
        headers: commonHeaders(session)
      }))
      .then((response) => response.data)
  }

  function _post (eid, url, data, customHeaders = {}) {
    return store
      .get(eid)
      .then((session) => axios.post(url, qs.stringify(_.mapValues(data, JSON.stringify)), {
        headers: Object.assign({}, commonHeaders(session), customHeaders)
      }))
      .then((response) => response.data)
  }

  return {
    _get,
    _post
  }
}
