const path = require('path')

// GET /api/v0/organizations/682858293500053297/inventory

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:04 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '64b49c426b04c80c8ecf2a3ef2c1fcf6')
  res.setHeader('x-runtime', '0.190283')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "mac": "e0:55:3d:8c:4d:70",
    "serial": "Q2MN-Y8CM-HLVE",
    "networkId": null,
    "model": "MX64W",
    "claimedAt": "1529049004.33153",
    "publicIp": null
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
