describe('device endpoints', () => {
  const { meraki, networkId } = global

  it('lists the network devices', async () => {
    const devices = await meraki.listNetworkDevices({ networkId })
    const expected = [{
      networkId
    }, {
      networkId
    }, {
      networkId
    }, {
      networkId
    }, {
      networkId
    }, {
      networkId
    }]

    return expect(devices).toMatchObject(expected)
  })
})
