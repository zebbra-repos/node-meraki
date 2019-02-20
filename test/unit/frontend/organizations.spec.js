describe('organizations endpoint', () => {
  const { meraki } = global

  it('get organization information', async () => {
    await meraki.getOrganization({ eid: 'bD9YGcvd' })
  })
})
