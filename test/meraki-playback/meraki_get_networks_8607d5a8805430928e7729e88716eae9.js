const path = require('path')

// GET /api/v0/organizations/682858293500053297/networks

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:01 GMT')
  res.setHeader('content-type', 'application/json')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('last-modified', 'Fri, 15 Jun 2018 07:50:00 GMT')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'b8fea0a8723d200e5d56c5f3b7c32122')
  res.setHeader('x-runtime', '0.168298')
  res.setHeader('x-content-digest', 'bbb65aff0da0ad90625b21d3492c9acc9035672e')
  res.setHeader('age', '0')
  res.setHeader('x-rack-cache', 'miss, store')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "id": "N_682858293500087468",
    "organizationId": "682858293500053297",
    "name": "Example Network",
    "timeZone": "Europe/Zurich",
    "tags": " tag1 tag2 ",
    "type": "appliance",
    "configTemplateId": "L_682858293500060770"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
