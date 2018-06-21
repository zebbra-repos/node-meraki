# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.3] - 2018-06-21
### Added

### Changed
- Fix: Set Cookie string to null in rest api

### Removed

## [3.0.2] - 2018-06-19
### Added

### Changed
- Dependencies updates

### Removed

## [3.0.1] - 2018-06-15
### Added

### Changed
- changed idle keep alive interval in session store to 5 minutes

### Removed

## [3.0.0] - 2018-06-15
### Added
- Dashboard API support (experimental)

### Changed

### Removed

## [2.1.0] - 2018-06-11
### Added
- Rate-limiter ([bottleneck](https://github.com/SGrondin/bottleneck)) support

### Changed
- Dependencies updates

### Removed

## [2.0.5] - 2018-06-11
### Added

### Changed
- Dependencies updates

### Removed

## [2.0.4] - 2018-03-28
### Added

### Changed
- Dependencies updates

### Removed


## [2.0.3] - 2018-03-22
### Added

### Changed
- Point package.json main to lib/index

### Removed

## [2.0.2] - 2018-03-22
### Added
- Fixed axios response transformation bug where we try to parse non-json data

### Changed

### Removed

## [2.0.1] - 2018-03-22
### Added
- Handle BigInteger ids from meraki organizations. We use [json-bigint](https://www.npmjs.com/package/json-bigint) to parse the data according to [this](https://stackoverflow.com/questions/43787712/axios-how-to-deal-with-big-integers?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) stackoverflow answer

### Changed
- Adapt code base to [npm-node-boilerplate] template

### Removed

[Unreleased]: https://github.com/zebbra-repos/node-meraki/compare/v3.0.3...HEAD
[3.0.3]: https://github.com/zebbra-repos/node-meraki/compare/v3.0.2...v3.0.3
[3.0.2]: https://github.com/zebbra-repos/node-meraki/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/zebbra-repos/node-meraki/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/zebbra-repos/node-meraki/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/zebbra-repos/node-meraki/compare/v2.0.5...v2.1.0
[2.0.5]: https://github.com/zebbra-repos/node-meraki/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/zebbra-repos/node-meraki/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/zebbra-repos/node-meraki/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/zebbra-repos/node-meraki/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/zebbra-repos/node-meraki/compare/v1.0.0...v2.0.1

[npm-node-boilerplate]: https://github.com/mbaertschi/npm-node-boilerplate
