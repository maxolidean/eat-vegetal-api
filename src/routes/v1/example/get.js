const { InternalServerError } = require('restify-errors');

const router = require('./router');

router.get('', async (req, res, next) => {
  try {
    res.send(200, { example: 'awesome example' });

    return next();
  } catch (err) {
    return next(new InternalServerError(err.stack));
  }
});
