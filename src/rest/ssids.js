/**
 * Create a Meraki REST API wrapper for the SSID ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#ssids} for more information.
 *
 * @module meraki/rest/ssids
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the SSID ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @param { object } [logger]          Logger to use if logging is enabled
 * @return { Object } The initialized Meraki REST API wrapper for the SSID ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const ssidEndpoints = require('./lib/rest/ssids')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createSSIDsEndpoints ({
  apiKey,
  target,
  basePath,
  baseUrl = 'https://api.meraki.com',
  rateLimiter,
  logger
}) {
  const axios = require('./axios')({ baseUrl, rateLimiter, logger })

  /**
   * List the SSIDs in a network.
   *
   * @memberof module:meraki/rest/ssids
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the SSIDs
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
  function listNetworkSSIDs ({
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
      `${basePath}/${networkId}/ssids`
    )
  }

  /**
   * Return a single SSID.
   *
   * @memberof module:meraki/rest/ssids
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]    Optional custom scope for rate limiter
   * @param { string } networkId  The id of the network for which to list the SSIDs
   * @param { number } ssidNumber The number of the SSID to show
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
  function showNetworkSSID ({
    apiKey: localApiKey,
    target: localTarget,
    scope,
    networkId,
    ssidNumber
  }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!ssidNumber) {
      return Promise.reject(new Error('The parameter ssidNumber is mandatory'))
    }

    return axios._get(
      localApiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/ssids/${ssidNumber}`
    )
  }

  /**
   * Update the attributes of an SSID.
   *
   * @memberof module:meraki/rest/ssids
   * @param { string } [apiKey]                       Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]                       Optional custom target for this request (if not set will take the inital target)
   * @param { string } [scope]                        Optional custom scope for rate limiter
   * @param { string } networkId                      The id of the network for which to list the SSIDs
   * @param { number } ssidNumber                     The number of the SSID to update
   * @param { string } name                           The name of an SSID
   * @param { boolean } enabled                       Whether or not an SSID is enabled
   * @param { string } authMode                       The association control method for the SSID (`open`, `psk`, `open-with-radius`, `8021x-meraki`, `8021x-radius`)
   * @param { string } encryptionMode                 The psk encryption mode for the SSID (`wpa`, `wep`, `wpa-eap`)
   * @param { string } psk                            The passkey for the SSID. This param is only valid if the authMode is `psk`
   * @param { string } wpaEncryptionMode              The types of WPA encryption. (`WPA1 and WPA2`, `WPA2 only`)
   * @param { string } splashPage                     The type of splash page for the SSID (`None`, `Click-through splash page`, `Billing`, `Password-protected with Meraki RADIUS`, `Password-protected with custom RADIUS`, `Password-protected with Active Directory`, `Password-protected with LDAP`, `SMS authentication`, `Systems Manager Sentry`, `Facebook Wi-Fi`). This attribute is not supported for template children
   * @param { Object } radiusServers                  The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is `open-with-radius` or `8021x-radius`
   * @param { string } radiusServers.host             Ip address of RADIUS server
   * @param { number } radiusServers.port             UPD port of the RADIUS server listens on for Acess-requests
   * @param { string } radiusServers.secret           RADIUS client shared secret
   * @param { boolean } radiusCoaEnabled              If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server
   * @param { boolean } radiusAccountingEnabled       Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is `open-with-radius` or `8021x-radius`
   * @param { Object } radiusAccountingServers        The RADIUS accounting 802.1x servers to be used for authentication. This param is only valid if the authMode is `open-with-radius` or `8021x-radius` and radiusAccountingEnabled is `true`
   * @param { string } radiusAccountingServers.host   IP address to which the APs will send RADIUS accounting messages
   * @param { number } radiusAccountingServers.port   Port on the RADIUS server that is listening for accounting messages
   * @param { string } radiusAccountingServers.secret Shared key used to authenticate messages between the APs and RADIUS server
   * @param { string } ipAssignmentMode               The client IP assignment mode (`NAT mode`, `Bridge mode`, `Layer 3 roaming`, `Layer 3 roaming with a concentrator`, `VPN`)
   * @param { boolean } useVlanTagging                Direct trafic to use specific VLANs. This param is only valid with `Bridge mode` and `Layer 3 roaming`
   * @param { string } concentratorNetworkId          The concentrator to use for `Layer 3 roaming with a concentrator` or `VPN`
   * @param { number } vlanId                         The VLAN ID used for VLAN tagging. This param is only valid with `Layer 3 roaming with a concentrator` and `VPN`
   * @param { number } defaultVlanId                  The default VLAN ID used for `all other APs`. This param is only valid with `Bridge mode` and `Layer 3 roaming`
   * @param { Array } apTagsAndVlanIds                The list of tags and VLAN IDs used for VLAN tagging. This param is only valid with `Bridge mode`, `Layer 3 roaming`
   * @param { string } apTagsAndVlanIds.tags          Comma-separated list of AP tags
   * @param { number } apTagsAndVlanIds.vlanId        Numerical identifier that is assigned to the VLAN
   * @param { boolean } walledGardenEnabled           Allow access to a configurable list of IP ranges, which users may access prior to sign-on
   * @param { string } walledGardenRanges             Specify your walled garden by entering space-separated addresses and ranges using CIDR notation (e.g. 192.168.1.1/24 192.168.37.10/32). Meraki's splash page is automatically included in your walled garden
   * @param { number } minBitrate                     The minimum bitrate in Mbps. (1, 2, 5.5, 6, 9, 11, 12, 18, 24, 36, 48, 54)
   * @param { string } bandSelection                  The client-serving radio frequencies. (Dual band operation, 5 GHz band only, Dual band operation with Band Steering)
   * @param { number } perClientBandwidthLimitUp      The upload bandwidth limit in Kbps. (0 represents no limit.)
   * @param { number } perClientBandwidthLimitDown    The download bandwidth limit in Kbps. (0 represents no limit.)
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
    const { networkId, ssidNumber, target: localTarget, scope } = data
    delete data.networkId
    delete data.ssidNumber
    delete data.target
    delete data.scope

    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!ssidNumber) {
      return Promise.reject(new Error('The parameter ssidNumber is mandatory'))
    }

    return axios._put(
      data.apiKey || apiKey,
      localTarget || target,
      scope,
      `${basePath}/${networkId}/ssids/${ssidNumber}`,
      data
    )
  }

  return {
    listNetworkSSIDs,
    showNetworkSSID,
    updateNetworkSSID
  }
}

module.exports = createSSIDsEndpoints
