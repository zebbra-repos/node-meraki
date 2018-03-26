describe('admin endpoint', () => {
  const { rest, orgId, adminId } = global

  const admin = {
    email: 'john.doe2@example.com',
    name: 'John Doe',
    orgAccess: 'none',
    tags: [{
      tag: 'west',
      access: 'read-only'
    }],
    networks: []
  }

  it('lists the administrators for the given organisation', () => {
    return expect(rest.listAdmins({ orgId })).resolves.toHaveLength(4)
  })

  it('creates a new admin', () => {
    return expect(rest.createAdmin(Object.assign({}, admin, { orgId })))
      .resolves.toMatchObject(admin)
  })

  it('updates an existing admin', () => {
    const updateAdmin = Object.assign({}, admin, { name: 'John Doe 2' })

    return expect(rest.updateAdmin(Object.assign({}, updateAdmin, { orgId, adminId })))
      .resolves.toMatchObject(updateAdmin)
  })

  it('deletes an existing admin', () => {
    return expect(rest.deleteAdmin({ orgId, adminId })).resolves.toEqual('')
  })
})
