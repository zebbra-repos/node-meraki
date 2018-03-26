/**
 * This module is used by node-config to map environment variables to application configuration keys.
 * See [github]{@link https://github.com/lorenwest/node-config/wiki/Environment-Variables} for details.
 *
 * @module config/custom-environment-variables
 * @see module:config/default
 * @see module:config/development
 * @see module:config/test
 */
module.exports = {
  meraki: {
    target: 'MERAKI_TARGET',
    apiKey: 'MERAKI_API_KEY'
  }
}
