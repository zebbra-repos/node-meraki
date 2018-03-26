describe('template endpoints', () => {
  const { rest, orgId } = global

  it('lists the organisation templates', () => {
    return expect(rest.listConfigurationTemplates({ orgId }))
      .resolves.toMatchObject([{
        'id': 'L_682858293500056866',
        'name': 'SLaaS_Default_Template'
      }, {
        'id': 'L_682858293500056960',
        'name': 'zebbra HQ'
      }])
  })
})
