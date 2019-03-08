const path = require('path')

// DELETE /api/v0/networks/L_682858293500060703/httpServers/aHR0cDovL3JlcXVlc3RiaW4uZnVsbGNvbnRhY3QuY29tLzFvdGZyM3Qx

// accept: application/json, text/plain, */*
// maxredirects: 5
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 204

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 22 Feb 2019 10:20:39 GMT')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-robots-tag', 'none')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'dea356902f09f1b48dbdcf11a0dbbb79')
  res.setHeader('x-runtime', '0.370442')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(``, 'base64'))
  res.end()

  return __filename
}
