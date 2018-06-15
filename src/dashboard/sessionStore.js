const axios = require('axios')
const setCookie = require('set-cookie-parser')
const qs = require('qs')
const URL = require('url')
const _ = require('lodash')
const { toCookieString } = require('../utils')

class SessionStore {
  constructor (baseUrl, email, password, keepAlive) {
    const instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
      maxRedirects: 0,
      headers: {
        maxredirects: 0
      },
      validateStatus: (status) => status >= 200 && status < 303
    })

    instance.interceptors.response.use((res) => {
      const cookies = setCookie.parse(res)
      instance.defaults.headers.common['Cookie'] = toCookieString(cookies)
      return res
    }, (error) => {
      return Promise.reject(error)
    })

    this.instance = instance
    this.baseUrl = baseUrl
    this.email = email
    this.password = password

    this.store = {}

    if (keepAlive !== false) {
      setInterval(() => this.keepAlive(), 1000 * 10)
    }
  }

  get (eid) {
    if (this.store[eid]) {
      return Promise.resolve(this.store[eid])
    }

    return this.updateSession(eid)
  }

  set (eid, res) {
    const cookies = setCookie.parse(res)

    let token
    const lines = (res.data && res.data.split('\n')) || []
    _.each(lines, (line) => {
      if (line.includes('Mkiconf.authenticity_token')) {
        token = line.split('"')[1]
        return false
      }
      return true
    })

    this.store[eid] = this.store[eid] || {}
    this.store[eid].cookies = cookies
    if (token) {
      this.store[eid].token = token
    }

    return Promise.resolve(this.store[eid])
  }

  remove (eid) {
    delete this.store[eid]
    return Promise.resolve(this.store)
  }

  keepAlive () {
    const sendIdleTimeoutAlive = (eid, session) => {
      const url = `${this.baseUrl}/o/${eid}/manage/dashboard/keep_idle_timeout_alive`
      const headers = {
        'Cookie': toCookieString(session.cookies),
        'X-CSRF-Token': session.token,
        'X-Requested-With': 'XMLHttpRequest'
      }

      return this.instance.post(url, null, { headers })
    }

    const sessions = _.keys(this.store)
    return Promise
      .all(sessions.map((eid) => sendIdleTimeoutAlive(eid, this.store[eid])))
      .catch(console.error)
  }

  updateSession (eid) {
    const data = qs.stringify({
      email: this.email,
      password: this.password
    })

    return this.instance
      .post('/login/login', data)
      .then(() => this.instance.get('/login/org_choose', { params: { eid } }))
      .then((res) => this.instance.get(URL.parse(res.headers.location).path))
      .then((res) => this.instance.get(URL.parse(res.headers.location).path))
      .then((res) => this.instance.get(URL.parse(res.headers.location).path))
      .then((res) => this.set(eid, res))
  }
}

module.exports = SessionStore
