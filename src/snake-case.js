// replace whitespace and dashes
function shouldReplace(char) {
  const regEx = /[\s-]/;

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
* Convert a string to snake_case. Handles capitals, spaces, and dashes.
* snakeCase => snake_case
* snake-case => snake_case
* snake case => snake_case
* Snake Case => snake_case
*
* @param {string} str
* @return {string}
*/
module.exports = function snakeCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prevChar = str[i - 1] || '';

    if (isUpper(char) && isLower(prevChar)) {
      result += `_${char.toLowerCase()}`;

    } else if (shouldReplace(prevChar) && shouldReplace(char)) {
      noop();

    } else if (shouldReplace(char)) {
      result += '_';

    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};