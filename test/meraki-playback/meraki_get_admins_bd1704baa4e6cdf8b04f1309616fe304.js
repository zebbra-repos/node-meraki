const path = require('path')

// GET /api/v0/organizations/682858293500053297/admins

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:49:55 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '8bd01a9b90cf94bdeb296ca78e3053f8')
  res.setHeader('x-runtime', '0.576299')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "name": "Hannes",
    "email": "hannes@email.com",
    "id": "682858293500329619",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Marco",
    "email": "marco@email.com",
    "id": "682858293500329620",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Markus",
    "email": "markus@email.com",
    "id": "682858293500329621",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Michi",
    "email": "michi@email.com",
    "id": "682858293500329622",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Michu",
    "email": "secret",
    "id": "682858293500329618",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Remo",
    "email": "remo@email.com",
    "id": "682858293500329623",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
