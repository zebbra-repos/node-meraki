describe('network endpoints', () => {
  const { meraki, orgId, networkId, templateId } = global
  const data = {
    name: 'test network',
    type: 'appliance',
    timeZone: 'Europe/Zurich',
    tags: 'test-tag-1'
  }

  it('lists the networks for the given organisation', () => {
    return expect(meraki.listNetworks({ orgId })).resolves.toHaveLength(1)
  })

  it('shows the network details', () => {
    return expect(meraki.showNetwork({ networkId })).resolves.toMatchObject({
      id: networkId,
      name: 'zebbra Internal',
      organizationId: '730666',
      tags: '',
      timeZone: 'Europe/Zurich',
      type: 'combined'
    })
  })

  it('lists network access policies', () => {
    return expect(
      meraki.listNetworkAccessPolicies({ networkId })
    ).resolves.toMatchObject([])
  })

  let network
  it('creates a new network', async () => {
    network = await meraki.createNetwork(Object.assign({}, data, { orgId }))
    return expect(network).toMatchObject({
      name: 'test network',
      organizationId: orgId,
      tags: ' test-tag-1 ',
      timeZone: 'Europe/Zurich',
      type: 'appliance'
    })
  })

  it('updates an existing network (keeps the network type)', () => {
    const updateNetwork = Object.assign({}, network, {
      name: 'test network 2',
      type: 'switch'
    })

    return expect(
      meraki.updateNetwork(
        Object.assign({}, updateNetwork, { networkId: network.id })
      )
    ).resolves.toMatchObject({
      name: 'test network 2',
      organizationId: orgId,
      tags: ' test-tag-1 ',
      timeZone: 'Europe/Zurich',
      type: 'appliance'
    })
  })

  it('binds the network to a template', () => {
    return meraki
      .bindNetworkToTemplate({
        networkId: network.id,
        configTemplateId: templateId
      })
      .then(() => {
        return expect(
          meraki.showNetwork({ networkId: network.id })
        ).resolves.toMatchObject({ configTemplateId: templateId })
      })
  })

  it('unbinds the network from a template', () => {
    return expect(
      meraki.unbindNetworkFromTemplate({ networkId: network.id })
    ).resolves.toBeDefined()
  })

  it('deletes an existing network', () => {
    return expect(
      meraki.deleteNetwork({ networkId: network.id })
    ).resolves.toBeDefined()
  })
})
