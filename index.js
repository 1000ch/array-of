(function(root, arrayOf) {

  if (typeof module !== 'undefined' && module.exports) {

    module.exports = arrayOf;

  } else if (typeof define === 'function' && define.amd) {

    define([], function() {
      return arrayOf;
    });

  }

})(this, function () {

  return Array.prototype.slice.call(arguments);

});
