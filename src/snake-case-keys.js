const snakeCase = require('./snake-case');
const mapObject = require('@mmckelvy/map-object');

module.exports = function snakeCaseKeys(input, { recursive = false } = {}) {
  const fn = (key, val) => {
    return [snakeCase(key), val];
  };

  if (Array.isArray(input)) {
    return input.map((o) => {
      return mapObject(o, fn, {recursive});
    });
  }

  return mapObject(input, fn, {recursive});
};
