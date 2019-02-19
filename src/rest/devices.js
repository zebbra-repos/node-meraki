/**
 * Create a Meraki REST API wrapper for the device ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#devices} for more information.
 *
 * @module meraki/rest/devices
 * @param { string } [apiKey='']       The Meraki api key
 * @param { string } [target='api']    The Meraki target
 * @param { string } [basePath='/']    The Meraki base path for the device ressource
 * @param { string } rateLimiter       The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the device ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/networks`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const deviceEndpoints = require('./lib/rest/devices')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createDevicesEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter }) {
  const axios = require('../utils/axios')({ baseUrl, rateLimiter })

  /**
   * List the devices in a network.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]   Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]   Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId  The id of the network for which to list the devices
   * @return { Promise } A promise holding the devices of this network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "name":"My AP",
   *     "lat":37.4180951010362,
   *     "lng":-122.098531723022,
   *     "serial":"Q2XX-XXXX-XXXX",
   *     "mac":"00:11:22:33:44:55:66",
   *     "model":"MR34",
   *     "address":"1600 Pennsylvania Ave",
   *     "lanIp":"1.2.3.4"
   *     "tags":" recently-added ",
   *     "networkId":"N_1234",
   *     "beaconIdParams": {
   *       "uuid": "00000000-0000-0000-0000-000000000000",
   *       "major": 5,
   *       "minor": 3,
   *     }
   *   }
   * ]
   */
  function listNetworkDevices ({ apiKey: localApiKey, target: localTarget, networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices`)
  }

  /**
   * Return a single network device.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the network for which to list the devices
   * @param { string } deviceSerial The serial number of the device for which to show the details
   * @return { Promise } A promise holding the device of this network
   * @example <caption>Example response</caption>
   * {
   *   "name":"My AP",
   *   "lat":37.4180951010362,
   *   "lng":-122.098531723022,
   *   "serial":"Q2XX-XXXX-XXXX",
   *   "mac":"00:11:22:33:44:55:66",
   *   "model":"MR34",
   *   "address":"1600 Pennsylvania Ave",
   *   "lanIp":"1.2.3.4"
   *   "tags":" recently-added ",
   *   "networkId":"N_1234",
   *   "beaconIdParams": {
   *     "uuid": "00000000-0000-0000-0000-000000000000",
   *     "major": 5,
   *     "minor": 3,
   *   }
   * }
   */
  function showNetworkDevice ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/${deviceSerial}`)
  }

  /**
   * Return an array containing the uplink information for a device.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the network for which to list the devices
   * @param { string } deviceSerial The serial number of the device for which to show the uplink details
   * @return { Promise } A promise holding the uplink information of this network device
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "interface":"WAN 1",
   *     "status":"Active",
   *     "ip":"10.0.0.0",
   *     "gateway":"10.0.0.1",
   *     "publicIp":"123.123.123.1",
   *     "dns":"8.8.8.8, 8.8.4.4",
   *     "usingStaticIp":true
   *   },
   *   {
   *     "interface":"WAN 2",
   *     "status":"Ready",
   *     "ip":"10.0.4.2",
   *     "gateway":"10.0.4.1",
   *     "publicIp":"123.123.123.2",
   *     "dns":"8.8.8.8",
   *     "usingStaticIp":false
   *   }
   * ]
   */
  function listNetworkDeviceUplinks ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/${deviceSerial}/uplink`)
  }

  /**
   * Update the attributes of a device.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]         Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]         Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId        The id of the network for which to list the devices
   * @param { string } deviceSerial     The serial number of the network device to update
   * @param { string } name             The name of a device
   * @param { string } tags             The tags of a device
   * @param { number } lat              The latitude of a device
   * @param { number } lng              The longitude of a device
   * @param { string } address          The address of a device
   * @param { boolean } moveMapMarker   Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.
   * @return { Promise } A promise holding the update network device
   * @example <caption>Example device data</caption>
   * {
   *   "name": "Your AP",
   *   "lat": 37.4180951010362,
   *   "lng": -122.098531723022,
   *   "serial": "Q2XX-XXXX-XXXX",
   *   "mac": "00:11:22:33:44:55:66",
   *   "tags": " recently-added "
   * }
   * @example <caption>Example response</caption>
   * {
   *   "name":"Your AP",
   *   "tags":" recently-added ",
   *   "lat":37.4180951010362,
   *   "lng":-122.098531723022,
   *   "serial":"Q2XX-XXXX-XXXX",
   *   "mac":"00:11:22:33:44:55:66",
   *   "model":"MR34",
   *   "address":"1600 Pennsylvania Ave",
   *   "moveMapMarker": true,
   *   "lanIp":"1.2.3.4"
   * }
   */
  function updateNetworkDevice ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial, name, tags, lat, lng, address, moveMapMarker }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    const data = { name, tags, lat, lng, address, moveMapMarker }
    return axios._put(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/${deviceSerial}`, data)
  }

  /**
   * Claim a device into a network.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the network for which to list the devices
   * @param { string } deviceSerial The serial number of the device to claim into the network
   * @return { Promise } A promise with no data
   */
  function claimNetworkDevice ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    const data = { serial: deviceSerial }
    return axios._post(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/claim`, data)
  }

  /**
   * Remove a single network device.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the network for which to list the devices
   * @param { string } deviceSerial The serial number of the device to remove from the network
   * @return { Promise } A promise with no data
   */
  function deleteNetworkDevice ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._post(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/${deviceSerial}/remove`)
  }

  /**
   * List LLDP and CDP information for a device.
   *
   * @memberof module:meraki/rest/devices
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the network for which to list the devices
   * @param { string } deviceSerial The serial number of the device for which to show the lldp and cdp information
   * @param { number } timespan     The timespan for which LLDP and CDP information will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds). LLDP and CDP information is sent to the Meraki dashboard every 10 minutes. In instances where this LLDP and CDP information matches an existing entry in the Meraki dashboard, the data is updated once every two hours. Meraki recommends querying LLDP and CDP information at an interval slightly greater than two hours, to ensure that unchanged CDP / LLDP information can be queried consistently.
   * @return { Promise } A promise holding the lldp and cdp information for this network device
   * @example <caption>Example response</caption>
   * {
   *   "sourceMac": "e0:55:3d:8c:df:5b",
   *   "ports": {
   *     "8": {
   *       "cdp": {
   *         "deviceId": "e0553d8cdf53",
   *         "portId": "Port 10",
   *         "address": "192.168.127.4",
   *         "sourcePort": "8"
   *       }
   *     },
   *     "12": {
   *       "cdp": {
   *         "deviceId": "e0553d8cdf53",
   *         "portId": "Port 11",
   *         "address": "192.168.127.4",
   *         "sourcePort": "12"
   *       },
   *       "lldp": {
   *         "systemName": "Meraki MS350-24X - Phineas",
   *         "portId": "11",
   *         "managementAddress": "192.168.127.4",
   *         "sourcePort": "12"
   *       }
   *     }
   *   }
   * }
   */
  function showNetworkDeviceLLDPandCDP ({ apiKey: localApiKey, target: localTarget, networkId, deviceSerial, timespan = 2592000 }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!deviceSerial) {
      return Promise.reject(new Error('The parameter deviceSerial is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/devices/${deviceSerial}/lldp_cdp`, { timespan })
  }

  return {
    listNetworkDevices,
    showNetworkDevice,
    listNetworkDeviceUplinks,
    updateNetworkDevice,
    claimNetworkDevice,
    deleteNetworkDevice,
    showNetworkDeviceLLDPandCDP
  }
}

module.exports = createDevicesEndpoints
