const path = require('path')

// POST /login/login

// accept: application/json, text/plain, */*
// content-type: application/x-www-form-urlencoded
// maxredirects: 0
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// email=secret&password=secret

module.exports = function (req, res) {
  res.statusCode = 302

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:18 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('location', 'https://n213.meraki.com/login/org_list')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('set-cookie', ['_session_id_for_n213=e268bf2eb0fed3da1bcc4fcd808f35ce; path=/; secure; HttpOnly'])
  res.setHeader('x-request-id', '5f0d55039b2181f4d87f21b04ed88d6e')
  res.setHeader('x-runtime', '0.253103')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`<html><body>You are being <a href="https://n213.meraki.com/login/org_list">redirected</a>.</body></html>`, 'utf-8'))
  res.end()

  return __filename
}
