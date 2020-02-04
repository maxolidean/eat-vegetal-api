const vegetables = require("../../../pages")
const { Router } = require('restify-router');
const router = new Router();

router.get('', async (req, res, next) => {
    try {
      res.send(200, { vegetables: vegetables });
  
      return next();
    } catch (err) {
      return next(new InternalServerError(err.stack));
    }
  });

  module.exports = router;