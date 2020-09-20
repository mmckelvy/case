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
* Convert a string to Proper case. Handles capitals, spaces, dashes, and underscores.
* properCase => Proper case
* proper-case => Proper case
* proper case => Proper case
*
* @param {string} str
* @return {string}
*/
module.exports = function properCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prevChar = str[i - 1] || '';

    if (i === 0) {
      result += char.toUpperCase();

    } else if (isUpper(char) && isLower(prevChar)) {
      result += ` ${char.toLowerCase()}`;

    } else if (shouldReplace(prevChar) && shouldReplace(char)) {
      noop();

    } else if (shouldReplace(char)) {
      result += ' ';

    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};