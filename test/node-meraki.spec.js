const apiKey = 'secret meraki api key'
const organizationId = 'meraki organization id'
const version = 'v0'
const target = 'n12'
const rest = require('../lib')({ version, apiKey, target, organizationId })

describe('Module node-meraki', () => {
  context('rest api', () => {
    it('should expose all ressources', () => {
      expect(Object.keys(rest)).toEqual([
        'listAdmins',
        'createAdmin',
        'updateAdmin',
        'deleteAdmin',
        'listClients',
        'showClientPolicy',
        'updateClientPolicy',
        'showClientSplashAuthorization',
        'updateClientSplashAuthorization',
        'listConfigurationTemplates',
        'deleteConfigurationTemplate',
        'listNetworkDevices',
        'showNetworkDevice',
        'listNetworkDeviceUplinks',
        'updateNetworkDevice',
        'claimNetworkDevice',
        'deleteNetworkDevice',
        'showNetworkDeviceLLDPandCDP',
        'listNetworkGroupPolicies',
        'listNetworks',
        'showNetwork',
        'updateNetwork',
        'createNetwork',
        'deleteNetwork',
        'bindNetworkToTemplate',
        'unbindNetworkFromTemplate',
        'listTrafficAnalysis',
        'listNetworkAccessPolicies',
        'listOrganizations',
        'showOrganization',
        'updateOrganization',
        'createOrganization',
        'cloneOrganization',
        'claimOrganization',
        'showOrganizationLicense',
        'listOrganizationInventory',
        'showOrganizationSNMP',
        'updateOrganizationSNMP',
        'listNetworkSSIDs',
        'showNetworkSSID',
        'updateNetworkSSID',
        'listStaticNetworkRoutes',
        'showStaticNetworkRoute',
        'updateStaticNetworkRoute',
        'createStaticNetworkRoute',
        'deleteStaticNetworkRoute',
        'listSwitchPorts',
        'showSwitchPort',
        'updateSwitchPort',
        'listNetworkVLANs',
        'showNetworkVLAN',
        'updateNetworkVLAN',
        'createNetworkVLAN',
        'deleteNetworkVLAN'
      ])
    })
  })
})
