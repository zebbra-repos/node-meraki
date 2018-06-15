const path = require('path')

// GET /zebbra-Internal-/n/8yydWdvd/manage/dashboard

// accept: application/json, text/plain, */*
// cookie: dash_auth=MGzZDjA0E-wAhPNsSN.fgaYM1x_q5Xg-RQQlHRFEfg1i6HZWKbQvI63aBXs9aN25cBdqb2yOf0vFUoD2HW3Zz1hNiX3VlhzD-njoVUlhq_1zsfqnWUEADHaQ9xhtiKys2h3uNPLQ16Gd0iNhmSon3JzVqV6I4d5nEuNdzNDPinWIqOSqfGmVQ48C93pnWp90G7KFrGGLq_u1duMLAUQuCnlH0Pc1l-xru8Gkm5m-r6zPww09GgsCMC6Kgr0Hl9d-gsjpXpR5kRLYKCwdZJRHe0TJUy3-TZB7Sn9nJxDOSma9kQNHmuneoDj11Yg6wUDJx034xtAzsGeiQ.lTstSZ7RXaWcePM-GAxBQQ; _session_id_for_n213=f1dfd036419c5ec837a6d4a607ad86cb; upgraded_dashboard_mode=
// maxredirects: 0
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 302

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:19 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('cache-control', 'must-revalidate, no-cache, no-store, private, max-age=0')
  res.setHeader('pragma', 'no-cache')
  res.setHeader('expires', 'Fri, 01 Jan 1990 00:00:00 GMT')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('etag', '1529049019.0286362')
  res.setHeader('location', 'https://n213.meraki.com/zebbra-Internal-/n/8yydWdvd/manage/usage/list')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('set-cookie', ['dash_auth=MGsIzMmMiH098BYsWW.EISy3SVEXN26GiTJghRFfL8_7peVCk-fkXfN-Tc1FSXyc5hN1yNFhpYn5DmnM7B4Bt1xpPmA4xa-ilGvaeb5nVG1s_cYP2q_4FWBV_ahfHw0QQgS-7bvyhCwPh7b-CrForA6ajiHdgvthU5MkqXCBK-JiwfxrnWpEXLyUZd5SwGMInLTSB8mzsGAb7d4jhx-zxaLRMlRRCuf7C9rUC-eMQ4_xBjeFak3dmHgA6phXWPcmIMDwJvDsn8F_17PraWcviSO1wDKSrBB8idI-9xLvRntroB9hl3Q9CZVgR0zPbihZITCB4HMmClElA.KSDJex-ruLxb-J203NRe5w; domain=meraki.com; path=/; secure; HttpOnly', 'upgraded_dashboard_mode=; domain=meraki.com; path=/; expires=Thu, 01-Jan-1970 00:00:00 GMT'])
  res.setHeader('x-request-id', 'f02e91bbd6c132c2be0e18704c1617e7')
  res.setHeader('x-runtime', '0.585237')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`<html><body>You are being <a href="https://n213.meraki.com/zebbra-Internal-/n/8yydWdvd/manage/usage/list">redirected</a>.</body></html>`, 'utf-8'))
  res.end()

  return __filename
}
