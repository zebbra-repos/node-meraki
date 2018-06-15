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
  res.setHeader('date', 'Fri, 15 Jun 2018 08:10:50 GMT')
  res.setHeader('content-type', 'application/json')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('last-modified', 'Fri, 15 Jun 2018 08:10:50 GMT')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'c21b160f817b67209d5bd0fbf3acdbef')
  res.setHeader('x-runtime', '0.087172')
  res.setHeader('x-content-digest', '82aa2a4ac0256d8fdc2ba1ef1f89cdc3edc9df45')
  res.setHeader('age', '0')
  res.setHeader('x-rack-cache', 'stale, invalid, store')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "id": "L_682858293500060703",
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
