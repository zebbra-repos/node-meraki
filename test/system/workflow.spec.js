const _ = require('lodash')

describe('Workflow', () => {
  const { meraki, orgId: templateOrgId, serial, networkId } = global
  const timeout = 1000 * 60

  let orgId
  it('clones the template organization', async () => {
    const clone = await meraki.cloneOrganization({ orgId: templateOrgId, name: 'Workflow Organization' })
    const expected = {
      name: 'Workflow Organization'
    }

    orgId = clone.id
    return expect(clone).toMatchObject(expected)
  }, timeout)

  let admin
  it('revokes admin access for an administrator', async () => {
    const admins = await meraki.listAdmins({ orgId })
    admin = _.first(admins)

    const error = await meraki.deleteAdmin({ orgId, adminId: admin.id })
    return expect(error).toEqual('')
  }, timeout)

  let template
  it('lists the organization templates', async () => {
    const templates = await meraki.listConfigurationTemplates({ orgId })
    const expected = [{
      id: expect.anything(),
      name: 'zebbra HQ'
    }]

    template = _.find(templates, { name: 'zebbra HQ' })

    return expect(templates).toEqual(expect.arrayContaining(expected))
  }, timeout)

  let network
  it('creates a new network', async () => {
    const data = {
      orgId,
      name: 'Example Network',
      type: 'appliance',
      tags: ' tag1 tag2 '
    }

    const expected = {
      name: 'Example Network',
      type: 'appliance'
    }

    network = await meraki.createNetwork(data)
    return expect(network).toMatchObject(expected)
  }, timeout)

  it('binds the network to a template', async () => {
    const error = await meraki.bindNetworkToTemplate({ networkId: network.id, configTemplateId: template.id })
    network.timeZone = 'Europe/Zurich'

    return expect(error).toEqual(' ')
  }, timeout)

  it('lists the organization networks', async () => {
    const networks = await meraki.listNetworks({ orgId })
    const expected = [network]

    return expect(networks).toMatchObject(expected)
  }, timeout)

  it('shows the network details', async () => {
    const details = await meraki.showNetwork({ networkId: network.id })

    return expect(details).toMatchObject(network)
  }, timeout)

  it('unbinds the device from the template network', () => {
    const call = meraki.deleteNetworkDevice({ networkId, deviceSerial: serial })

    return expect(call).resolves.toEqual('')
  }, timeout)

  it('claims a device into the organization', async () => {
    const error = await meraki.claimOrganization({ orgId, serial })

    return expect(error).toEqual(' ')
  }, timeout)

  it('lists the organization inventory with the newly clamied device', async () => {
    const inventory = await meraki.listOrganizationInventory({ orgId })
    const expected = [{
      serial
    }]

    return expect(inventory).toMatchObject(expected)
  }, timeout)

  it('claims the device into the network', async () => {
    const error = await meraki.claimNetworkDevice({ networkId: network.id, deviceSerial: serial })

    return expect(error).toEqual(' ')
  }, timeout)

  let device
  it('lists the claimed device in the network device inventory', async () => {
    const devices = await meraki.listNetworkDevices({ networkId: network.id })
    const expected = [{
      serial
    }]

    device = devices[0]

    return expect(devices).toMatchObject(expected)
  }, timeout)

  it('shows the device details', async () => {
    const details = await meraki.showNetworkDevice({ networkId: network.id, deviceSerial: device.serial })

    return expect(details).toMatchObject(device)
  }, timeout)

  it('lists the status of the device in the organization overview', async () => {
    const statuses = await meraki.showOrganizationDeviceStatuses({ orgId })
    const expected = [{
      serial,
      status: 'offline'
    }]

    return expect(statuses).toMatchObject(expected)
  }, timeout)

  it('unbinds the device from the network', () => {
    const call = meraki.deleteNetworkDevice({ networkId: network.id, deviceSerial: device.serial })

    return expect(call).resolves.toEqual('')
  }, timeout)

  it('claims the device back to the original organization', () => {
    const call = meraki.claimOrganization({ orgId: templateOrgId, serial: device.serial })

    return expect(call).resolves.toEqual(' ')
  }, timeout)

  it('claims the device into a network in the original organization', () => {
    const call = meraki.claimNetworkDevice({ networkId, deviceSerial: device.serial })

    return expect(call).resolves.toEqual(' ')
  })

  it('unbinds the network from the template', () => {
    const call = meraki.unbindNetworkFromTemplate({ networkId: network.id })

    return expect(call).resolves.toEqual(' ')
  }, timeout)

  it('deletes the network', () => {
    const call = meraki.deleteNetwork({ networkId: network.id })

    return expect(call).resolves.toEqual('')
  }, timeout)
})
