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

module.exports = function camelCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const prevChar = str[i - 1];

    if (i === 0 && isUpper(char)) {
      result += char.toLowerCase();

    } else if (shouldReplace(char)) {
      noop();

    } else if (isLower(char) && shouldReplace(prevChar)) {
      result += char.toUpperCase();

    } else {
      result += char;
    }
  }

  return result;
}