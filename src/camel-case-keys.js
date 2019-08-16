const camelCase = require('./camel-case');
const mapObject = require('@mmckelvy/map-object');

module.exports = function camelCaseKeys(input, { recursive = false } = {}) {
  const fn = (key, val) => {
    return [camelCase(key), val];
  };

  if (Array.isArray(input)) {
    return input.map((o) => {
      return mapObject(o, fn, {recursive});
    });
  }

  return mapObject(input, fn, {recursive});
};
