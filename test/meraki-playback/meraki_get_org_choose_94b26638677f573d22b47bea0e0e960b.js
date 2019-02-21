const path = require('path')

// GET /login/org_choose?eid=bD9YGcvd

// accept: application/json,text/html
// maxredirects: 5
// cookie: _session_id_for_n213=9b02fde538b43ed98630db5b0ee742d4
// x-requested-with: XMLHTTPRequest
// x-csrf-token: asdf
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Wed, 20 Feb 2019 10:35:28 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-robots-tag', 'none')
  res.setHeader('content-security-policy', 'default-src \'self\' data: https://*.typekit.net https://*.typekit.com https://csi.gstatic.com https://www.google.com https://captcha.guard.qcloud.com https://captcha.gtimg.com;  style-src \'self\' \'unsafe-inline\' https://use.typekit.com https://captcha.gtimg.com;  script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://use.typekit.com/ https://maps.googleapis.com https://www.google.com https://www.gstatic.com https://captcha.guard.qcloud.com https://captcha.gtimg.com; report-uri https://merakilogindev.report-uri.io/r/default/csp/enforce')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('etag', '"e2ab98b880b5adb1c8dca64db197edc4"')
  res.setHeader('cache-control', 'max-age=0, private, must-revalidate')
  res.setHeader('set-cookie', ['dash_auth=MGMDVfZT4VHimmRRTr.Tl4Y4DJhYCRLCWAiByKSUjVvsH9_RpmrNc-fDRIqyHPTZOj80gzFSUEdp1Yts870Z8Zf1sCeJ2b_JcwMRh55ft659R1dAjmWnqBLnxog36HYHXk9DkMR3oD2mjezcZHt7qWmX-yTY-Z3VC8ybqy8Qr6bXD-vf3QugagDqgKfYKxnZEMsYghqQHbcBmMnyVyE2dqOTiJu99KcwzifjvQ3E8RbXlLp2sVWZ00vNkpzZYKV1ByGqYbKh2h1zU3zYfPU-gd9jPydqG05S8X9ColahWK9IPB8sAaAW8jhThF8T9ET1cTW4enrvmslXwn_fPjwVwHlBFeGDQ.WRW0UebP8BU0oZ_u3cTs4A; domain=meraki.com; path=/; secure; HttpOnly'])
  res.setHeader('x-request-id', 'ce8ef7d299327ef19a2b7681984eeb06')
  res.setHeader('x-runtime', '1.680836')
  res.setHeader('x-newrelic-app-data', 'PxQCUVBaDhADVlhVBgEPUEYdFHANCBcQXw5UB0oXWVNdBF4EHhdaBgFZGBcPB11cQzsLEVhfFUpUHwYDU15aVQJVC1oJDAILBFcPVAZNAVNdGA9RUVQOBAFRU1UPBwVTSBwHH0AEWlQAVAwGDA9XUQAGC1AAQ24=')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "success": true,
  "org_eid": "bD9YGcvd",
  "user": {
    "id": "682858293500424137",
    "name": "Mathias Scherer",
    "email": "mathias.scherer@email.com",
    "is_admin": false,
    "is_write_admin": false,
    "is_org_admin": true,
    "is_org_write_admin": true,
    "is_org_enterprise_admin": false,
    "is_sales_demo_admin": false,
    "admin_permissions_hash": {},
    "administered_networks": [],
    "path": "https://n213.meraki.com/"
  },
  "orgs": [
    {
      "id": "682858293500054466",
      "eid": "bD9YGcvd",
      "uid": "682858293500424137",
      "org_admin_type": "write",
      "name": "api del",
      "node_groups": {},
      "num_networks": 0,
      "locales": {},
      "shard_id": 213,
      "licensed_product_edition_name": "enterprise",
      "license_expires_on": 0,
      "block_meraki_admins": false,
      "org": {
        "reported_api_level": 4,
        "resolved_api_level": 3,
        "id": "682858293500054466",
        "eid": "bD9YGcvd"
      },
      "api_level": 4,
      "support_password": "6622"
    },
    {
      "id": "682858293500054457",
      "eid": "khoMedvd",
      "uid": "682858293500423914",
      "org_admin_type": "write",
      "name": "Test Mathias",
      "node_groups": {},
      "num_networks": 0,
      "locales": {},
      "shard_id": 213,
      "licensed_product_edition_name": "enterprise",
      "license_expires_on": 0,
      "block_meraki_admins": false,
      "org": {
        "reported_api_level": 4,
        "resolved_api_level": 3,
        "id": "682858293500054457",
        "eid": "khoMedvd"
      },
      "api_level": 4,
      "support_password": "6622"
    },
    {
      "id": "682858293500054455",
      "eid": "WTrhDcvd",
      "uid": "682858293500423905",
      "org_admin_type": "write",
      "name": "Test Michu",
      "node_groups": {},
      "num_networks": 3,
      "locales": {},
      "shard_id": 213,
      "licensed_product_edition_name": "enterprise",
      "license_expires_on": 0,
      "block_meraki_admins": false,
      "org": {
        "reported_api_level": 4,
        "resolved_api_level": 3,
        "id": "682858293500054455",
        "eid": "WTrhDcvd"
      },
      "api_level": 4,
      "support_password": "6622"
    }
  ],
  "mobile_auth_token": "MGMDVfZT4VHimmRRTr.Tl4Y4DJhYCRLCWAiByKSUjVvsH9_RpmrNc-fDRIqyHPTZOj80gzFSUEdp1Yts870Z8Zf1sCeJ2b_JcwMRh55ft659R1dAjmWnqBLnxog36HYHXk9DkMR3oD2mjezcZHt7qWmX-yTY-Z3VC8ybqy8Qr6bXD-vf3QugagDqgKfYKxnZEMsYghqQHbcBmMnyVyE2dqOTiJu99KcwzifjvQ3E8RbXlLp2sVWZ00vNkpzZYKV1ByGqYbKh2h1zU3zYfPU-gd9jPydqG05S8X9ColahWK9IPB8sAaAW8jhThF8T9ET1cTW4enrvmslXwn_fPjwVwHlBFeGDQ.WRW0UebP8BU0oZ_u3cTs4A"
}`, 'utf-8'))
  res.end()

  return __filename
}
