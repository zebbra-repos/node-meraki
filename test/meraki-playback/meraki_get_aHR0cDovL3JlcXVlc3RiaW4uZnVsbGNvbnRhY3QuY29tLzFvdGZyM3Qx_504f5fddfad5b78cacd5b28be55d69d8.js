const path = require('path')

// GET /api/v0/networks/L_682858293500060703/httpServers/aHR0cDovL3JlcXVlc3RiaW4uZnVsbGNvbnRhY3QuY29tLzFvdGZyM3Qx

// accept: application/json, text/plain, */*
// maxredirects: 5
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 22 Feb 2019 10:18:09 GMT')
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
  res.setHeader('x-request-id', '50a77465ecbc6f5a555b312e3e3495fe')
  res.setHeader('x-runtime', '0.226457')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "name": "Test Hook",
  "url": "http://requestbin.fullcontact.com/1otfr3t1",
  "sharedSecret": "Sooo secret",
  "id": "aHR0cDovL3JlcXVlc3RiaW4uZnVsbGNvbnRhY3QuY29tLzFvdGZyM3Qx",
  "networkId": "L_682858293500068516"
}`, 'utf-8'))
  res.end()

  return __filename
}
