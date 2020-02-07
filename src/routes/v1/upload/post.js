const { InternalServerError } = require('restify-errors');
const router = require('./router');
const fs = require('fs');
const path = require('path')
const uniqueFilename = require('unique-filename');
const { CUSTOM_VISION_ENDPOINT, 
        CUSTOM_VISION_SUBSCRIPTION_KEY, 
        CUSTOM_VISION_PROJECT_ID,
        CUSTOM_VISION_PROJECT_NAME,
        CUSTOM_VISION_ITERATION_ID } = process.env;
const util = require('util');
const { PredictionAPIClient } = require("@azure/cognitiveservices-customvision-prediction");


router.post('', async (req, res, next) => {
  try 
  {
    if (req.files.image != undefined ) {
      let fileName = uniqueFilename("./uploads/in") + path.extname(req.files.image.name);
      fs.renameSync(req.files.image.path,  fileName );
      const testFile = fs.readFileSync(fileName);
      const predictor = new PredictionAPIClient(CUSTOM_VISION_SUBSCRIPTION_KEY, CUSTOM_VISION_ENDPOINT);
      const results = await predictor.classifyImage(CUSTOM_VISION_PROJECT_ID, CUSTOM_VISION_ITERATION_ID, testFile);
      //console.log(results);
      res.send(202, {message: 'File processed', results: results });
    }
    else {
      res.send(400, {message: 'Bad Request'});
    } 
  } catch (err) {
      console.log(err);
      return next(new InternalServerError(err.stack));
    }  
  }
);

module.exports = router;