<img src="http://bitcore.io/css/images/module-message.png" alt="luxcore message" height="35">
# Luxcoin Message Verification and Signing for Litecore


[![NPM Package](https://img.shields.io/npm/v/luxcore-message.svg?style=flat-square)](https://www.npmjs.org/package/luxcore-message)
[![Build Status](https://img.shields.io/travis/luxcoin-project/luxcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/luxcoin-project/luxcore-message)
[![Coverage Status](https://img.shields.io/coveralls/luxcoin-project/luxcore-message.svg?style=flat-square)](https://coveralls.io/r/luxcoin-project/luxcore-message?branch=master)

luxcore-message adds support for verifying and signing luxcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main luxcore repo](https://github.com/luxcoin-project/luxcore) for more information.

## Getting Started

```sh
npm install luxcore-message
```

```sh
bower install luxcore-message
```

To sign a message:

```javascript
var luxcore = require('luxcore-lib');
var Message = require('luxcore-message');

var privateKey = luxcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/luxcoin-project/luxcore/blob/master/CONTRIBUTING.md) on the main luxcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/luxcoin-project/luxcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Luxcoin Core Developers

