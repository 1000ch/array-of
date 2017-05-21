module.exports = function () {
  if (!Array.isArray(this) && typeof this === 'function') {
    var Class = this;
    var instance = new Class();
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
      instance[i] = arguments[i];
    }
    instance.length = length;

    return instance;
  }

  return Array.prototype.slice.call(arguments);
};
