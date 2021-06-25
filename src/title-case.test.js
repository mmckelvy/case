const test = require('ava');

const titleCase = require('./title-case');

test('titleCase - Should title case strings', t => {
  const strings = [
    'title-case',
    'title_case',
    'title__case',
    'title case',
    'title_Case',
    'Title_case',
    'titleCase',
    'title case'
  ];

  for (const str of strings) {
    const actual = titleCase(str);
    t.is(actual, 'Title Case');
  }
});
