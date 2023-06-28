const snakeCase = require('./snake-case');

module.exports = function compare(a, b, fn = snakeCase) {
  return fn(a) === fn(b);
};
