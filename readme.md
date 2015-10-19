# array-of [![Build Status](https://travis-ci.org/1000ch/array-of.svg?branch=master)](https://travis-ci.org/1000ch/array-of)

Polyfill for Array.of.

[![testling badge](https://ci.testling.com/1000ch/array-of.png)](https://ci.testling.com/1000ch/array-of)

## Usage

Functionally:

```javascript
var arrayOf = require('array-of');

console.log(arrayOf(1, 2, 3));
// => [1, 2, 3]
```

From Array object:

```javascript
require('array-of/shim');

console.log(Array.of(4, 5, 6));
// => [4, 5, 6]
```

## License

MIT: http://1000ch.mit-license.org
