const test = require('ava');

const snakeCase = require('./snake-case');

test('snakeCase - Should snake case strings', t => {
  const strings = [
    'snakeCase',
    'snake-case',
    'snake--case',
    'snake case',
    'snake-Case',
    'snake_case',
    'Snake---Case',
    'snake case'
  ];

  for (const str of strings) {
    const actual = snakeCase(str);
    t.is(actual, 'snake_case');
  }
});