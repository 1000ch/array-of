(function(root, arrayOf) {

  if (typeof exports !== 'undefined') {

    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayOf;
    }

    exports.arrayOf = arrayOf;

  } else if (typeof define === 'function' && define.amd) {

    define([], function() {
      return arrayOf;
    });

  }

  if (!Array.of) {
    Object.defineProperty(Array, 'of', {
      value: arrayOf,
      configurable: true,
      writable: true
    });
  }

})(this, function () {

  return Array.prototype.slice.call(arguments);

});
