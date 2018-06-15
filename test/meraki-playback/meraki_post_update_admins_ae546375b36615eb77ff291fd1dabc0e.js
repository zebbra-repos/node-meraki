const path = require('path')

// POST /o/MHABjavd/manage/organization/update_admins

// accept: application/json, text/plain, */*
// cookie: dash_auth=MGbUegUXsEyUUoGsg7.tSbYRM5EqcwuHOJ0yz4cmZOHmGMbXHN2CA2anf8eGvajWoFYW3WhoCY8px3QzjROJVcrKyLUViuNEkI9AoDeWk7cJIHt9x56Csh37EGBdZiKzqhBEvWX1Xji_UKm9e-vrPeWqdyTO932Yv04StPbaoZeYEgrXjFRlxoC1yczg9xtJqSRP5XYYVkKroWYoJBDnrpl2n2CkS0Y6nYCHc2clrYDS533Jz329NCtfygrJ9uKUUt8gW2IQ1vPjS8iv8p-e1cOGRJMxQnqQSZfqR2qRyc3eFN2yyC30Pc5PYD4IxBX64AvDsXMWxrdVw.BjnqLik7g3HysVCqUV1_Gw; _session_id_for_n213=7747c04349b68aeb025492bc48d676cd; upgraded_dashboard_mode=
// content-type: application/x-www-form-urlencoded
// x-csrf-token: 8b4QwnUXG2u4m7fq2AOz9UxX3VbD0nB5vNHKAgO16/Q=
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

