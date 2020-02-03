const { Router } = require('restify-router');

const router = new Router();

router.add('/example', require('./example'));

module.exports = router;
