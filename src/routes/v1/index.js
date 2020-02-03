const { Router } = require('restify-router');

const router = new Router();

router.add('/example', require('./example'));
router.add('/vegetables', require('./vegetables'));

module.exports = router;
