/**
 * Create a Meraki REST API wrapper for the switch port ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#switch-ports} for more information.
 *
 * @module lib/rest/switch-ports
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the switch port ressource
 * @return { Object } The initialized Meraki REST API wrapper for the switch port ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/devices`
 * const portEndpoints = require('./lib/rest/ports')({ apiKey, target, basePath, baseUrl })
 */
function createPortsEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com' }) {
  const axios = require('./axios')({ baseUrl })

  /**
   * List the switch ports for a switch.
   *
   * @memberof module:lib/rest/switch-ports
   * @param { Object } param                  The parameters for this request
   * @param { string } param.deviceSerial     The serial of the device for which to list the switch ports
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
  function listSwitchPorts ({ deviceSerial }) {
    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${deviceSerial}/switchPorts`)
  }

  /**
   * Return a switch port.
   *
   * @memberof module:lib/rest/switch-ports
   * @param { Object } param                  The parameters for this request
   * @param { string } param.deviceSerial     The serial of the device for which to list the switch ports
   * @param { number } param.number           The number of the switch port for which to show the details
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
  function showSwitchPort ({ deviceSerial, number }) {
    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    } else if (!number) {
      return Promise.reject(new Error('The parameter number is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${deviceSerial}/switchPorts/${number}`)
  }

  /**
   * Update a switch port.
   *
   * @memberof module:lib/rest/switch-ports
   * @param { Object } param                  The parameters for this request
   * @param { string } param.deviceSerial     The serial of the device for which to list the switch ports
   * @param { number } param.number           The number of the switch port to update
   * @param { string } param.name             The name of the switch port
   * @param { string } param.tags             The tags of the switch port
   * @param { boolean } param.enabled         The status of the switch port
   * @param { string } param.type             The type of the switch port (`access` or `trunk`)
   * @param { number } param.vlan             The VLAN of the switch port
   * @param { number } param.voiceVlan        The voice VLAN of the switch port. Only applicable to access ports
   * @param { Array } param.allowedVlans      The VLANs allowed on the switch port. Only applicable to trunk ports
   * @param { boolean } param.poeEnabled      The PoE status of the switch port
   * @param { boolean } param.isolationEnabled  The isolation status of the switch port
   * @param { boolean } param.rstpEnabled     The rapid spanning tree protocol status
   * @param { string } param.stpGuard         The state of the STP guard (`disabled`, `Root guard`, `BPDU guard`, `Loop guard`)
   * @param { string } param.accessPolicyNumber The number of the access policy of the switch port. Only applicable to access ports
   * @param { string } param.linkNegotiation  The link speed for the switch port
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
  function updateSwitchPort (data) {
    const { deviceSerial, number } = data
    delete data.deviceSerial
    delete data.number

    if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    } else if (!number) {
      return Promise.reject(new Error('The parameter number is mandatory'))
    }

    return axios._put(apiKey, target, `${basePath}/${deviceSerial}/switchPorts/${number}`, data)
  }

  return {
    listSwitchPorts,
    showSwitchPort,
    updateSwitchPort
  }
}

module.exports = createPortsEndpoints
