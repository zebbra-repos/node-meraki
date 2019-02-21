const path = require('path')

// POST /login/login

// accept: application/json,text/html
// content-type: application/x-www-form-urlencoded
// maxredirects: 5
// cookie:
// x-requested-with: XMLHTTPRequest
// x-csrf-token: asdf
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// email=test%40email.com&password=MY_SUPER_SECURE_PASSWORD

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Wed, 20 Feb 2019 10:52:58 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('x-robots-tag', 'none')
  res.setHeader('content-security-policy', 'default-src \'self\' data: https://*.typekit.net https://*.typekit.com https://csi.gstatic.com https://www.google.com https://captcha.guard.qcloud.com https://captcha.gtimg.com;  style-src \'self\' \'unsafe-inline\' https://use.typekit.com https://captcha.gtimg.com;  script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://use.typekit.com/ https://maps.googleapis.com https://www.google.com https://www.gstatic.com https://captcha.guard.qcloud.com https://captcha.gtimg.com; report-uri https://merakilogindev.report-uri.io/r/default/csp/enforce')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('etag', '"309eb44a0cf755cf5ae8c4cd2e244324"')
  res.setHeader('cache-control', 'max-age=0, private, must-revalidate')
  res.setHeader('set-cookie', ['_session_id_for_n213=a18280df5245671432f32ffea303464e; path=/; secure; HttpOnly'])
  res.setHeader('x-request-id', '6a9bd42ef2b992db50d0510aef007182')
  res.setHeader('x-runtime', '0.698192')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
    "mode": "org_choose",
    "orgs": [
      {
        "name": "api del",
        "eid": "bD9YGcvd",
        "id": "682858293500054466"
      },
      {
        "name": "Test Mathias",
        "eid": "khoMedvd",
        "id": "682858293500054457"
      },
      {
        "name": "Test Michu",
        "eid": "WTrhDcvd",
        "id": "682858293500054455"
      }
    ]
  }`, 'utf-8'))
  res.end()

  return __filename
}
