const path = require('path')

// DELETE /api/v0/networks/N_682858293500087471

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 204

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 08:10:56 GMT')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'cc5575e0fd72504416077a24a16a6d57')
  res.setHeader('x-runtime', '2.842115')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(``, 'base64'))
  res.end()

  return __filename
}
