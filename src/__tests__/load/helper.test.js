/**
 * @param {Array} data
 * @param {string} path
 * @param {string} href
 * @returns {(params: Object, options: Object, client: Function, callback: Function) => any}
 */
function requestGeneratorByIndex(data, path, href) {
  return (params, options, client, callback) => {
    let index = params.index || 0;

    options.pathname = `${path}/${data[index]}`;
    options.path = `${path}/${data[index]}`;
    options.href = `${href}/${data[index]}`;
    index += 1;
    params.index = index;

    return client(options, callback);
  };
}

module.exports = { requestGeneratorByIndex };
