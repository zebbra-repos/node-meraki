/**
 * Create a Meraki Dashboard API wrapper for the admin ressource.
 *
 * @module meraki/dashboard/admins
 * @param { Object } settings           The configuration object used to create the api wrapper
 * @param { string } settings.baseUrl   The Meraki base url
 * @param { object } settings.store     The session store
 * @return { Object } The initialized Meraki Dashboard API wrapper for the admin ressource
 */
function createAdminsEndpoints ({ baseUrl, store }) {
  const axios = require('./axios')({ baseUrl, store })

  /**
   * List the dashboard administrators in this organization.
   *
   * @memberof module:meraki/dashboard/admins
   * @param { Object } params
   * @param { string } params.eid The dashboard id for this organization
   * @return { Promise } A promise holding the dashboard administrators in this organization
   */
  function listAdminsDashboard ({ eid }) {
    if (!eid) {
      return Promise.reject(new Error('The parameter eid is mandatory'))
    }

    return axios._get(eid, `/o/${eid}/manage/organization/admins.json`)
  }

  /**
   * Revoke all access for a dashboard administrator within this organization.
   *
   * @memberof module:meraki/dashboard/admins
   * @param { Object } params
   * @param { string } params.eid     The dashboard id for this organization
   * @param { array } params.admins   The dashboard admins to remove
   * @return { Promise } A promise holding the remaining dashboard administrators in this organization
   */
  function deleteAdminsDashboard ({ eid, admins }) {
    if (!eid) {
      return Promise.reject(new Error('The parameter eid is mandatory'))
    }

    return store
      .get(eid)
      .then((session) => {
        const data = {
          deleted_admins: admins
        }

        return axios._post(eid, `/o/${eid}/manage/organization/update_admins`, data)
      })
  }

  return {
    listAdminsDashboard,
    deleteAdminsDashboard
  }
}

module.exports = createAdminsEndpoints
