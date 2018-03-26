describe('ssid endpoints', () => {
  const { rest } = global

  it('lists the network SSIDs', () => {
    return expect(rest.listNetworkSSIDs({ networkId: 'L_682858293500056965' }))
      .resolves.toHaveLength(15)
  })
})
