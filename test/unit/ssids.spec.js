describe('ssid endpoints', () => {
  const { meraki, networkId } = global

  it('lists the network SSIDs', () => {
    return expect(meraki.listNetworkSSIDs({ networkId }))
      .resolves.toHaveLength(15)
  })
})
