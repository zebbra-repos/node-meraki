const path = require('path')

// GET /api/v0/organizations/730666/networks

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Mon, 26 Mar 2018 11:01:06 GMT')
  res.setHeader('content-type', 'application/json')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('last-modified', 'Mon, 26 Mar 2018 11:01:06 GMT')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '54acdab9e049f18055bd6d6faa0e4781')
  res.setHeader('x-runtime', '0.062522')
  res.setHeader('x-content-digest', '65abe496cc563146f7b0b908b0acc45c5b15b76e')
  res.setHeader('age', '0')
  res.setHeader('x-rack-cache', 'stale, invalid, store')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "id": "N_682858293500074434",
    "organizationId": "730666",
    "name": "Template Switch Only",
    "timeZone": "Europe/Zurich",
    "tags": null,
    "type": "switch"
  },
  {
    "id": "L_682858293500056862",
    "organizationId": "730666",
    "name": "Template Switch - AP - SD",
    "timeZone": "America/Los_Angeles",
    "tags": null,
    "type": "combined"
  },
  {
    "id": "L_682858293500056965",
    "organizationId": "730666",
    "name": "zebbra Internal",
    "timeZone": "Europe/Zurich",
    "tags": null,
    "type": "combined",
    "configTemplateId": "L_682858293500056960"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
