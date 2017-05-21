require('../shim');
var test = require('tape');
var functionsHaveNames = (function foo() {}).name === 'foo';
var ifFunctionsHaveNamesTest = functionsHaveNames ? test : test.skip;

if (!Object.prototype.hasOwnProperty.call(Array, 'of')) {
  return it('exists', function (t) {
    t.same(!!Array.of, true);
  });
}

ifFunctionsHaveNamesTest('has the correct name', function (t) {
  t.plan(1);

  t.same(Array.of.name, 'of');
});

test('has the right arity', function (t) {
  t.plan(1);

  t.same(Array.of.length, 0);
});

test('is not enumerable', function (t) {
  t.plan(1);

  var descriptor = Object.getOwnPropertyDescriptor(Array, 'of');

  t.same(descriptor.enumerable, false);
});

test('should create correct array from arguments', function (t) {
  t.plan(1);

  t.true(Array.of(1, null, undefined), [1, null, undefined]);
});

test('should work with other constructors', function (t) {
  t.plan(2);

  var Foo = function FooBar(length) {
    this.args = Array.prototype.slice.call(arguments, 1);
    this.length = length;
  };
  var args = ['a', 'b', 'c'];
  var expected = new Foo(args.length);
  args.forEach(function (arg, index) {
    expected[index] = arg;
  });

  t.true(Array.of.apply(Foo, args) instanceof Foo);
  t.same(Array.of.apply(Foo, args), expected);
});

test('still works without Array.from', function (t) {
  t.plan(1);

  var originalFrom = Array.from;
  Array.from = 42;
  t.same(Array.of(1, 2, 3), [1, 2, 3]);
  Array.from = originalFrom;
});