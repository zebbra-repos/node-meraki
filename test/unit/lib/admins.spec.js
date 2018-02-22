const apiKey = 'secret meraki api key'
const organizationId = 'meraki organization id'
const version = 'v0'
const target = 'n12'
const basePath = `/${target}/${version}/organizations/${organizationId}`
const adminEndpoints = require('../../../lib/rest/admins')({ apiKey, target, basePath })

describe('Admin endpoints', () => {
  it('should expose the admin ressource', () => {
    expect(Object.keys(adminEndpoints)).toEqual([
      'listAdmins',
      'createAdmin',
      'updateAdmin',
      'deleteAdmin'
    ])
  })

  it('should return 404 error for invalid credentials', () => {
    return adminEndpoints.listAdmins().catch((error) => {
      expect(error.message).toMatch('Request failed with status code 404')
    })
  })
})
