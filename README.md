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

## Rate-Limiter
We make use of the [bottleneck](https://github.com/SGrondin/bottleneck) module to implement rate limited requests against the Meraki API. Most users will have a 5-requests-per-second rate limit. To enabled this functionality, pass the following configuration as options:
```javascript
const rateLimiter = {
  enabled: true
}
```

Following configuration defaults are set and can be overwritten:
```javascript
const rateLimiter = {
  enabled: false,
  maxConcurrent: 5,
  minTime: 200,
  highWater: 1000,
  strategy: Bottleneck.strategy.LEAK
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

function handleErros (error) {
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
* Firefall
* SAML roles
* SM
* VPN
