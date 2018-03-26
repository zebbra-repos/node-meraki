describe('client endpoints', () => {
  const { rest } = global

  it('lists the device clients', () => {
    return expect(rest.listClients({ deviceSerial: 'Q2MN-Y8CM-HLVE' }))
      .resolves.toMatchObject([])
  })
})
