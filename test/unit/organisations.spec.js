describe('organisation endpoint', () => {
  const { rest, orgId } = global

  it('lists the organisations', () => {
    return expect(rest.listOrganizations())
      .resolves.toHaveLength(4)
  })

  it('shows the organisation', () => {
    return expect(rest.showOrganization({ orgId }))
      .resolves.toMatchObject({ id: Number(orgId) })
  })

  it('shows the organisation license', () => {
    return expect(rest.showOrganizationLicense({ orgId }))
      .resolves.toMatchObject({})
  })

  it('clones an organisation', () => {
    return expect(rest.cloneOrganization({ orgId, name: 'organisation clone' }))
      .resolves.toMatchObject({
        name: 'organisation clone'
      })
  })
})
