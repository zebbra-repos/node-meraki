const path = require('path')

// POST /api/v0/organizations/730666/clone

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// content-length: 29
// host: n213.meraki.com
// connection: close

// Request Body:
// {
//   "name": "organisation clone"
// }

module.exports = function (req, res) {
  res.statusCode = 201

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Mon, 26 Mar 2018 09:44:43 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'eb499e0671f67802c02fd51a5c5856ce')
  res.setHeader('x-runtime', '6.011043')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": 682858293500053000,
  "name": "organisation clone"
}`, 'utf-8'))
  res.end()

  return __filename
}
