const path = require('path')

// GET /api/v0/networks/L_682858293500060703/ssids

// accept: application/json, text/plain, */*
// content-type: application/json
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 08:04:25 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('x-request-id', '2c4fd4e3ef5ad574fa215b266ba3c4f8')
  res.setHeader('x-runtime', '0.292536')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`[
  {
    "number": 0,
    "name": "zebbra_guest",
    "enabled": true,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "psk",
    "psk": "welcome2zebbra!",
    "encryptionMode": "wpa",
    "wpaEncryptionMode": "WPA2 only",
    "ipAssignmentMode": "Bridge mode",
    "useVlanTagging": false,
    "minBitrate": 11,
    "bandSelection": "Dual band operation with Band Steering",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 1,
    "name": "zebbra_SunAki",
    "enabled": true,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "psk",
    "psk": "uxhpmaF&]4bg",
    "encryptionMode": "wpa",
    "wpaEncryptionMode": "WPA2 only",
    "ipAssignmentMode": "Layer 3 roaming",
    "useVlanTagging": false,
    "minBitrate": 11,
    "bandSelection": "Dual band operation with Band Steering",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 2,
    "name": "SunAki is the Best",
    "enabled": true,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "psk",
    "psk": "HokusPokus22",
    "encryptionMode": "wpa",
    "wpaEncryptionMode": "WPA2 only",
    "ipAssignmentMode": "Layer 3 roaming",
    "useVlanTagging": true,
    "defaultVlanId": 1,
    "minBitrate": 11,
    "bandSelection": "Dual band operation with Band Steering",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 3,
    "name": "zebbra_splash",
    "enabled": true,
    "splashPage": "Click-through splash page",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "walledGardenEnabled": true,
    "walledGardenRanges": "138.201.61.209/32",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 4,
    "name": "Unconfigured SSID 5",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 5,
    "name": "Unconfigured SSID 6",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 6,
    "name": "Unconfigured SSID 7",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 7,
    "name": "Unconfigured SSID 8",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 8,
    "name": "Unconfigured SSID 9",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 9,
    "name": "Unconfigured SSID 10",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 10,
    "name": "Unconfigured SSID 11",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 11,
    "name": "Unconfigured SSID 12",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 12,
    "name": "Unconfigured SSID 13",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 13,
    "name": "Unconfigured SSID 14",
    "enabled": false,
    "splashPage": "None",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  },
  {
    "number": 14,
    "name": "zebbra welcomes guests",
    "enabled": false,
    "splashPage": "Click-through splash page",
    "ssidAdminAccessible": false,
    "authMode": "open",
    "ipAssignmentMode": "NAT mode",
    "walledGardenEnabled": true,
    "walledGardenRanges": "104.198.14.52/32\\n136.243.149.200/32",
    "minBitrate": 11,
    "bandSelection": "Dual band operation",
    "perClientBandwidthLimitUp": 0,
    "perClientBandwidthLimitDown": 0
  }
]`, 'utf-8'))
  res.end()

  return __filename
}
