const { isString } = require('./is');

/**
 * @param {any} value
 * @returns {string}
 */
function getString(value) {
  if (!isString(value)) {
    return '';
  }

  return value;
}

/**
 * @param {string} value
 * @returns {string}
 */
function removeDiacritics(value) {
  const str = getString(value);

  if (!str.trim()) {
    return str;
  }

  return str.replace(/(\S)/g, v =>
    v.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  );
}

/**
 * @param {string} value
 * @returns {string}
 */
function removeSpecialChars(value) {
  return getString(value).replace(/['’|\\{}()[\]^$+*?.-]/g, '');
}

/**
 * @param {string} value
 * @returns {string}
 */
function removeWhiteSpace(value) {
  return getString(value).replace(/\s/g, '');
}

/**
 * @param {string} value
 * @param {boolean} [trim=false]
 * @returns {string}
 */
function removeExtraWhiteSpace(value, trim = false) {
  const str = getString(value).replace(/\s\s+/g, '');

  return trim ? str.trim() : str;
}

module.exports = {
  getString,
  removeDiacritics,
  removeSpecialChars,
  removeWhiteSpace,
  removeExtraWhiteSpace
};
