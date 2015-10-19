var arrayOf = require('./');

if (!Array.of) {
  Object.defineProperty(Array, 'of', {
    value: arrayOf,
    configurable: true,
    writable: true
  });
}
