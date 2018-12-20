const config = require('config')
const debug = require('debug')('node-meraki:test')

require('jest-plugins')([
  'jest-plugins-recommended'
])

global.orgId = config.meraki.orgId
global.templateId = 'L_682858293500056960'
global.networkId = 'L_682858293500060703'
global.serial = 'Q2MN-Y8CM-HLVE'

debug(`using meraki configuration ${config.meraki}`)
global.meraki = require('../lib')({
  version: 'v0',
  apiKey: config.meraki.apiKey,
  target: config.meraki.target,
  baseUrl: 'http://localhost:8888',
  rateLimiter: {
    enabled: true
  }
})
