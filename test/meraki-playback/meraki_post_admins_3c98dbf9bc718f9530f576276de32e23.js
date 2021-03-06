const path = require('path')

// POST /api/v0/organizations/730666/admins

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// {"email":"john.doe3@example.com","name":"John Doe","orgAccess":"none","tags":[{"tag":"west","access":"read-only"}],"networks":[]}

module.exports = function (req, res) {
  res.statusCode = 201

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:58:08 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'ec4b224fdf0ef0d93403ccd049354f3f')
  res.setHeader('x-runtime', '0.547186')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "id": "682858293500329627",
  "name": "John Doe",
  "email": "john.doe3@example.com",
  "orgAccess": "none",
  "networks": [],
  "tags": [
    {
      "tag": "west",
      "access": "read-only"
    }
  ]
}`, 'utf-8'))
  res.end()

  return __filename
}
