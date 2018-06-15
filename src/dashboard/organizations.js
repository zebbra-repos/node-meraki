/**
 * Create a Meraki Dashboard API wrapper for the organization ressource.
 *
 * @module meraki/dashboard/organizations
 * @param { Object } settings           The configuration object used to create the api wrapper
 * @param { string } settings.baseUrl   The Meraki base url
 * @param { object } settings.store     The session store
 * @param { string } setings.email      The Meraki dashboard account email
 * @return { Object } The initialized Meraki Dashboard API wrapper for the organization ressource
 */
function createOrganizationsEndpoints ({ baseUrl, store, email }) {
  const axios = require('./axios')({ baseUrl, store })

  /**
   * List the organizations that the user has privileges on.
   *
   * @memberof module:meraki/dashboard/organizations
   * @param { Object } params
   * @param { string } params.eid The dashboard id for this organization
   * @return { Promise } A promise holding the organizations this user has privileges on
   */
  function listOrganizationsDashboard ({ eid }) {
    if (!eid) {
      return Promise.reject(new Error('The parameter eid is mandatory'))
    }

    return axios._get(eid, `/o/${eid}/manage/organization/administered_orgs`)
  }

  /**
   * Delete the given organization. This will first remove all dependencies
   * for this organization and finally deletes the organization itself.
   *
   * @memberof module:meraki/dashboard/organizations
   * @param { Object } params
   * @param { string } params.eid The dashboard id for this organization
   * @return { Promise } Information message
   */
  function deleteOrganizationDashboard ({ eid }) {
    if (!eid) {
      return Promise.reject(new Error('The parameter eid is mandatory'))
    }

    return axios
      ._get(eid, `/o/${eid}/manage/organization/admins.json`)
      .then((admins) => {
        const data = {
          deleted_admins: admins.standard.filter((admin) => admin.email !== email)
        }
        return axios._post(eid, `/o/${eid}/manage/organization/update_admins`, data)
      })
      .then(() => axios._post(eid, `/o/${eid}/manage/organization/delete_org`, null, { 'X-Requested-With': 'XMLHttpRequest' }))
      .then(() => store.remove(eid))
      .then(() => Promise.resolve(`Successfully deleted organization eid=${eid}`))
  }

  return {
    listOrganizationsDashboard,
    deleteOrganizationDashboard
  }
}

module.exports = createOrganizationsEndpoints
