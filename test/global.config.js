const config = require('config')
const debug = require('debug')('node-meraki:test')

require('jest-plugins')([
  'jest-plugins-recommended'
])

global.orgId = config.meraki.orgId
global.adminId = '682858293500206976'
global.networkId = 'N_682858293500074434'
global.templateId = 'L_682858293500056960'

debug(`using meraki configuration ${config.meraki}`)
global.rest = require('../lib')({
  version: 'v0',
  apiKey: config.meraki.apiKey,
  target: config.meraki.target,
  baseUrl: 'http://localhost:8888'
})
