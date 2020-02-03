const { isArray, isFunction, isObject } = require('./is');

/**
 * @param {Object} obj
 * @param {string|Array<string>} keys
 * @param {(val: any, key: string, obj: Object) => boolean} [func]
 * @returns {Object}
 */
function omit(obj, keys, func = null) {
  if (!isObject(obj)) {
    return {};
  }

  const result = {};
  const props = isArray(keys) ? keys : [keys];

  Object.keys(obj).forEach(key => {
    const val = obj[key];

    if (!props.includes(key) && (!isFunction(func) || func(val, key, obj))) {
      result[key] = val;
    }
  });

  return result;
}

module.exports = { omit };
