const path = require('path')

// GET /login/org_choose?eid=MHABjavd

// accept: application/json, text/plain, */*
// cookie: _session_id_for_n213=e268bf2eb0fed3da1bcc4fcd808f35ce
// maxredirects: 0
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 302

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Fri, 15 Jun 2018 07:50:18 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('x-frame-options', 'sameorigin')
  res.setHeader('location', 'https://n213.meraki.com/login_redirect/process_login?login_token=MOSsfh9egdOgMRmLQ_EQx2QbnE9212mscJdEAZmW3znUhOxHWfUI9-Ls5_-TqMylmWAYEmPBWVEIXR4pGgM3UxddY4KRj2nby9CJwZFa_b1QLPzz6PrGUZbXWJiQYh9f7QCbgv63B7t4KiWAffpcjyUB1G3V3YPNBGuRh4i1oHh3uHsk6ELNsIgKce7qsSzlj0KlDiZOmIXOUTXWnITfmuyXqqpERjKKCSFR40Prvpr3Bi5CY4giDuSBed416ii_GcS7k0upb68_FdiEbyUCK3xoH-tR-X2v-Qaf99wbuSQfZaa8_IlFzVCMfGFss9KsWgqJEDA9N12V1J9a84zyalIcsYaPlQ1YJvmhSwjnHkLiBB0WxzMCpq_dKTOUo7hoRaiKpgX6b5Jvw3eoGVecw_6UlWFZuukinrelILX3ilpUo9XlEnwQW_BI7lnzS98bo_pcN3yWsuFB2bSB-7gey2VmSXJ8sIYfHx0gZk0Nw7kImEC5dPaF7DkAbhuJFBD9-8Q1ltFxYoQuM0n5kAKY3yVRqJGothAGiXhLbljqeqX6Kfck6VVKHr3ZmaQpcRQf9STq-8mBBV2q5VmpfFLjaLtIP3glP5ABqbuB-FzIsZ76x8VntxWN7oYfppi7b02Bjp08yYLMy_ws97x75FomAel8Qih6B3gEyH-GvqvqodKwmJcnV1rR297KwT2h7HzXOYBSIKtcyBjk36Pkjor7ITUv_b7sWEgX3fc4Yg9tzOfSBnyw')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('cache-control', 'no-cache, private')
  res.setHeader('set-cookie', ['dash_auth=MGk9QkPJ57g9QLRv92.t7Jnh0jVzUaEMfLF7xmv0z9xqLeN0JHHfm6tU73zihzjun8DsHZcwD4MLgWDLtJCeTuzhRRRKx0_NjgYm3DoH2b8I7oHgngGWsjGe32OZOc9vm1_mh0u9ynSXQJ6YIml5w2MJjRlyLl2VZloM0g7qbyIFZHnMzIwcF_W_KhYABVUy-zNZb0jMXrqIitY5LubkzfFKUZoc8LR2e8KksatNfW73XfsFinr2QPbKyemeRj0ujEMyD4KHCZdXthe_x9YQ8xgqh-9X4maLFEAFpiWIEWKiAUG1HEqNzmf7O0ESi-W3qlNFp3NDrEExhXOYPJocGeYhBJutg.kV0JOYQNSlkCpGqSZdUyjg; domain=meraki.com; path=/; secure; HttpOnly'])
  res.setHeader('x-request-id', 'd63c3f0f2248e574ba55530f33c90579')
  res.setHeader('x-runtime', '0.122330')
  res.setHeader('x-rack-cache', 'miss')
  res.setHeader('strict-transport-security', 'max-age=15552000; includeSubDomains')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`<html><body>You are being <a href="https://n213.meraki.com/login_redirect/process_login?login_token=MOSsfh9egdOgMRmLQ_EQx2QbnE9212mscJdEAZmW3znUhOxHWfUI9-Ls5_-TqMylmWAYEmPBWVEIXR4pGgM3UxddY4KRj2nby9CJwZFa_b1QLPzz6PrGUZbXWJiQYh9f7QCbgv63B7t4KiWAffpcjyUB1G3V3YPNBGuRh4i1oHh3uHsk6ELNsIgKce7qsSzlj0KlDiZOmIXOUTXWnITfmuyXqqpERjKKCSFR40Prvpr3Bi5CY4giDuSBed416ii_GcS7k0upb68_FdiEbyUCK3xoH-tR-X2v-Qaf99wbuSQfZaa8_IlFzVCMfGFss9KsWgqJEDA9N12V1J9a84zyalIcsYaPlQ1YJvmhSwjnHkLiBB0WxzMCpq_dKTOUo7hoRaiKpgX6b5Jvw3eoGVecw_6UlWFZuukinrelILX3ilpUo9XlEnwQW_BI7lnzS98bo_pcN3yWsuFB2bSB-7gey2VmSXJ8sIYfHx0gZk0Nw7kImEC5dPaF7DkAbhuJFBD9-8Q1ltFxYoQuM0n5kAKY3yVRqJGothAGiXhLbljqeqX6Kfck6VVKHr3ZmaQpcRQf9STq-8mBBV2q5VmpfFLjaLtIP3glP5ABqbuB-FzIsZ76x8VntxWN7oYfppi7b02Bjp08yYLMy_ws97x75FomAel8Qih6B3gEyH-GvqvqodKwmJcnV1rR297KwT2h7HzXOYBSIKtcyBjk36Pkjor7ITUv_b7sWEgX3fc4Yg9tzOfSBnyw">redirected</a>.</body></html>`, 'utf-8'))
  res.end()

  return __filename
}
