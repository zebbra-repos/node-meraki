const path = require('path')

// POST /api/v0/networks/L_682858293500060703/httpServers/webhookTests

// accept: application/json, text/plain, */*
// content-type: application/json;charset=utf-8
// maxredirects: 5
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// {"url":"http://requestbin.fullcontact.com/1otfr3t1"}

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 22 Feb 2019 10:20:23 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-robots-tag', 'none')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '70475cba4288501c8e7ee573c1dd9b12')
  res.setHeader('x-runtime', '0.481457')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": "682858293500068269",
  "url": "http://requestbin.fullcontact.com/1otfr3t1",
  "status": "enqueued"
}`, 'utf-8'))
  res.end()

  return __filename
}
