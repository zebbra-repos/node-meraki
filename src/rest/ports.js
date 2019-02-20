/**
 * Create a Meraki REST API wrapper for the switch port ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#switch-ports} for more information.
 *
 * @module meraki/rest/switch-ports
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the switch port ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the switch port ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/devices`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const portEndpoints = require('./lib/rest/ports')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createPortsEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter }) {
  const axios = require('./axios')({ baseUrl, rateLimiter })

  /**
   * List the switch ports for a switch.
   *
   * @memberof module:meraki/rest/switch-ports
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } deviceSerial The serial of the device for which to list the switch ports
   * @return { Promise } A promise holding the switch ports of this device
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "number": 1,
   *     "name": "my port",
   *     "tags": "dorm-room limited",
   *     "enabled": true,
   *     "type": "access",
   *     "vlan": 10,
   *     "voiceVlan": 20,
   *     "poeEnabled": true,
   *     "isolationEnabled": false,
   *     "rstpEnabled": true,
   *     "stpGuard": "disabled",
   *     "accessPolicyNumber": "asdf1234",
   *     "linkNegotiation": "Auto negotiate"
   *   }
   * ]
   */
  function listSwitchPorts ({ apiKey: localApiKey, target: localTarget, deviceSerial }) {
    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${deviceSerial}/switchPorts`)
  }

  /**
   * Return a switch port.
   *
   * @memberof module:meraki/rest/switch-ports
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } deviceSerial The serial of the device for which to list the switch ports
   * @param { number } number       The number of the switch port for which to show the details
   * @return { Promise } A promise holding the details of this switch port
   * @example <caption>Example response</caption>
   * {
   *   "number": 1,
   *   "name": "my port",
   *   "tags": "dorm-room limited",
   *   "enabled": true,
   *   "type": "access",
   *   "vlan": 10,
   *   "voiceVlan": 20,
   *   "poeEnabled": true,
   *   "isolationEnabled": false,
   *   "rstpEnabled": true,
   *   "stpGuard": "disabled",
   *   "accessPolicyNumber": "asdf1234",
   *   "linkNegotiation": "Auto negotiate"
   * }
   */
  function showSwitchPort ({ apiKey: localApiKey, target: localTarget, deviceSerial, number }) {
    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    } else if (!number) {
      return Promise.reject(new Error('The parameter number is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${deviceSerial}/switchPorts/${number}`)
  }

  /**
   * Update a switch port.
   *
   * @memberof module:meraki/rest/switch-ports
   * @param { string } [apiKey]           Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]           Optional custom target for this request (if not set will take the inital target)
   * @param { string } deviceSerial       The serial of the device for which to list the switch ports
   * @param { number } number             The number of the switch port to update
   * @param { string } name               The name of the switch port
   * @param { string } tags               The tags of the switch port
   * @param { boolean } enabled           The status of the switch port
   * @param { string } type               The type of the switch port (`access` or `trunk`)
   * @param { number } vlan               The VLAN of the switch port
   * @param { number } voiceVlan          The voice VLAN of the switch port. Only applicable to access ports
   * @param { Array } allowedVlans        The VLANs allowed on the switch port. Only applicable to trunk ports
   * @param { boolean } poeEnabled        The PoE status of the switch port
   * @param { boolean } isolationEnabled  The isolation status of the switch port
   * @param { boolean } rstpEnabled       The rapid spanning tree protocol status
   * @param { string } stpGuard           The state of the STP guard (`disabled`, `Root guard`, `BPDU guard`, `Loop guard`)
   * @param { string } accessPolicyNumber The number of the access policy of the switch port. Only applicable to access ports
   * @param { string } linkNegotiation    The link speed for the switch port
   * @return { Promise } A promise holding the updated switch port
   * @example <caption>Example response</caption>
   * {
   *   "number": 1,
   *   "name": "my port",
   *   "tags": "dorm-room limited",
   *   "enabled": true,
   *   "type": "access",
   *   "vlan": 10,
   *   "voiceVlan": 20,
   *   "poeEnabled": true,
   *   "isolationEnabled": false,
   *   "rstpEnabled": true,
   *   "stpGuard": "disabled",
   *   "accessPolicyNumber": "asdf1234",
   *   "linkNegotiation": "Auto negotiate"
   * }
   */
  function updateSwitchPort (data = {}) {
    const { deviceSerial, number } = data
    delete data.deviceSerial
    delete data.number

    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    } else if (!number) {
      return Promise.reject(new Error('The parameter number is mandatory'))
    }

    return axios._put(data.apiKey || apiKey, data.localTarget || target, `${basePath}/${deviceSerial}/switchPorts/${number}`, data)
  }

  return {
    listSwitchPorts,
    showSwitchPort,
    updateSwitchPort
  }
}

module.exports = createPortsEndpoints
