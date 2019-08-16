const test = require('ava');

const snakeCaseKeys = require('./snake-case-keys');

test('snakeCaseKeys - Should camelCase keys in an object', t => {
  const input = {
    firstName: 'John',
    lastName: 'Smith'
  };

  const actual = snakeCaseKeys(input);
  const expected = {
    first_name: 'John',
    last_name: 'Smith'
  };

  t.deepEqual(actual, expected);
});

test('snakeCaseKeys - Should work on nested objects', t => {
  const input = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
      countryOfResidence: 'USA'
    }
  };

  const actual = snakeCaseKeys(input, {recursive: true});
  const expected = {
    first_name: 'John',
    last_name: 'Smith',
    address: {
      country_of_residence: 'USA',
    }
  };

  t.deepEqual(actual, expected);
});