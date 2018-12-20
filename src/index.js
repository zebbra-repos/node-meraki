/**
 * Exports the rest api endpoints.
 *
 * @module meraki
 * @see module:meraki/rest
 */
module.exports = (settings) => {
  const api = require('./rest')(settings)

  return api
}
