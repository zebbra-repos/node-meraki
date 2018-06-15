/**
 * Exports the rest api and optionally the dashboard api endpoints.
 *
 * @module meraki
 * @see module:meraki/rest
 * @see module:meraki/dashboard
 */
module.exports = (settings) => {
  const api = require('./rest')(settings)

  if (settings.dashboardApiEnabled) {
    const dashboardApi = require('./dashboard')(settings)
    Object.assign(api, dashboardApi)
  }

  return api
}
