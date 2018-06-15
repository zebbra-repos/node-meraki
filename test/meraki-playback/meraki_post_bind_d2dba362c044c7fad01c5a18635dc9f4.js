const path = require('path')

// POST /api/v0/networks/N_682858293500087468/bind

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// {"configTemplateId":"L_682858293500060770"}

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:00 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '0875596132366389f20f39a251084c62')
  res.setHeader('x-runtime', '0.544739')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(` `, 'utf-8'))
  res.end()

  return __filename
}
