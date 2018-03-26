/**
 * This module contains the applications default configuration settings which
 * are environment independent. It's configuration settings can be overwritten
 * by [custom environment variables]{@link module:config/custom-environment-variables}
 * or by the environment-specific configuration settings.
 *
 * @module config/default
 * @see module:config/custom-environment-variables
 * @see module:config/development
 * @see module:config/test
 */
module.exports = {
  meraki: {
    target: 'api',
    apiKey: 'secret',
    orgId: '730666'
  }
}