// Request Body:
// deleted_admins=%5B%7B%22name%22%3A%22Hannes%22%2C%22email%22%3A%22hannes.wuethrich%40zebbra.ch%22%2C%22encrypted_id%22%3A%22dA-Fndvd%22%2C%22id%22%3A%22hannes_wuethrich_zebbra_ch%22%2C%22two_factor_auth_enabled%22%3Afalse%2C%22pw_strength%22%3A%22%7B%5C%22default%5C%22%3A3%7D%22%2C%22locked_out%22%3A%22v%22%2C%22privileges%22%3A%7B%22organization%22%3A%22Full%22%2C%22networks%22%3A%5B%5D%2C%22tags%22%3A%5B%5D%7D%2C%22last_active%22%3A1528898238%7D%2C%7B%22name%22%3A%22Marco%22%2C%22email%22%3A%22marco.stieger%40zebbra.ch%22%2C%22encrypted_id%22%3A%222v-hAdvd%22%2C%22id%22%3A%22marco_stieger_zebbra_ch%22%2C%22two_factor_auth_enabled%22%3Afalse%2C%22pw_strength%22%3A%22%7B%5C%22default%5C%22%3A4%7D%22%2C%22locked_out%22%3Anull%2C%22privileges%22%3A%7B%22organization%22%3A%22Full%22%2C%22networks%22%3A%5B%5D%2C%22tags%22%3A%5B%5D%7D%2C%22last_active%22%3A1528965553%7D%2C%7B%22name%22%3A%22Markus%20Roth%22%2C%22email%22%3A%22markus.roth%40zebbra.ch%22%2C%22encrypted_id%22%3A%22OGzH_dvd%22%2C%22id%22%3A%22markus_roth_zebbra_ch%22%2C%22two_factor_auth_enabled%22%3Afalse%2C%22pw_strength%22%3A%22%7B%5C%22default%5C%22%3A3%7D%22%2C%22locked_out%22%3Anull%2C%22privileges%22%3A%7B%22organization%22%3A%22Full%22%2C%22networks%22%3A%5B%5D%2C%22tags%22%3A%5B%5D%7D%2C%22last_active%22%3A1528983191%7D%2C%7B%22name%22%3A%22Michi%22%2C%22email%22%3A%22michael.aschwanden%40zebbra.ch%22%2C%22encrypted_id%22%3A%22xDXVObvd%22%2C%22id%22%3A%22michael_aschwanden_zebbra_ch%22%2C%22two_factor_auth_enabled%22%3Afalse%2C%22pw_strength%22%3A%22%7B%5C%22default%5C%22%3A4%7D%22%2C%22locked_out%22%3Anull%2C%22privileges%22%3A%7B%22organization%22%3A%22Full%22%2C%22networks%22%3A%5B%5D%2C%22tags%22%3A%5B%5D%7D%2C%22last_active%22%3A1528986046%7D%2C%7B%22name%22%3A%22Remo%20Ryter%22%2C%22email%22%3A%22remo.ryter%40zebbra.ch%22%2C%22encrypted_id%22%3A%22-i-mHavd%22%2C%22id%22%3A%22remo_ryter_zebbra_ch%22%2C%22two_factor_auth_enabled%22%3Afalse%2C%22pw_strength%22%3A%22%7B%5C%22default%5C%22%3A3%7D%22%2C%22locked_out%22%3Anull%2C%22privileges%22%3A%7B%22organization%22%3A%22Full%22%2C%22networks%22%3A%5B%5D%2C%22tags%22%3A%5B%5D%7D%2C%22last_active%22%3A1526648758%7D%5D

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:24 GMT')
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('etag', '1529049021.9696617')
  res.setHeader('content-security-policy', 'default-src \'self\';  style-src \'self\' \'unsafe-inline\' https://*.meraki.com https://fonts.googleapis.com https://use.typekit.com https://maxcdn.bootstrapcdn.com https://captcha.gtimg.com;  img-src \'self\' http://*.mzstatic.com http://*.phobos.apple.com http://*.cse.apple.com https: data: blob: https://api.map.baidu.com;  script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://app.pendo.io https://d3accju1t3mngt.cloudfront.net https://maps.googleapis.com https://cdn.inspectlet.com https://www.fullstory.com https://*.google-analytics.com https://www.youtube.com https://s.ytimg.com https://*.google.com https://use.typekit.com https://js-agent.newrelic.com https://bam.nr-data.net https://*.meraki.com https://global.localizecdn.com blob: data: https://recorder-assets.getjaco.com https://www.gstatic.com/recaptcha/ https://*.baidu.com https://*.bdstatic.com https://captcha.guard.qcloud.com https://captcha.gtimg.com https://cdn.appdynamics.com;  connect-src \'self\' http://teamcity.ikarem.io https://*.ikarem.io https://hn.inspectlet.com https://*.fullstory.com https://maps.googleapis.com https://*.amazonaws.com https://translate.googleapis.com https://localizejs.com https://global.localizecdn.com wss://ws.inspectlet.com https://ssl.google-analytics.com https://www.google-analytics.com https://*.devices.meraki.direct wss://*.meraki.com wss://*.meraki.com:* ws://localhost:17523 https://*.meraki.com https://rapi.getjaco.com https://recorder-assets.getjaco.com https://na-g.marketo.com https://api.telnyx.com https://col.eum-appdynamics.com;  font-src \'self\' https: null data:;  child-src https://*.meraki.com blob:;  frame-src \'self\' https://*.meraki.com https://*.ikarem.io https://www.youtube.com https://global.localizecdn.com https://play.google.com https://www.google.com/recaptcha/ https://*.network-auth.com https://captcha.guard.qcloud.com https://captcha.gtimg.com;  object-src https://*.meraki.com https://*.akamaihd.net;  media-src https://*.amazonaws.com https://*.meraki.com https://*.meraki.direct https://ssl.gstatic.com blob: data:;  frame-ancestors \'self\' https://localizejs.com http://localizejs.com https://*.meraki.com; report-uri https://therealmerakidashboard.report-uri.io/r/default/csp/enforce')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('set-cookie', ['dash_auth=MGR6H6QmbECTzXahzM.WeVs6hGzMxnotFl3O2OhoZsz33YPFtaOfQnlZxfc_H5Esj11dGc6MnQDDS9P3JDcthO7ss2-85oXDeBCoRe4MO-OlUbyUjXF518DUDwSyyU87twpRMPEhVmNOVyDsInwvOZQp2njezh5xHLPTou2tfGpd2eC3TVLL1vlp2H8K6u0LDCagr9R41QZd70F2-zHZ9CGqgSy62-VmIkgnjHnZ3DNmPyJ9WQoh0cqu13OO-DT3rSGKu-xdcXHenpTChVJpgapKBNL0PtaLjP4i16z7FTQBvVIEsNbiUjs_B4kzsDnDt2nPZNkHqJyw0350npOGI5Uc76I3Q.I9_Kly6lhYeqi-owptpntg; domain=meraki.com; path=/; secure; HttpOnly', 'upgraded_dashboard_mode=; domain=meraki.com; path=/; expires=Thu, 01-Jan-1970 00:00:00 GMT'])
  res.setHeader('x-request-id', '06bdea2de1b1d1a52b3218dc79a04249')
  res.setHeader('x-runtime', '2.283521')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
  "saml": [
    {
      "id": "ADMIN",
      "role": "ADMIN",
      "privileges": {
        "organization": "Full",
        "networks": [],
        "tags": []
      }
    },
    {
      "id": "READ_ONLY",
      "role": "READ_ONLY",
      "privileges": {
        "organization": "Read",
        "networks": [],
        "tags": []
      }
    }
  ],
  "standard": [
    {
      "name": "Michu Bärtschi",
      "email": "secret",
      "encrypted_id": "dOKHobvd",
      "id": "michael_baertschi_zebbra_ch",
      "two_factor_auth_enabled": false,
      "pw_strength": "{\\"default\\":4}",
      "locked_out": null,
      "privileges": {
        "organization": "Full",
        "networks": [],
        "tags": []
      },
      "last_active": 1529049022
    }
  ]
}`, 'utf-8'))
  res.end()

  return __filename
}
