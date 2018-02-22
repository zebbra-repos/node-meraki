function createRestAPI (settings) {
  return require('./lib/rest')(settings)
}

module.exports = createRestAPI
