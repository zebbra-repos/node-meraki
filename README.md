# node-meraki
Nodejs wrapper module for [Cisco Meraki](https://meraki.cisco.com/) network manager. Currentyl we support the Meraki API version `v0`.

[![Build Status](https://travis-ci.org/zebbra-repos/node-meraki.svg?branch=master)](https://travis-ci.org/zebbra-repos/node-meraki)
<!-- Dependency Status -->
<a href="https://david-dm.org/zebbra-repos/node-meraki">
  <img src="https://david-dm.org/zebbra-repos/node-meraki.svg" alt="Dependency Status" />
</a>
<!-- devDependency Status -->
<a href="https://david-dm.org/zebbra-repos/node-meraki?type=dev">
  <img src="https://david-dm.org/zebbra-repos/node-meraki/dev-status.svg" alt="devDependency Status" />
</a>

## Installation
```bash
npm install --save node-meraki
```

## Documentation
The jsdoc documentation can be found [here](https://zebbra-repos.github.io/node-meraki/)

## Options
| Name | Type | Description | Default |
| --- | --- | --- | --- |
| **version** | String | Which Meraki api version to use | `v0` |
| **apiKey** | String | The Meraki api key | |
| **target** | String | The Meraki target | `api` |
| **baseUrl** | String | The Meraki base url | `https://api.meraki.com` |
| **frontend** | boolean | Activates the frontend API too | false |
| **[email]** | string | E-Mail for the Frontend (mandatory if frontend is set to true) |  |
| **[password]** | string | Password for the Frontend (mandatory if frontend is set to true) |  |
| **rateLimiter** | Object | The rate limiter [bottleneck](https://github.com/SGrondin/bottleneck/blob/master/README.md) configuration | `see Rate-Limiter section` |
| **[loggerEnabled]** | boolean | If enabled node-meraki will log request information | false |
| **[logger]** | object | Custom logger | console |

### ApiKey and Target
It is recommended to set the `apiKey` on the initial module configuration. This key will be used for all subsequent api requests. If you need to set the apiKey on a request-level you have the possebility to pass it along for each request.

You have the following three possebilities to set the `target`:
1. On the initial configuration level. This target will be used for all subsequent api requests.
1. Leave the `target` blank. In this case the module will use the `api` target which triggers a redirect upon requests. The redirects are handled by this module.
1. Set the `target` for each request.

## Rate-Limiter
We make use of the [bottleneck](https://github.com/SGrondin/bottleneck) module to implement rate limited requests against the Meraki API. Most users will have a 5-requests-per-second rate limit. To enabled this functionality, pass the following configuration as options:
```javascript
const rateLimiter = {
  enabled: true
}
```

### Scoped Rate-Limiter
If you manage more than one organisation you can enable the `Rate-Limiter` to use a pool of instances, one instance for each organisation (Meraki rate limit is restricted on a per-organisation level). Simply pass the `scoped=true` settings on `node-meraki` initialization. Each request accepts a `scope` attribute (for example the organisation id) which will be used to access the scoped `Rate-Limiter` instance. If no instance exists for the given instance one will be created on the fly and stored in the pool for all following requests.

Following configuration defaults are set and can be overwritten:
```javascript
const rateLimiter = {
  enabled: false,
  maxConcurrent: 5,
  minTime: 200,
  highWater: 1000,
  strategy: Bottleneck.strategy.LEAK,
  scoped: false
}
```

## Usage
```javascript
const apiKey = 'secret meraki api key'
const organizationId = 'meraki organization id'
const version = 'v0'
const target = 'n12'
const rateLimiter = {
  enbaled: true
}
const baseUrl = 'https://api.meraki.com' // this is the default an can be overwritten

// baseUrl and port are optional
const meraki = require('./lib')({ version, apiKey, target,  baseUrl, rateLimiter })

function handleErrors (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
}

function handleSuccess (data) {
  console.log(data)
}

meraki.listOrganizations()
  .then(handleSuccess)
  .catch(handleErrors)
```

## Debugging
Set `DEBUG=node-meraki*` to see internal logs

## Contribute
It would be great to enhance the node-meraki API wrapper to include all missing endpoints (see `Currently not implemented`). If you want to contribute to this repository please provide a pull-request and make sure to:
* conform to the current directory style guide
* conform to the current jsdoc documentation

## Currently not implemented
All endpoints for ressources for:
* Air Marshal scans
* Bluetooth
* Firewfall
* SM
* VPN
