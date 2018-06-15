const path = require('path')

// POST /api/v0/organizations/730666/clone

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// {"name":"Workflow Organization"}

module.exports = function (req, res) {
  res.statusCode = 201

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:49:55 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'b7b5426366ce134abc1c322c4100b915')
  res.setHeader('x-runtime', '7.494944')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": "682858293500053297",
  "name": "Workflow Organization",
  "samlConsumerUrl": "https://n213.meraki.com/saml/login/MHABjavd/RJ78ncn5MW6a",
  "samlConsumerUrls": [
    "https://n213.meraki.com/saml/login/MHABjavd/RJ78ncn5MW6a"
  ]
}`, 'utf-8'))
  res.end()

  return __filename
}
