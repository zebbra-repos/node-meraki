/**
 * Create a Meraki REST API wrapper for the VLAN ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#vlans} for more information.
 *
 * @module lib/rest/vlans
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the VLAN ressource
 * @return { Object } The initialized Meraki REST API wrapper for the VLAN ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const vlanEndpoints = require('./lib/rest/vlans')({ apiKey, target, basePath, baseUrl, port })
 */
function createVlansEndpoints ({ apiKey, target, basePath, baseUrl = 'https://api.meraki.com' }) {
  const axios = require('./axios')({ baseUrl })

  /**
   * List the VLANs for this network.
   *
   * @memberof module:lib/rest/vlans
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the VLANs
   * @return { Promise } A promise holding the VLANs of this network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id": "10",
   *     "networkId": "N_1234",
   *     "name": "VOIP",
   *     "applianceIp": "192.168.10.1",
   *     "subnet": "192.168.10.0/24"
   *   }
   * ]
   */
  function listNetworkVLANs ({ networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/vlans`)
  }

  /**
   * Return a VLAN.
   *
   * @memberof module:lib/rest/vlans
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the VLANs
   * @param { string } param.vlanId           The id of the VLAN for which to show the details
   * @return { Promise } A promise holding the details of this VLAN
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "applianceIp": "192.168.10.1",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function showNetworkVLAN ({ networkId, vlanId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!vlanId) {
      return Promise.reject(new Error('The parameter vlanId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${networkId}/vlans/${vlanId}`)
  }

  /**
   * Update a VLAN.
   *
   * @memberof module:lib/rest/vlans
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the VLANs
   * @param { string } param.vlanId           The id of the VLAN to update
   * @param { string } param.name             The name of the VLAN
   * @param { string } param.subnet           The subnet of the VLAN
   * @param { string } param.applianceIp      The local IP of the appliance on the VLAN
   * @param { Object } param.fixedIpAssignments The DHCP fixed IP assignments on the VLAN
   * @param { Array } param.reservedIpRanges    The DHCP reserved IP ranges on the VLAN
   * @param { string } param.vpnNatSubnet     The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
   * @param { string } param.dnsNameservers   The DNS nameservers used for DHCP responses, either `upstream_dns`, `google_dns`, `opendns`, or a newline seperated string of IP addresses or domain names
   * @return { Promise } A promise holding the updated VLAN
   * @example <caption>Example request data</caption>
   * {
   *   "name": "VOIP",
   *   "applianceIp": "192.168.10.1",
   *   "subnet": "192.168.10.0/24",
   *   "fixedIpAssignments": {
   *     "13:37:de:ad:be:ef": {
   *       "ip": "192.168.10.5",
   *       "name": "fixed"
   *     }
   *   },
   *   "reservedIpRanges": [{
   *     "start": "192.168.10.20",
   *     "end": "192.168.10.30",
   *     "comment": "reserved"
   *   }],
   *   "dnsNameservers": "google_dns"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "applianceIp": "192.168.10.1",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function updateNetworkVLAN (data) {
    const { networkId, vlanId } = data
    delete data.networkId
    delete data.vlanId

    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!vlanId) {
      return Promise.reject(new Error('The parameter vlanId is mandatory'))
    }

    return axios._put(apiKey, target, `${basePath}/${networkId}/vlans/${vlanId}`, data)
  }

  /**
   * Add a VLAN.
   *
   * @memberof module:lib/rest/vlans
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the VLANs
   * @param { string } param.id               The VLAN ID of the new VLAN (must be between 1 and 4094)
   * @param { string } param.name             The name of the VLAN
   * @param { string } param.subnet           The subnet of the VLAN
   * @param { string } param.applianceIp      The local IP of the appliance on the VLAN
   * @return { Promise } A promise holding the newly created VLAN
   * @example <caption>Example request data</caption>
   * {
   *   "id": "10",
   *   "name": "VOIP",
   *   "applianceIp": "192.168.10.1",
   *   "subnet": "192.168.10.0/24"
   * }
   * @example <caption>Example response</caption>
   * {
   *   "id": "10",
   *   "networkId": "N_1234",
   *   "name": "VOIP",
   *   "applianceIp": "192.168.10.1",
   *   "subnet": "192.168.10.0/24"
   * }
   */
  function createNetworkVLAN ({ networkId, id, name, subnet, applianceIp }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    const data = { id, name, subnet, applianceIp }
    return axios._post(apiKey, target, `${basePath}/${networkId}/vlans`, data)
  }

  /**
   * Delete a VLAN from a network.
   *
   * @memberof module:lib/rest/vlans
   * @param { Object } param                  The parameters for this request
   * @param { string } param.networkId        The id of the network for which to list the VLANs
   * @param { string } param.vlanId           The id of the VLAN to delete
   * @return { Promise } A promise with no data
   */
  function deleteNetworkVLAN ({ networkId, vlanId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!vlanId) {
      return Promise.reject(new Error('The parameter vlanId is mandatory'))
    }

    return axios._delete(apiKey, target, `${basePath}/${networkId}/vlans/${vlanId}`)
  }

  return {
    listNetworkVLANs,
    showNetworkVLAN,
    updateNetworkVLAN,
    createNetworkVLAN,
    deleteNetworkVLAN
  }
}

module.exports = createVlansEndpoints
