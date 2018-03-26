const path = require('path')

// GET /api/v0/networks/L_682858293500056862/devices

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Mon, 26 Mar 2018 11:38:53 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '94b69b6e13d4b3cc68701df9e691e34c')
  res.setHeader('x-runtime', '0.117678')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "wan1Ip": null,
    "wan2Ip": null,
    "serial": "Q2MN-Y8CM-HLVE",
    "mac": "e0:55:3d:8c:4d:70",
    "lat": 37.4180951010362,
    "lng": -122.098531723022,
    "address": "",
    "tags": " recently-added ",
    "name": null,
    "model": "MX64W",
    "networkId": "L_682858293500056862"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
