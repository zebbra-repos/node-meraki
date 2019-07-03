/**
 * Create a Meraki REST API wrapper for the alert settings ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#alert-settings} for more information.
 *
 * @module meraki/rest/alerts
 * @param { string } [apiKey='']      The Meraki api key
 * @param { string } [target='api']   The Meraki target
 * @param { string } [basePath='/']   The Meraki base path for the ressource
 * @param { string } [baseUrl='https://api.meraki.com']   The Meraki base url for the ressource
 * @param { string } rateLimiter      The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the alert settings ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/alertSettings`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const alertSettingsEndpoints = require('./lib/rest/alerts')({ apiKey, target, basePath, baseUrl, rateLimiter, logger })
 */
function createAlertSettingsEndpoints ({
  apiKey = '',
  target = 'api',
  basePath = '/',
  baseUrl = 'https://api.meraki.com',
  rateLimiter,
  logger
}) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * Return the alert settings for this network.
   *
   * @memberof module:meraki/rest/alerts
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]      Optional custom scope for rate limiter
   * @param { string } networkId    The id of the network
   * @return { Promise } A promise holding the alert settings of this network
   * @example <caption>Example response</caption>
   * {
   *   "defaultDestinations": {
   *     "emails": [
   *       "miles@meraki.com"
   *     ],
   *     "allAdmins": true,
   *     "snmp": true,
   *     "httpServerIds": ["asdfasfasdfasfasdfasdfasf"]
   *   },
   *   "alerts": [
   *     {
   *       "type": "gatewayDown",
   *       "enabled": true,
   *       "alertDestinations": {
   *         "emails": [
   *           "miles@meraki.com"
   *         ],
   *         "allAdmins": false,
   *         "snmp": false
   *       },
   *       "filters": {
   *         "timeout": 60
   *       }
   *     }
   *   ]
   * }
   */
  function getAlertSettings ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId
  }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/alertSettings`
    )
  }

  /**
   * Update alert settings for this network.
   *
   * @memberof module:meraki/rest/alerts
   * @param { string } [apiKey]             Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]             Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]              Optional custom scope for rate limiter
   * @param { string } networkId            The id of the network
   * @param { object } defaultDestinations  The network_wide destinations for all alerts on the network.
   * @param { array } defaultDestinations.emails        A list of emails that will recieve the alert(s).
   * @param { boolean } defaultDestinations.allAdmins   If true, then all network admins will receive emails.
   * @param { boolean } defaultDestinations.snmp        If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.
   * @param { array } defaultDestinations.httpServerIds A list of http server ids to which the alerts will be sent.
   * @param { array } alerts                Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.
   * @param { string } alerts.type          The type of alert
   * @param { boolean } alerts.enabled      A boolean depicting if the alert is turned on or off
   * @param { object } alerts.alertDestinations         A hash of destinations for this specific alert. Keys include: emails: A list of emails that will recieve information about the alert, allAdmins: If true, then all network admins will receive emails, and snmp: If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.
   * @param { object } alerts.filters                   A hash of specific configuration data for the alert. Only filters specific to the alert will be updated.
   * @return { Promise } A promise holding the updated alert settings
   * @example <caption>Example request data</caption>
   * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"defaultDestinations":{"emails":["miles@meraki.com"],"allAdmins":true,"snmp":true},"alerts":[{"type":"gatewayDown","enabled":true,"alertDestinations":{"emails":["miles@meraki.com"],"allAdmins":false,"snmp":false},"filters":{"timeout":60}}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/alertSettings'
   * @example <caption>Example response</caption>
   * {
   *   "defaultDestinations": {
   *     "emails": [
   *       "miles@meraki.com"
   *     ],
   *     "allAdmins": true,
   *     "snmp": true
   *     "httpServerIds": ["asdfasfasdfasfasdfasdfasf"]
   *   },
   *   "alerts": [
   *     {
   *       "type": "gatewayDown",
   *       "enabled": true,
   *       "alertDestinations": {
   *         "emails": [
   *           "miles@meraki.com"
   *         ],
   *         "allAdmins": false,
   *         "snmp": false
   *       },
   *       "filters": {
   *         "timeout": 60
   *       }
   *     }
   *   ]
   * }
   */
  function updateAlertSettings (data) {
    const { networkId, target: localTarget, scope } = data
    delete data.networkId
    delete data.target
    delete data.scope

    return axios._put(
      data.apiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/alertSettings/`,
      data
    )
  }

  return {
    getAlertSettings,
    updateAlertSettings
  }
}

module.exports = createAlertSettingsEndpoints
