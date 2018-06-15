describe('client endpoints', () => {
  const { meraki } = global

  it('lists the device clients', () => {
    return expect(meraki.listClients({ deviceSerial: 'Q2MN-Y8CM-HLVE' }))
      .resolves.toMatchObject([])
  })
})
