describe('template endpoints', () => {
  const { meraki, orgId } = global

  it('lists the organisation templates', () => {
    return expect(
      meraki.listConfigurationTemplates({ orgId })
    ).resolves.toMatchObject([
      {
        name: 'zebbra HQ'
      }
    ])
  })
})
