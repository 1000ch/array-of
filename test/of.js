var of = require('../');
var test = require('tape');
var functionsHaveNames = (function foo() {}).name === 'foo';
var ifFunctionsHaveNamesTest = functionsHaveNames ? test : test.skip;

test('should create correct array from arguments', function (t) {
  t.plan(1);

  t.same(of(1, null, undefined), [1, null, undefined]);
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

  t.true(of.apply(Foo, args) instanceof Foo);
  t.same(of.apply(Foo, args), expected);
});

test('still works without Array.from', function (t) {
  t.plan(1);

  var originalFrom = Array.from;
  Array.from = 42;
  t.same(of(1, 2, 3), [1, 2, 3]);
  Array.from = originalFrom;
});