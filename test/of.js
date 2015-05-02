var of   = require('../');
var test = require('tape');

test('return [1]', function (t) {

  t.plan(1);
  t.deepEqual(of(1), [1]);

});

test('return [1, 2, 3]', function (t) {

  t.plan(1);
  t.deepEqual(of(1, 2, 3), [1, 2, 3]);

});

test('return [undefined]', function (t) {

  t.plan(1);
  t.deepEqual(of(undefined), [undefined]);

});
