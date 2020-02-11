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

router.get('/:name', async (req, res, next) => {
  try {

    let page = vegetables.find(v => v.id = req.params.name);

    if (page == undefined) {
      res.send(404);
      return next();
    }

    res.send(200, page);
    return next();
  } catch (err) {
    return next(new InternalServerError(err.stack));
  }

});


  module.exports = router;