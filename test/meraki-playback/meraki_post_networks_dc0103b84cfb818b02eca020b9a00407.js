const path = require('path')

// POST /api/v0/organizations/730666/networks

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// {"name":"test network","type":"appliance","timeZone":"Europe/Zurich","tags":"test-tag-1"}

module.exports = function (req, res) {
  res.statusCode = 201

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 08:10:51 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '71c3094d0830a89485faf1803283246a')
  res.setHeader('x-runtime', '0.651260')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": "N_682858293500087471",
  "organizationId": "730666",
  "type": "appliance",
  "name": "test network",
  "timeZone": "Europe/Zurich",
  "tags": " test-tag-1 "
}`, 'utf-8'))
  res.end()

  return __filename
}
