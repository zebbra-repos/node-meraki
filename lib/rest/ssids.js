/**
 * Create a Meraki REST API wrapper for the SSID ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#ssids} for more information.
 *
 * @module lib/rest/ssids
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the SSID ressource
 * @return { Object } The initialized Meraki REST API wrapper for the SSID ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const ssidEndpoints = require('./lib/rest/ssids')({ apiKey, target, basePath, baseUrl })
 */
function createSSIDsEndpoints ({ apiKey, target, basePath, baseUrl = 'https://api.meraki.com' }) {
  const axios = require('./axios')({ baseUrl })

  /**
   * List the SSIDs in a network.
   *
   * @memberof module:lib/rest/ssids
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the SSIDs
   * @return { Promise } A promise holding the SSIDs for this network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "number":0,
   *     "name":"SSID-1",
   *     "enabled":true,
   *     "authMode":"open"
   *   }
   * ]
   */
  function listNetworkSSIDs ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/ssids`)
  }

  /**
   * Return a single SSID.
   *
   * @memberof module:lib/rest/ssids
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the SSIDs
   * @param { number } param.ssidNumber       The number of the SSID to show
   * @return { Promise } A promise holding the details of this SSID
   * @example <caption>Example response</caption>
   * {
   *   "number":0,
   *   "name":"SSID-1",
   *   "enabled":true,
   *   "authMode":"psk",
   *   "encryptionMode":"wpa",
   *   "psk":"abcd1234",
   *   "splashPage":"Click-through splash page",
   *   "perClientBandwidthLimitUp":0,
   *   "perClientBandwidthLimitDown":0,
   *   "ssidAdminAccessible":false,
   *   "ipAssignmentMode":"NAT mode",
   *   "walledGardenEnabled":true,
   *   "walledGardenRanges":"192.168.1.1/24 192.168.37.10/32"
   * }
   */
  function showNetworkSSID ({ networkId, ssidNumber }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!ssidNumber) {
      return Promise.reject(new Error('The parameter ssidNumber is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/ssids/${ssidNumber}`)
  }

  /**
   * Update the attributes of an SSID.
   *
   * @memberof module:lib/rest/ssids
   * @param { Object } param                            The parameters for this request
   * @param { string } param.networkId                  The id of the network for which to list the SSIDs
   * @param { number } param.ssidNumber                 The number of the SSID to update
   * @param { string } param.name                       The name of an SSID
   * @param { boolean } param.enabled                   Whether or not an SSID is enabled
   * @param { string } param.authMode                   The association control method for the SSID (`open`, `psk`, `open-with-radius`, `8021x-meraki`, `8021x-radius`)
   * @param { string } param.encryptionMode             The psk encryption mode for the SSID (`wpa`, `wep`, `wpa-eap`)
   * @param { string } param.psk                        The passkey for the SSID. This param is only valid if the authMode is `psk`
   * @param { string } param.wpaEncryptionMode          The types of WPA encryption. (`WPA1 and WPA2`, `WPA2 only`)
   * @param { string } param.splashPage                 The type of splash page for the SSID (`None`, `Click-through splash page`, `Billing`, `Password-protected with Meraki RADIUS`, `Password-protected with custom RADIUS`, `Password-protected with Active Directory`, `Password-protected with LDAP`, `SMS authentication`, `Systems Manager Sentry`, `Facebook Wi-Fi`). This attribute is not supported for template children
   * @param { Object } param.radiusServers              The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is `open-with-radius` or `8021x-radius`
   * @param { string } param.radiusServers.host         Ip address of RADIUS server
   * @param { number } param.radiusServers.port         UPD port of the RADIUS server listens on for Acess-requests
   * @param { string } param.radiusServers.secret       RADIUS client shared secret
   * @param { boolean } param.radiusCoaEnabled          If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server
   * @param { boolean } param.radiusAccountingEnabled   Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is `open-with-radius` or `8021x-radius`
   * @param { Object } param.radiusAccountingServers    The RADIUS accounting 802.1x servers to be used for authentication. This param is only valid if the authMode is `open-with-radius` or `8021x-radius` and radiusAccountingEnabled is `true`
   * @param { string } param.radiusAccountingServers.host   IP address to which the APs will send RADIUS accounting messages
   * @param { number } param.radiusAccountingServers.port   Port on the RADIUS server that is listening for accounting messages
   * @param { string } param.radiusAccountingServers.secret Shared key used to authenticate messages between the APs and RADIUS server
   * @param { string } param.ipAssignmentMode           The client IP assignment mode (`NAT mode`, `Bridge mode`, `Layer 3 roaming`, `Layer 3 roaming with a concentrator`, `VPN`)
   * @param { boolean } param.useVlanTagging            Direct trafic to use specific VLANs. This param is only valid with `Bridge mode` and `Layer 3 roaming`
   * @param { string } param.concentratorNetworkId      The concentrator to use for `Layer 3 roaming with a concentrator` or `VPN`
   * @param { number } param.vlanId                     The VLAN ID used for VLAN tagging. This param is only valid with `Layer 3 roaming with a concentrator` and `VPN`
   * @param { number } param.defaultVlanId              The default VLAN ID used for `all other APs`. This param is only valid with `Bridge mode` and `Layer 3 roaming`
   * @param { Array } param.apTagsAndVlanIds            The list of tags and VLAN IDs used for VLAN tagging. This param is only valid with `Bridge mode`, `Layer 3 roaming`
   * @param { string } param.apTagsAndVlanIds.tags      Comma-separated list of AP tags
   * @param { number } param.apTagsAndVlanIds.vlanId    Numerical identifier that is assigned to the VLAN
   * @param { boolean } param.walledGardenEnabled       Allow access to a configurable list of IP ranges, which users may access prior to sign-on
   * @param { string } param.walledGardenRanges         Specify your walled garden by entering space-separated addresses and ranges using CIDR notation (e.g. 192.168.1.1/24 192.168.37.10/32). Meraki's splash page is automatically included in your walled garden
   * @param { number } param.minBitrate                 The minimum bitrate in Mbps. (1, 2, 5.5, 6, 9, 11, 12, 18, 24, 36, 48, 54)
   * @param { string } param.bandSelection              The client-serving radio frequencies. (Dual band operation, 5 GHz band only, Dual band operation with Band Steering)
   * @param { number } param.perClientBandwidthLimitUp  The upload bandwidth limit in Kbps. (0 represents no limit.)
   * @param { number } param.perClientBandwidthLimitDown  The download bandwidth limit in Kbps. (0 represents no limit.)
   * @return { Promise } A promise holding the updated SSID
   * @example <caption>Example request data</caption>
   * {
   *   "name": "new SSID name",
   *   "enabled": true,
   *   "authMode": "psk",
   *   "encryptionMode": "wpa",
   *   "psk": "abcd1234",
   *   "ipAssignmentMode": "Bridge mode"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "number":0,
   *   "name":"SSID-1",
   *   "enabled":true,
   *   "authMode":"psk",
   *   "encryptionMode":"wpa",
   *   "psk":"abcd1234",
   *   "splashPage":"Click-through splash page",
   *   "perClientBandwidthLimitUp":0,
   *   "perClientBandwidthLimitDown":0,
   *   "ssidAdminAccessible":false,
   *   "ipAssignmentMode":"NAT mode",
   *   "walledGardenEnabled":true,
   *   "walledGardenRanges":"192.168.1.1/24 192.168.37.10/32"
   * }
   */
  function updateNetworkSSID (data) {
    const { networkId, ssidNumber } = data
    delete data.networkId
    delete data.ssidNumber

    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!ssidNumber) {
      return Promise.reject(new Error('The parameter ssidNumber is mandatory'))
    }

    return axios._put(apiKey, target, `${basePath}/${networkId}/ssids/${ssidNumber}`, data)
  }

  return {
    listNetworkSSIDs,
    showNetworkSSID,
    updateNetworkSSID
  }
}

module.exports = createSSIDsEndpoints
