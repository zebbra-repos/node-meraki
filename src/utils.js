/**
 * Takes an array of cookie objects and combines them to a single string
 * representation separated by a semicolon.
 *
 * @memberof module:utils
 * @param { array } cookies The cookies to combine
 * @return { string } The combined cookies
 */
function toCookieString (cookies) {
  return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')
}

/**
 * Takes a samle consumer url and extracts the eid from it.
 *
 * @param { string } samlConsumerUrl The samle consumer url for which to extract the eid
 * @return { string } The extracted eid
 */
function extractEid (samlConsumerUrl) {
  const parts = samlConsumerUrl.split('/')
  const eid = parts[parts.length - 2]

  return eid
}

/**
 * Collection of helpful functions.
 *
 * @module utils
 */
module.exports = {
  toCookieString,
  extractEid
}
