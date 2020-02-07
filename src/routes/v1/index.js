const { Router } = require('restify-router');

const router = new Router();

router.add('/example', require('./example'));
router.add('/vegetables', require('./vegetables'));
router.add('/upload', require('./upload'));

module.exports = router;
