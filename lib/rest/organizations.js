const axios = require('./axios')

/**
 * Create a Meraki REST API wrapper for the organization ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#organizations} for more information.
 *
 * @module lib/rest/organizations
 * @param { Object } settings                   The configuration object used to create the api wrapper
 * @param { string } [settings.apiKey='']       The Meraki api key
 * @param { string } [settings.target='api']    The Meraki target
 * @param { string } [settings.basePath='/']    The Meraki base path for the organization ressource
 * @return { Object } The initialized Meraki REST API wrapper for the organization ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/organizations`
 * const organizationEndpoints = require('./lib/rest/organization')({ apiKey, target, basePath })
 */
function createOrganizationsEndpoints ({ apiKey = '', target = 'api', basePath = '/' }) {
  /**
   * List the organizations that the user has privileges on.
   *
   * @memberof module:lib/rest/organizations
   * @return { Promise } A promise holding the organizations this user has privileges on
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "id":1234,
   *     "name":"My org"
   *   }
   * ]
   */
  function listOrganizations () {
    return axios._get(apiKey, target, basePath)
  }

  /**
   * Return an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The organization id
   * @return { Promise } A promise holding the organization for this id
   * @example <caption>Example response</caption>
   * {
   *   "id":1234,
   *   "name":"My org"
   * }
   */
  function showOrganization ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}`)
  }

  /**
   * Update an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The organization id
   * @param { string } param.name             The name of the organization
   * @return { Promise } A promise holding the updated organization
   * @example <caption>Example response</caption>
   * {
   *   "id":1234,
   *   "name":"My org"
   * }
   */
  function updateOrganization ({ orgId, name }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    const data = { name }
    console.log(data, name)
    return axios._put(apiKey, target, `${basePath}/${orgId}`, data)
  }

  /**
   * Create a new organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.name             The name of the organization
   * @return { Promise } A promise holding the newly created organization
   * @example <caption>Example response</caption>
   * {
   *   "id":1234,
   *   "name":"My org"
   * }
   */
  function createOrganization ({ name }) {
    const data = { name }
    return axios._post(apiKey, target, basePath, data)
  }

  /**
   * Create a new organization by cloning the addressed organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization to clone
   * @param { string } param.name             The name of the new organization
   * @return { Promise } A promise holding the newly created / cloned organization
   * @example <caption>Example response</caption>
   * {
   *   "id":1234,
   *   "name":"My cloned org"
   * }
   */
  function cloneOrganization ({ orgId, name }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    const data = { name }
    return axios._post(apiKey, target, `${basePath}/${orgId}/clone`, data)
  }

  /**
   * Claim a device, license key, or order into an organization. When claiming by order, all devices
   * and licenses in the order will be claimed; licenses will be added to the organization and devices
   * will be placed in the organization's inventory. These three types of claims are mutually exclusive
   * and cannot be performed in one request.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization to claime
   * @param { string } param.order            The order number that should be claimed
   * @param { string } param.serial           The serial of the device that should be claimed
   * @param { string } param.licenseKey       The license key that should be claimed
   * @param { string } param.licenseMode      Either `renew` or `addDevices`. `addDevices` will increase the license limit, while `renew` will extend the amount of time until expiration. This parameter is required when claiming by licenseKey
   * @return { Promise } A promise with no data
   */
  function claimOrganization ({ orgId, order, serial, licenseKey, licenseMode }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    const data = { order, serial, licenseKey, licenseMode }
    return axios._post(apiKey, target, `${basePath}/${orgId}/claim`, data)
  }

  /**
   * Return the license state for an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization
   * @return { Promise } A promise holding the license state for this organization
   * @example <caption>Example response</caption>
   * {
   *   "status": "OK",
   *   "expirationDate": "Nov 16, 2016 UTC",
   *   "licensedDeviceCounts": {
   *     "MS": 100
   *   }
   * }
   */
  function showOrganizationLicense ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}/licenseState`)
  }

  /**
   * Return the inventory for an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization
   * @return { Promise } A promise holding the inventory for this organization
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "mac": "00:11:22:33:44:55:66",
   *     "serial": "Q2XX-XXXX-XXXX",
   *     "networkId": "N_1234",
   *     "model": "MR34",
   *     "claimedAt": "1477958158.69776",
   *     "publicIp": "1.2.3.4",
   *   }
   * ]
   */
  function listOrganizationInventory ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}/inventory`)
  }

  /**
   * Return the SNMP settings for an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization
   * @return { Promise } A promise holding then SNMP settings for this organization
   * @example <caption>Example response</caption>
   * {
   *   "v2cEnabled":false,
   *   "v3Enabled":false,
   *   "v3AuthMode":null,
   *   "v3PrivMode":null,
   *   "hostname":"n1.meraki.com",
   *   "port":16100
   * }
   */
  function showOrganizationSNMP ({ orgId }) {
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }

    return axios._get(apiKey, target, `${basePath}/${orgId}/snmp`)
  }

  /**
   * Update the SNMP settings for an organization.
   *
   * @memberof module:lib/rest/organizations
   * @param { Object } param                  The parameters for this request
   * @param { string } param.orgId            The id of the organization
   * @param { boolean } param.v2cEnabled      Boolean indicating whether SNMP version 2c is enabled for the organization
   * @param { boolean } param.v3Enabled       Boolean indicating whether SNMP version 3 is enabled for the organization
   * @param { string } param.v3AuthMode       The SNMP version 3 authentication mode either MD5 or SHA
   * @param { string } param.v3AuthPass       The SNMP version 3 authentication password. Must be at least 8 characters if specified
   * @param { string } param.v3PrivMode       The SNMP version 3 privacy mode DES or AES128
   * @param { string } param.v3PrivPass       The SNMP version 3 privacy password. Must be at least 8 characters if specified
   * @param { string } param.peerIps          The IPs that are allowed to access the SNMP server. This list should be IPv4 addresses separated by semi-colons (ie. "1.2.3.4;2.3.4.5")
   * @return { Promise } A promise holding then updated SNMP settings for this organization
   * @example <caption>Example response</caption>
   * {
   *   "v2cEnabled":false,
   *   "v3Enabled":false,
   *   "v3AuthMode":null,
   *   "v3PrivMode":null,
   *   "hostname":"n1.meraki.com",
   *   "port":16100,
   *   "peerIps":null
   * }
   */
  function updateOrganizationSNMP (data) {
    const { orgId } = data
    if (!orgId) {
      return Promise.reject(new Error('The parameter orgId is mandatory'))
    }
    delete data.orgId

    return axios._post(apiKey, target, `${basePath}/${orgId}/snmp`, data)
  }

  return {
    listOrganizations,
    showOrganization,
    updateOrganization,
    createOrganization,
    cloneOrganization,
    claimOrganization,
    showOrganizationLicense,
    listOrganizationInventory,
    showOrganizationSNMP,
    updateOrganizationSNMP
  }
}

module.exports = createOrganizationsEndpoints
