const path = require('path')

// GET /zebbra-Internal-/n/8yydWdvd/manage/usage/list

// accept: application/json, text/plain, */*
// cookie: dash_auth=MGsIzMmMiH098BYsWW.EISy3SVEXN26GiTJghRFfL8_7peVCk-fkXfN-Tc1FSXyc5hN1yNFhpYn5DmnM7B4Bt1xpPmA4xa-ilGvaeb5nVG1s_cYP2q_4FWBV_ahfHw0QQgS-7bvyhCwPh7b-CrForA6ajiHdgvthU5MkqXCBK-JiwfxrnWpEXLyUZd5SwGMInLTSB8mzsGAb7d4jhx-zxaLRMlRRCuf7C9rUC-eMQ4_xBjeFak3dmHgA6phXWPcmIMDwJvDsn8F_17PraWcviSO1wDKSrBB8idI-9xLvRntroB9hl3Q9CZVgR0zPbihZITCB4HMmClElA.KSDJex-ruLxb-J203NRe5w; upgraded_dashboard_mode=
// maxredirects: 0
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:21 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('cache-control', 'must-revalidate, no-cache, no-store, private, max-age=0')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('etag', '1529049019.6778426')
  res.setHeader('content-security-policy', 'default-src \'self\';  style-src \'self\' \'unsafe-inline\' https://*.meraki.com https://fonts.googleapis.com https://use.typekit.com https://maxcdn.bootstrapcdn.com https://captcha.gtimg.com;  img-src \'self\' http://*.mzstatic.com http://*.phobos.apple.com http://*.cse.apple.com https: data: blob: https://api.map.baidu.com;  script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://app.pendo.io https://d3accju1t3mngt.cloudfront.net https://maps.googleapis.com https://cdn.inspectlet.com https://www.fullstory.com https://*.google-analytics.com https://www.youtube.com https://s.ytimg.com https://*.google.com https://use.typekit.com https://js-agent.newrelic.com https://bam.nr-data.net https://*.meraki.com https://global.localizecdn.com blob: data: https://recorder-assets.getjaco.com https://www.gstatic.com/recaptcha/ https://*.baidu.com https://*.bdstatic.com https://captcha.guard.qcloud.com https://captcha.gtimg.com https://cdn.appdynamics.com;  connect-src \'self\' http://teamcity.ikarem.io https://*.ikarem.io https://hn.inspectlet.com https://*.fullstory.com https://maps.googleapis.com https://*.amazonaws.com https://translate.googleapis.com https://localizejs.com https://global.localizecdn.com wss://ws.inspectlet.com https://ssl.google-analytics.com https://www.google-analytics.com https://*.devices.meraki.direct wss://*.meraki.com wss://*.meraki.com:* ws://localhost:17523 https://*.meraki.com https://rapi.getjaco.com https://recorder-assets.getjaco.com https://na-g.marketo.com https://api.telnyx.com https://col.eum-appdynamics.com;  font-src \'self\' https: null data:;  child-src https://*.meraki.com blob:;  frame-src \'self\' https://*.meraki.com https://*.ikarem.io https://www.youtube.com https://global.localizecdn.com https://play.google.com https://www.google.com/recaptcha/ https://*.network-auth.com https://captcha.guard.qcloud.com https://captcha.gtimg.com;  object-src https://*.meraki.com https://*.akamaihd.net;  media-src https://*.amazonaws.com https://*.meraki.com https://*.meraki.direct https://ssl.gstatic.com blob: data:;  frame-ancestors \'self\' https://localizejs.com http://localizejs.com https://*.meraki.com; report-uri https://therealmerakidashboard.report-uri.io/r/default/csp/enforce')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('set-cookie', ['dash_auth=MGbUegUXsEyUUoGsg7.tSbYRM5EqcwuHOJ0yz4cmZOHmGMbXHN2CA2anf8eGvajWoFYW3WhoCY8px3QzjROJVcrKyLUViuNEkI9AoDeWk7cJIHt9x56Csh37EGBdZiKzqhBEvWX1Xji_UKm9e-vrPeWqdyTO932Yv04StPbaoZeYEgrXjFRlxoC1yczg9xtJqSRP5XYYVkKroWYoJBDnrpl2n2CkS0Y6nYCHc2clrYDS533Jz329NCtfygrJ9uKUUt8gW2IQ1vPjS8iv8p-e1cOGRJMxQnqQSZfqR2qRyc3eFN2yyC30Pc5PYD4IxBX64AvDsXMWxrdVw.BjnqLik7g3HysVCqUV1_Gw; domain=meraki.com; path=/; secure; HttpOnly', '_session_id_for_n213=7747c04349b68aeb025492bc48d676cd; path=/; secure; HttpOnly', 'upgraded_dashboard_mode=; domain=meraki.com; path=/; expires=Thu, 01-Jan-1970 00:00:00 GMT'])
  res.setHeader('x-request-id', 'b60d97873b69ba7dbe747f975da26066')
  res.setHeader('x-runtime', '1.443512')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`
    Mkiconf.authenticity_token = "8b4QwnUXG2u4m7fq2AOz9UxX3VbD0nB5vNHKAgO16/Q=";
`, 'utf-8'))
  res.end()

  return __filename
}
