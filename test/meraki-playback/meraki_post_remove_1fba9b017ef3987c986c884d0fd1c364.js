const path = require('path')

// POST /api/v0/networks/L_682858293500060703/devices/Q2MN-Y8CM-HLVE/remove

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 204

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:04 GMT')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '296a4d79d73c2811a6573f4ee46ca0ce')
  res.setHeader('x-runtime', '2.769325')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(``, 'base64'))
  res.end()

  return __filename
}
