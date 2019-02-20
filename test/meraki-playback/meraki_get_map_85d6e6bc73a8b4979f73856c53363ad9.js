const path = require('path')

// GET /o/bD9YGcvd/manage/organization/map

// accept: application/json,text/html
// maxredirects: 0
// cookie: _session_id_for_n213=a18280df5245671432f32ffea303464e;dash_auth=MGMDVfZT4VHimmRRTr.Tl4Y4DJhYCRLCWAiByKSUjVvsH9_RpmrNc-fDRIqyHPTZOj80gzFSUEdp1Yts870Z8Zf1sCeJ2b_JcwMRh55ft659R1dAjmWnqBLnxog36HYHXk9DkMR3oD2mjezcZHt7qWmX-yTY-Z3VC8ybqy8Qr6bXD-vf3QugagDqgKfYKxnZEMsYghqQHbcBmMnyVyE2dqOTiJu99KcwzifjvQ3E8RbXlLp2sVWZ00vNkpzZYKV1ByGqYbKh2h1zU3zYfPU-gd9jPydqG05S8X9ColahWK9IPB8sAaAW8jhThF8T9ET1cTW4enrvmslXwn_fPjwVwHlBFeGDQ.WRW0UebP8BU0oZ_u3cTs4A
// x-requested-with: XMLHTTPRequest
// x-csrf-token: asdf
// user-agent: axios/0.18.0
// host: n213.meraki.com
// connection: close

module.exports = function (req, res) {
  res.statusCode = 200

  res.setHeader('server', 'nginx')
  res.setHeader('date', 'Wed, 20 Feb 2019 12:17:28 GMT')
  res.setHeader('content-type', 'text/html; charset=utf-8')
  res.setHeader('transfer-encoding', 'chunked')
  res.setHeader('connection', 'close')
  res.setHeader('x-ua-compatible', 'IE=Edge,chrome=1')
  res.setHeader('cache-control', 'no-cache')
  res.setHeader('x-request-id', 'a5f02faf4c5c05a9d97a06423beb86d5')
  res.setHeader('x-runtime', '0.054837')
  res.setHeader('x-newrelic-app-data', 'PxQCUVBaDhADVlhVBgEPUEYdFHANCBcQXw5UB0oXWVNdBF4EHgVSEQxUWAAUBxdfXwUFPVpQUA8HbkVWAxQACm8FSg1NSEcQH1UXUQFRBFFXBA9YX1sMAwBcVloOABtXXAYCHVZUW1AAUwxRDgENBAZJFFAdQwZbAgFVBAJXWgdWXFYHUggVOw==')

  res.setHeader('x-node-vcr-tape', path.basename(__filename, '.js'))

  res.write(Buffer.from(`{
    "id":"123",
    "eid":"asdfasdf",
    "uid":"123",
    "org_admin_type":"write",
    "name":"Test api Deletion",
    "node_groups":{

    },
    "num_networks":0,
    "locales":{

    },
    "shard_id":123,
    "licensed_product_edition_name":"enterprise",
    "license_expires_on":0,
    "block_meraki_admins":false,
    "org":{
      "reported_api_level":4,
      "resolved_api_level":4,
      "id":"123",
      "eid":"asdfasdf",
      "l3_vpn_config_hash":{
        "participants":[

        ],
        "firewall_rules":[

        ],
        "vpn_firewall_inbound_default_rules_logging":true,
        "vpn_firewall_outbound_default_rules_logging":true,
        "ipsec_peers":[

        ]
      },
      "mcn":"1233-1233"
    },
    "inventory":[

    ],
    "api_level":4,
    "support_password":"1234"
  }`, 'utf-8'))
  res.end()

  return __filename
}
