const test = require('ava');

const snakeCase = require('./snake-case');
const compare = require('./compare');

// Base case: true
test('compare - Case 1', t => {
  const a = 'foo';
  const b = 'foo';

  const actual = compare(a, b);
  const expected = true;

  t.is(actual, expected);
});

// Base case: false
test('compare - Case 2', t => {
  const a = 'foo';
  const b = 'bar';

  const actual = compare(a, b);
  const expected = false;

  t.is(actual, expected);
});

// Handle casing
test('compare - Case 3', t => {
  const a = 'firstName';
  const b = 'first_name';

  const actual = compare(a, b);
  const expected = true;

  t.is(actual, expected);
});

// Handle spaces
test('compare - Case 4', t => {
  const a = 'First Name';
  const b = 'first_name';

  const actual = compare(a, b);
  const expected = true;

  t.is(actual, expected);
});

// Handle custom functions
test('compare - Case 5', t => {
  const a = 'Name is McKelvy';
  const b = 'name_is_mckelvy';

  const fn = (str) => snakeCase(str.toLowerCase());

  const actual = compare(a, b, fn);
  const expected = true;

  t.is(actual, expected);
});
