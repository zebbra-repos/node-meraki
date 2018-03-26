describe('network endpoints', () => {
  const { rest, orgId, networkId, templateId } = global
  const network = {
    name: 'test network',
    type: 'appliance',
    timeZone: 'Europe/Zurich',
    tags: 'test-tag-1'
  }

  it('lists the networks for the given organisation', () => {
    return expect(rest.listNetworks({ orgId }))
      .resolves.toHaveLength(3)
  })

  it('shows the network details', () => {
    return expect(rest.showNetwork({ networkId }))
      .resolves.toMatchObject({
        'id': 'N_682858293500074434',
        'name': 'Template Switch Only',
        'organizationId': '730666',
        'tags': '',
        'timeZone': 'Europe/Zurich',
        'type': 'switch'
      })
  })

  it('lists network access policies', () => {
    return expect(rest.listNetworkAccessPolicies({ networkId }))
      .resolves.toMatchObject([])
  })

  it('creates a new network', () => {
    return expect(rest.createNetwork(Object.assign({}, network, { orgId })))
      .resolves.toMatchObject({
        'id': 'N_682858293500079627',
        'name': 'test network',
        'organizationId': '730666',
        'tags': ' test-tag-1 ',
        'timeZone': 'Europe/Zurich',
        'type': 'appliance'
      })
  })

  it('updates an existing network (keeps the network type)', () => {
    const updateNetwork = Object.assign({}, network, { name: 'test network 2', type: 'switch' })

    return expect(rest.updateNetwork(Object.assign({}, updateNetwork, { networkId: 'N_682858293500079627' })))
      .resolves.toMatchObject({
        'id': 'N_682858293500079627',
        'name': 'test network 2',
        'organizationId': '730666',
        'tags': ' test-tag-1 ',
        'timeZone': 'Europe/Zurich',
        'type': 'appliance'
      })
  })

  it('binds the network to a template', () => {
    return rest.bindNetworkToTemplate({
      networkId: 'N_682858293500079627',
      configTemplateId: templateId
    })
      .then(() => {
        return expect(rest.showNetwork({ networkId: 'N_682858293500079627' }))
          .resolves.toMatchObject({ configTemplateId: templateId })
      })
  })

  it('unbinds the network from a template', () => {
    return expect(rest.unbindNetworkFromTemplate({ networkId: 'N_682858293500079627' }))
      .resolves.toBeDefined()
  })

  it('deletes an existing network', () => {
    return expect(rest.deleteNetwork({ networkId: 'N_682858293500079627' }))
      .resolves.toBeDefined()
  })
})
