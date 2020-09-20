const test = require('ava');

const properCase = require('./proper-case');

test('properCase - Should proper case strings', t => {
  const strings = [
    'proper-case',
    'proper_case',
    'proper__case',
    'proper case',
    'proper_Case',
    'Proper_case',
    'properCase',
    'proper case'
  ];

  for (const str of strings) {
    const actual = properCase(str);
    t.is(actual, 'Proper case');
  }
});
