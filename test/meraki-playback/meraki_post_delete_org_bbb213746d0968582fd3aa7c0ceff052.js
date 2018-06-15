const path = require('path')

// POST /o/MHABjavd/manage/organization/delete_org

// accept: application/json, text/plain, */*
// cookie: dash_auth=MGbUegUXsEyUUoGsg7.tSbYRM5EqcwuHOJ0yz4cmZOHmGMbXHN2CA2anf8eGvajWoFYW3WhoCY8px3QzjROJVcrKyLUViuNEkI9AoDeWk7cJIHt9x56Csh37EGBdZiKzqhBEvWX1Xji_UKm9e-vrPeWqdyTO932Yv04StPbaoZeYEgrXjFRlxoC1yczg9xtJqSRP5XYYVkKroWYoJBDnrpl2n2CkS0Y6nYCHc2clrYDS533Jz329NCtfygrJ9uKUUt8gW2IQ1vPjS8iv8p-e1cOGRJMxQnqQSZfqR2qRyc3eFN2yyC30Pc5PYD4IxBX64AvDsXMWxrdVw.BjnqLik7g3HysVCqUV1_Gw; _session_id_for_n213=7747c04349b68aeb025492bc48d676cd; upgraded_dashboard_mode=
// content-type: application/x-www-form-urlencoded
// x-csrf-token: 8b4QwnUXG2u4m7fq2AOz9UxX3VbD0nB5vNHKAgO16/Q=
// x-requested-with: XMLHttpRequest
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:40 GMT')
  res.setHeader('content-type', 'text/javascript; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('vary', 'Accept-Encoding')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('etag', '1529049024.2271')
  res.setHeader('content-security-policy', 'default-src \'self\';  style-src \'self\' \'unsafe-inline\' https://*.meraki.com https://fonts.googleapis.com https://use.typekit.com https://maxcdn.bootstrapcdn.com https://captcha.gtimg.com;  img-src \'self\' http://*.mzstatic.com http://*.phobos.apple.com http://*.cse.apple.com https: data: blob: https://api.map.baidu.com;  script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://app.pendo.io https://d3accju1t3mngt.cloudfront.net https://maps.googleapis.com https://cdn.inspectlet.com https://www.fullstory.com https://*.google-analytics.com https://www.youtube.com https://s.ytimg.com https://*.google.com https://use.typekit.com https://js-agent.newrelic.com https://bam.nr-data.net https://*.meraki.com https://global.localizecdn.com blob: data: https://recorder-assets.getjaco.com https://www.gstatic.com/recaptcha/ https://*.baidu.com https://*.bdstatic.com https://captcha.guard.qcloud.com https://captcha.gtimg.com https://cdn.appdynamics.com;  connect-src \'self\' http://teamcity.ikarem.io https://*.ikarem.io https://hn.inspectlet.com https://*.fullstory.com https://maps.googleapis.com https://*.amazonaws.com https://translate.googleapis.com https://localizejs.com https://global.localizecdn.com wss://ws.inspectlet.com https://ssl.google-analytics.com https://www.google-analytics.com https://*.devices.meraki.direct wss://*.meraki.com wss://*.meraki.com:* ws://localhost:17523 https://*.meraki.com https://rapi.getjaco.com https://recorder-assets.getjaco.com https://na-g.marketo.com https://api.telnyx.com https://col.eum-appdynamics.com;  font-src \'self\' https: null data:;  child-src https://*.meraki.com blob:;  frame-src \'self\' https://*.meraki.com https://*.ikarem.io https://www.youtube.com https://global.localizecdn.com https://play.google.com https://www.google.com/recaptcha/ https://*.network-auth.com https://captcha.guard.qcloud.com https://captcha.gtimg.com;  object-src https://*.meraki.com https://*.akamaihd.net;  media-src https://*.amazonaws.com https://*.meraki.com https://*.meraki.direct https://ssl.gstatic.com blob: data:;  frame-ancestors \'self\' https://localizejs.com http://localizejs.com https://*.meraki.com; report-uri https://therealmerakidashboard.report-uri.io/r/default/csp/enforce')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('set-cookie', ['dash_auth=MG523uc9Cx6293G8p8.NeXpZv4w-e-Q5WjVEpsjW5MlFWCEzysN4OEhYBtBqSwQcwxpRfDR_JfLDx2PvurtCNBq5-ccz6K2lQDevJd_HNWQRjsHPwAECOwa_VvaIE6qFFYft8T2-MsycgeQt_e8BVwF6bEkXrOpVG3CZvNeUk_pGP_ueHvNp4eHlMNvG_wgBGPtcxoSQ2soDKVWiR25nDQHz1GOr4GDzrf0dePoodKcDeC8gL2QM_1-34YY0g-pNYZXN_Ub-qqMNtZF4j5TOP8xh5pny3ABDgfIin_DrBUj4LF3UzQvLGzNWoxnSQauIC-caNw5cZLIOg.E7HtjDdBtY1bZLQ-odCcCA; domain=meraki.com; path=/; secure; HttpOnly', 'upgraded_dashboard_mode=; domain=meraki.com; path=/; expires=Thu, 01-Jan-1970 00:00:00 GMT'])
  res.setHeader('x-request-id', 'edbb838a6d9580e94df6af88d3712cb2')
  res.setHeader('x-runtime', '15.949171')
  res.setHeader('x-rack-cache', 'invalidate, pass')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`window.location = '/manage/dashboard/';`, 'utf-8'))
  res.end()

  return __filename
}
