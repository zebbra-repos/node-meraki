describe('device endpoints', () => {
  const { rest } = global

  it('lists the network devices', () => {
    return expect(rest.listNetworkDevices({ networkId: 'L_682858293500056862' }))
      .resolves.toMatchObject([{
        'address': '',
        'lat': '37.4180951010362',
        'lng': '-122.098531723022',
        'model': 'MX64W',
        'name': null,
        'networkId': 'L_682858293500056862',
        'tags': ' recently-added ',
        'wan1Ip': null,
        'wan2Ip': null
      }])
  })
})
