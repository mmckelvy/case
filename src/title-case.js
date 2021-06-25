// replace whitespace, dashes, and underscores
function shouldReplace(char) {
  const regEx = /[\s-_]/;

  return regEx.test(char);
}

function isUpper(char) {
  const regEx = /[A-Z]/;

  return regEx.test(char);
}

function isLower(char) {
  const regEx = /[a-z]/;

  return regEx.test(char);
}

const noop = () => {};

/**
* Convert a string to Title Case. Handles capitals, spaces, dashes, and underscores.
* titleCase => Title Case
* title-case => Title Case
* title case => Proper Case
*
* @param {string} str
* @return {string}
*/
module.exports = function titleCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prevChar = str[i - 1] || '';

    if (i === 0) {
      result += char.toUpperCase();

    } else if (isUpper(char) && isLower(prevChar)) {
      result += ` ${char}`;

    } else if (shouldReplace(prevChar) && shouldReplace(char)) {
      noop();

    } else if (shouldReplace(char)) {
      result += ' ';

    } else if (isLower(char) && shouldReplace(prevChar)) {
      result += char.toUpperCase();

    } else {
      result += char;
    }
  }

  return result;
};
