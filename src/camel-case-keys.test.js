const test = require('ava');

const camelCaseKeys = require('./camel-case-keys');

test('camelCaseKeys - Should camelCase keys in an object', t => {
  const input = {
    first_name: 'John',
    last_name: 'Smith'
  };

  const actual = camelCaseKeys(input);
  const expected = {
    firstName: 'John',
    lastName: 'Smith'
  };

  t.deepEqual(actual, expected);
});

test('camelCaseKeys - Should work on nested objects', t => {
  const input = {
    first_name: 'John',
    last_name: 'Smith',
    address: {
      country_of_residence: 'USA',
    }
  };

  const actual = camelCaseKeys(input, {recursive: true});
  const expected = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
      countryOfResidence: 'USA'
    }
  };

  t.deepEqual(actual, expected);
});

test('camelCaseKeys - Should work on arrays', t => {
  const input = [
    {
      first_name: 'John',
      last_name: 'Smith'
    },
    {
      first_name: 'Jane',
      last_name: 'Jenkins'
    },
  ];

  const expected = [
    {
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      firstName: 'Jane',
      lastName: 'Jenkins'
    },
  ];

  const actual = camelCaseKeys(input);

  t.deepEqual(actual, expected);
});

test('camelCaseKeys - Should work on arrays recursively', t => {
  const input = [
    {
      first_name: 'John',
      last_name: 'Smith',
      aliases: [
        {
          first_name: 'Bill',
          last_name: 'Williams'
        }
      ]
    },
    {
      first_name: 'Jane',
      last_name: 'Jenkins',
      aliases: [
        {
          first_name: 'Jenny',
          last_name: 'Green'
        }
      ]
    },
  ];

  const expected = [
    {
      firstName: 'John',
      lastName: 'Smith',
      aliases: [
        {
          firstName: 'Bill',
          lastName: 'Williams'
        }
      ]
    },
    {
      firstName: 'Jane',
      lastName: 'Jenkins',
      aliases: [
        {
          firstName: 'Jenny',
          lastName: 'Green'
        }
      ]
    },
  ];

  const actual = camelCaseKeys(input, {recursive: true});

  t.deepEqual(actual, expected);
});
