describe('admin endpoint', () => {
  const { meraki, orgId } = global

  const data = {
    email: 'john.doe3@example.com',
    name: 'John Doe',
    orgAccess: 'none',
    tags: [{
      tag: 'west',
      access: 'read-only'
    }],
    networks: []
  }

  it('lists the administrators for the given organisation', () => {
    return expect(meraki.listAdmins({ orgId })).resolves.toHaveLength(7)
  })

  let admin
  it('creates a new admin', async () => {
    admin = await meraki.createAdmin(Object.assign({}, data, { orgId }))
    return expect(admin).toMatchObject(data)
  })

  it('updates an existing admin', () => {
    const updateAdmin = Object.assign({}, admin, { name: 'John Doe 3' })

    return expect(meraki.updateAdmin(Object.assign({}, updateAdmin, { orgId, adminId: admin.id })))
      .resolves.toMatchObject(updateAdmin)
  })

  it('deletes an existing admin', () => {
    return expect(meraki.deleteAdmin({ orgId, adminId: admin.id })).resolves.toEqual('')
  })
})
