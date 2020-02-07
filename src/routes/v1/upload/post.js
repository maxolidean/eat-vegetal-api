const { InternalServerError } = require('restify-errors');
const router = require('./router');
const fs = require('fs');
const path = require('path')
const uniqueFilename = require('unique-filename');


router.post('', (req, res, next) => {
  if (req.files.image != undefined ) {
    let fileName = uniqueFilename("./uploads/in") + path.extname(req.files.image.name);
    fs.renameSync(req.files.image.path,  fileName );
  }
  res.send(202, {message: 'File uploaded'});
});

module.exports = router;