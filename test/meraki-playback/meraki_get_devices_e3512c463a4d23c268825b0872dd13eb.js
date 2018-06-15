const path = require('path')

// GET /api/v0/networks/L_682858293500060703/devices

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:59:30 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', 'c5e0f82f1bfa0ed7ed3c77b7d52c6f74')
  res.setHeader('x-runtime', '0.364408')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "wan1Ip": null,
    "wan2Ip": null,
    "serial": "Q2MN-Y8CM-HLVE",
    "mac": "e0:55:3d:8c:4d:70",
    "lat": "37.4180951010362",
    "lng": "-122.098531723022",
    "address": "",
    "name": null,
    "model": "MX64W",
    "networkId": "L_682858293500060703"
  },
  {
    "lanIp": "192.168.10.151",
    "serial": "Q2RD-7FCL-N727",
    "mac": "0c:8d:db:da:4e:e5",
    "lat": "37.4180951010362",
    "lng": "-122.098531723022",
    "address": "",
    "tags": " recently-added ",
    "name": "Desk_DevOps",
    "model": "MR30H",
    "networkId": "L_682858293500060703"
  },
  {
    "lanIp": "192.168.10.244",
    "serial": "Q2PD-54QC-WD2T",
    "mac": "e0:cb:bc:32:07:e5",
    "lat": "46.9466069975999",
    "lng": 7.4571231007576,
    "address": "",
    "tags": " recently-added ",
    "name": "AP Meeting Raum",
    "model": "MR33",
    "networkId": "L_682858293500060703"
  },
  {
    "lanIp": "192.168.10.102",
    "serial": "Q2RX-3GPP-FYPZ",
    "mac": "0c:8d:db:75:8c:80",
    "lat": "37.4180951010362",
    "lng": "-122.098531723022",
    "address": "",
    "name": "Stack - Primary Switch",
    "model": "MS210-24",
    "networkId": "L_682858293500060703"
  },
  {
    "lanIp": "192.168.10.243",
    "serial": "Q2RX-2UJ6-S925",
    "mac": "0c:8d:db:75:5e:80",
    "lat": "37.4180951010362",
    "lng": "-122.098531723022",
    "address": "",
    "name": "Stack - Secondary Switch",
    "model": "MS210-24",
    "networkId": "L_682858293500060703"
  },
  {
    "lanIp": "192.168.10.125",
    "serial": "Q2EX-VW8G-TKRP",
    "mac": "0c:8d:db:0f:73:74",
    "lat": 46.94797,
    "lng": 7.44745,
    "address": "Bern",
    "tags": " recently-added ",
    "name": "Meeting-Room",
    "model": "MS120-24P",
    "networkId": "L_682858293500060703"
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
