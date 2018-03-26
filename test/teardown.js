const debug = require('debug')('node-meraki:test')
const recorder = require('./recorder')

module.exports = async function () {
  // teardown your sandbox environment
  debug('closing test environment')

  debug('closing node-vcr meraki server')
  await recorder.stopServer()
}
