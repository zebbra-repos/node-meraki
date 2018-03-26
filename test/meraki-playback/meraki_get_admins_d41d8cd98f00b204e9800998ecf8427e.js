const path = require('path')

// GET /api/v0/organizations/730666/admins

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// connection: close
// host: n213.meraki.com

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Mon, 26 Mar 2018 08:48:09 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'a5710b7b5855fae40b1c4b772f15e7ea')
  res.setHeader('x-runtime', '0.249765')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "name": "Marco Stieger",
    "email": "***",
    "id": "933409",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Markus Roth",
    "email": "***",
    "id": "682858293500071120",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Michu Bärtschi",
    "email": "***",
    "id": "682858293500200528",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Read-Only",
    "email": "***",
    "id": "682858293500142290",
    "networks": [
      {
        "id": "L_682858293500056965",
        "access": "monitor-only"
      }
    ],
    "tags": [],
    "orgAccess": "none"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
