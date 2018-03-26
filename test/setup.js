const debug = require('debug')('node-meraki:test')
const recorder = require('./recorder')

module.exports = async function () {
  // setup your sandbox environment
  debug('setup test environment')

  debug('running node-vcr meraki server')
  await recorder.startServer()
}
