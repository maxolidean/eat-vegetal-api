const restify = require('restify');
const { InternalServerError } = require('restify-errors');

const AC_REQ_METHOD = 'access-control-request-method';
const AC_REQ_HEADERS = 'access-control-request-headers';
const AC_ALLOW_ORIGIN = 'access-control-allow-origin';
const AC_ALLOW_HEADERS = 'access-control-allow-headers';
const AC_ALLOW_METHODS = 'access-control-allow-methods';
const AC_EXPOSE_HEADERS = 'access-control-expose-headers';
const AC_MAX_AGE = 'access-control-max-age';
const STR_VARY = 'vary';
const STR_ORIGIN = 'origin';
const STR_VARY_DETAILS = [STR_ORIGIN, AC_REQ_METHOD, AC_REQ_HEADERS].join(', ');
const MT_OPTIONS = 'OPTIONS';

const config = {
  allowAllOrigins: false,
  allowOrigins: ['http://localhost:*'],
  allowHeaders: [
    'accept',
    'accept-version',
    'authorization',
    'content-type',
    'request-id',
    'origin',
    'pragma',
    'x-api-version',
    'x-request-id',
    'x-requested-with'
  ].join(', '),
  exposeHeaders: [
    'api-version',
    'content-length',
    'content-md5',
    'content-type',
    'date',
    'request-id',
    'response-time'
  ].join(', '),
  preflightMaxAge: 10
};

/**
 * @param {string} reqOrigin
 * @returns {boolean}
 */
function matcher(reqOrigin) {
  if (!reqOrigin) {
    return false;
  }

  if (config.allowAllOrigins) {
    return true;
  }

  return config.allowOrigins.some(
    allowOrigin =>
      (!allowOrigin.includes('*') && reqOrigin === allowOrigin) ||
      !!reqOrigin.match(
        `^${allowOrigin.replace(/\./g, '\\.').replace(/\*/g, '.*')}$`
      )
  );
}

/**
 * @param {restify.Request} req
 * @param {restify.Response} res
 * @param {restify.Next} next
 * @returns {void}
 */
function preflight(req, res, next) {
  try {
    const {
      method,
      headers: { origin: reqOrigin, [AC_REQ_METHOD]: reqMethod }
    } = req;

    if (method !== MT_OPTIONS || !reqMethod || !matcher(reqOrigin)) {
      return next();
    }

    const headers = {
      [AC_ALLOW_ORIGIN]: reqOrigin,
      [AC_ALLOW_METHODS]: `${reqMethod}, ${MT_OPTIONS}`,
      [AC_ALLOW_HEADERS]: config.allowHeaders,
      [AC_MAX_AGE]: config.preflightMaxAge
    };

    return res.send(204, null, headers);
  } catch (err) {
    return next(new InternalServerError(err.stack));
  }
}

/**
 * @param {restify.Request} req
 * @param {restify.Response} res
 * @param {restify.Next} next
 * @returns {void}
 */
function actual(req, res, next) {
  try {
    const {
      headers: { origin: reqOrigin }
    } = req;

    res.header(STR_VARY, STR_VARY_DETAILS);

    if (!matcher(reqOrigin)) {
      return next();
    }

    res.header(AC_ALLOW_ORIGIN, reqOrigin);
    res.header(AC_EXPOSE_HEADERS, config.exposeHeaders);

    return next();
  } catch (err) {
    return next(new InternalServerError(err.stack));
  }
}

module.exports = { actual, preflight };
