const axios = require('axios')
const qs = require('qs')
const _ = require('lodash')
const { toCookieString } = require('../utils')

let instance

module.exports = ({ baseUrl, store }) => {
  if (!instance) {
    instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
      maxRedirects: 0
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
  }

  function commonHeaders (session) {
    return {
      'Cookie': toCookieString(session.cookies),
      'X-CSRF-Token': session.token,
      maxredirects: 0
    }
  }

  function _get (eid, url, params) {
    return store
      .get(eid)
      .then((session) => instance.get(url, {
        params,
        headers: commonHeaders(session)
      }))
      .then((response) => response.data)
  }

  function _post (eid, url, data, customHeaders = {}) {
    return store
      .get(eid)
      .then((session) => instance.post(url, qs.stringify(_.mapValues(data, JSON.stringify)), {
        headers: Object.assign({}, commonHeaders(session), customHeaders)
      }))
      .then((response) => response.data)
  }

  return {
    _get,
    _post
  }
}
