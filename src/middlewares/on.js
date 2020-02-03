const restify = require('restify');
const { HttpError, InternalServerError } = require('restify-errors');

const { NODE_ENV } = process.env;

/**
 * @param {restify.Request} req
 * @param {restify.Response} res
 * @param {HttpError} err
 * @param {restify.Next} next
 * @returns {void}
 */
function restifyError(req, res, err, next) {
  const { name: code, message, stack } = err;

  if (NODE_ENV !== 'production') {
    err.toJSON = () => ({ code, message, stack });
  } else if (err instanceof InternalServerError) {
    err.toJSON = () => ({ code });
  }

  return next();
}

module.exports = { restifyError };
