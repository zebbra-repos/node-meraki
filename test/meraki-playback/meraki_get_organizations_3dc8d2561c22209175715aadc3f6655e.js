const path = require('path')

// GET /api/v0/organizations

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 08:02:24 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'a1314d65f4f8eb744bbef623dded1bf1')
  res.setHeader('x-runtime', '0.188103')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "id": "682858293500052863",
    "name": "zebbra AG"
  },
  {
    "id": 730666,
    "name": "SunAki-Template",
    "samlConsumerUrl": "https://n213.meraki.com/saml/login/K1P3aa/HAFvJan5MW6a",
    "samlConsumerUrls": [
      "https://n213.meraki.com/saml/login/K1P3aa/HAFvJan5MW6a"
    ]
  },
  {
    "id": "682858293500053290",
    "name": "Binzmühlestrasse 130",
    "samlConsumerUrl": "https://n213.meraki.com/saml/login/sQrTDcvd/jpjmUan5MW6a",
    "samlConsumerUrls": [
      "https://n213.meraki.com/saml/login/sQrTDcvd/jpjmUan5MW6a"
    ]
  },
  {
    "id": "682858293500052965",
    "name": "organisation clone"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
