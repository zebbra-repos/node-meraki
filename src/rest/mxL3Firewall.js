/**
 * Create a Meraki REST API wrapper for the mx-l3-firewall ressource. See the
 * [online documentation]{@link https://dashboard.meraki.com/api_docs#mx-l3-firewall} for more information.
 *
 * @module meraki/rest/mxL3Firewall
 * @param { string } [apiKey='']      The Meraki api key
 * @param { string } [target='api']   The Meraki target
 * @param { string } [basePath='/']   The Meraki base path for the mx-l3-firewall ressource
 * @param { string } rateLimiter      The rate limiter (bottleneck) configuration
 * @return { Object } The initialized Meraki REST API wrapper for the mx-l3-firewall ressource
 * @example
 * const apiKey = 'secret meraki api key'
 * const organizationId = 'meraki organization id'
 * const version = 'v0'
 * const target = 'n12'
 * const basePath = `/${target}/${version}/network`
 * const rateLimiter = {
 *  enabled: true
 * }
 * const mxL3FirewallEndpoints = require('./lib/rest/mxL3Firewall')({ apiKey, target, basePath, baseUrl, rateLimiter })
 */
function createMxL3FirewallEndpoints ({ apiKey = '', target = 'api', basePath = '/', baseUrl = 'https://api.meraki.com', rateLimiter }) {
  const axios = require('./axios')({ baseUrl, rateLimiter })

  /**
   * List the L3 firewall rules for an MX network.
   *
   * @memberof module:meraki/rest/mxL3Firewall
   * @param { string } [apiKey]     Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]     Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId    The id of the MX network for which to list the L3 firewall rules
   * @return { Promise } A promise holding the L3 firewall rules this MX network
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "comment": "Allow TCP traffic to subnet with HTTP servers.",
   *     "policy": "allow",
   *     "protocol": "tcp",
   *     "destPort": 443,
   *     "destCidr": "192.168.1.0/24",
   *     "srcPort": "Any",
   *     "srcCidr": "Any",
   *     "syslogEnabled": false
   *   }
   * ]
   */
  function listMxL3FirewallRules ({ apiKey: localApiKey, target: localTarget, networkId }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    }

    return axios._get(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/l3FirewallRules`)
  }

  /**
   * Update the L3 firewall rules of an MX network. Pass an empty array to remove all rules but the default rule.
   * If the network is bound to a template you have to pass the template id instead of the network id.
   *
   * @memberof module:meraki/rest/mxL3Firewall
   * @param { string } [apiKey]             Optional custom apiKey for this request (if not set will take the inital apiKey)
   * @param { string } [target]             Optional custom target for this request (if not set will take the inital target)
   * @param { string } networkId            The id of the MX network for which to list the L3 firewall rules
   * @param { array } rules
   * @param { string } [rules.comment]      Description of the rule
   * @param { string } rules.policy         'Allow' or 'Deny' traffic specified by this rule
   * @param { string } rules.protocol       The type of protocol (must be 'tcp', 'udp', 'icmp' or 'any')
   * @param { string } rules.srcPort        Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
   * @param { string } rules.srcCidr        Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
   * @param { string } rules.destPort       Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
   * @param { string } rules.destCidr       Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
   * @param { string } rules.syslogEnabled  Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
   * @param { boolean } [syslogDefaultRule] Log the special default rule (boolean value - enable only if you've configured a syslog server)
   * @return { Promise } A promise holding the updated L3 firewall rules this MX network
   * @example <caption>Example request data</caption>
   * {
   *   "comment": "Allow TCP traffic to subnet with HTTP servers.",
   *   "policy": "allow",
   *   "protocol": "tcp",
   *   "destPort": 443,
   *   "destCidr": "192.168.1.0/24",
   *   "srcPort": "Any",
   *   "srcCidr": "Any",
   *   "syslogEnabled": false
   * }
   * @example <caption>Example response</caption>
   * [
   *   {
   *     "comment": "Allow TCP traffic to subnet with HTTP servers.",
   *     "policy": "allow",
   *     "protocol": "tcp",
   *     "destPort": 443,
   *     "destCidr": "192.168.1.0/24",
   *     "srcPort": "Any",
   *     "srcCidr": "Any",
   *     "syslogEnabled": false
   *   }
   * ]
   */
  function updateMxL3FirewallRule ({ apiKey: localApiKey, target: localTarget, networkId, rules, syslogDefaultRule }) {
    if (!networkId) {
      return Promise.reject(new Error('The parameter networkId is mandatory'))
    } else if (!rules) {
      return Promise.reject(new Error('The parameter rules is mandatory'))
    } else if (!Array.isArray(rules)) {
      return Promise.reject(new Error('The parameter rules must be of type array'))
    }

    return axios._put(localApiKey || apiKey, localTarget || target, `${basePath}/${networkId}/l3FirewallRules`, { rules, syslogDefaultRule })
  }

  return {
    listMxL3FirewallRules,
    updateMxL3FirewallRule
  }
}

module.exports = createMxL3FirewallEndpoints
