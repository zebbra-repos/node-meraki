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
  res.setHeader('date', 'Mon, 26 Mar 2018 09:36:06 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '1fda869aade878ab6948d820bcd2c62f')
  res.setHeader('x-runtime', '0.067484')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "id": 682858293500053000,
    "name": "Fiba Holzbau AG"
  },
  {
    "id": 682858293500053000,
    "name": "kusi"
  },
  {
    "id": 730666,
    "name": "SunAki-Template"
  },
  {
    "id": 723889,
    "name": "zebbra AG"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
