/**
 * Exports the rest api endpoints.
 *
 * @module meraki
 * @see module:meraki/rest
 */
module.exports = (settings) => {
  const api = require('./rest')(settings)
  let frontend = {}
  if (settings.frontend) frontend = require('./frontend')(settings)

  return Object.assign({}, api, frontend)
}
