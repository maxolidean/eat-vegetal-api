const { Router } = require('restify-router');

const tips = require('../../../pages/tips');

const router = new Router();

router.get('', async (req, res, next) => {
  try {
    const tip = tips[Math.floor(Math.random() * tips.length)];

    res.send(200, tip);

    return next();
  } catch (err) {
    return next(new InternalServerError(err.stack));
  }
});

module.exports = router;
