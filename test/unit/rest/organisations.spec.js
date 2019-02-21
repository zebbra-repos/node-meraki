describe('organisation endpoint', () => {
  const { meraki, orgId } = global

  it('lists the organisations', () => {
    return expect(meraki.listOrganizations())
      .resolves.toHaveLength(4)
  })

  it('shows the organisation', () => {
    return expect(meraki.showOrganization({ orgId }))
      .resolves.toMatchObject({ id: Number(orgId) })
  })

  it('shows the organisation license', () => {
    return expect(meraki.showOrganizationLicense({ orgId }))
      .resolves.toMatchObject({})
  })

  it('clones an organisation', () => {
    return expect(meraki.cloneOrganization({ orgId, name: 'Workflow Organization' }))
      .resolves.toMatchObject({
        name: 'Workflow Organization'
      })
  })
})
