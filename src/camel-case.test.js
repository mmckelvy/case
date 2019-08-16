const test = require('ava');

const camelCase = require('./camel-case');

test('camelCase - Should camel case strings', t => {
  const strings = [
    'camel-case',
    'camel_case',
    'camel__case',
    'camel case',
    'camel_Case',
    'Camel_case',
    'camelCase'
  ];

  for (const str of strings) {
    const actual = camelCase(str);
    t.is(actual, 'camelCase');
  }
});
