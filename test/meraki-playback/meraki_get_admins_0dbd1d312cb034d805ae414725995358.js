const path = require('path')

// GET /api/v0/organizations/730666/admins

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:58:08 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '9c3985d1943185a1f01fafb78aa51b36')
  res.setHeader('x-runtime', '0.214676')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "name": "Hannes",
    "email": "hannes@email.com",
    "id": "682858293500327576",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "John Doe",
    "email": "john.doe2@example.com",
    "id": "682858293500328577",
    "networks": [],
    "tags": [
      {
        "tag": "west",
        "access": "read-only"
      }
    ],
    "orgAccess": "none"
  },
  {
    "name": "Marco",
    "email": "marco@email.com",
    "id": "682858293500328585",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Markus",
    "email": "markus@email.com",
    "id": "682858293500327563",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Michi",
    "email": "michi@email.com",
    "id": "682858293500328736",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Michu",
    "email": "secret",
    "id": "682858293500200528",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  },
  {
    "name": "Remo",
    "email": "remo@email.com",
    "id": "682858293500327564",
    "networks": [],
    "tags": [],
    "orgAccess": "full"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
