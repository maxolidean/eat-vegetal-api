const { InternalServerError } = require('restify-errors');
const router = require('./router');
const fs = require('fs');
const path = require('path')
const uniqueFilename = require('unique-filename');
const { CUSTOM_VISION_ENDPOINT, 
        CUSTOM_VISION_SUBSCRIPTION_KEY, 
        CUSTOM_VISION_PROJECT_ID,
        CUSTOM_VISION_ITERATION_ID,
        AZURE_STORAGE_CONNECTION_STRING,
        AZURE_STORAGE_CONTAINER_NAME } = process.env;
const util = require('util');
const { PredictionAPIClient } = require("@azure/cognitiveservices-customvision-prediction");
const { BlobServiceClient } = require("@azure/storage-blob"); 
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME);
const getStream = require('into-stream');


router.post('', async (req, res, next) => {
  try 
  {
    if (req.files.image != undefined ) {
      let fileName = uniqueFilename('') + path.extname(req.files.image.name);
      fs.renameSync(req.files.image.path,  "./uploads/in" + fileName );
      const testFile = fs.readFileSync("./uploads/in" + fileName);
      const predictor = new PredictionAPIClient(CUSTOM_VISION_SUBSCRIPTION_KEY, CUSTOM_VISION_ENDPOINT);
      const results = await predictor.classifyImage(CUSTOM_VISION_PROJECT_ID, CUSTOM_VISION_ITERATION_ID, testFile);
      res.send(202, {message: 'File processed', results: results });

      const blockBlobClient = containerClient.getBlockBlobClient(fileName);
      const uploadResp = await blockBlobClient.upload(testFile.buffer,  testFile.length);
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