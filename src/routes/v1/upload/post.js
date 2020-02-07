const { InternalServerError } = require('restify-errors');
const router = require('./router');
const fs = require('fs');
const util = require('util');
const path = require('path')
const uniqueFilename = require('unique-filename');
const { CUSTOM_VISION_ENDPOINT, 
        CUSTOM_VISION_SUBSCRIPTION_KEY, 
        CUSTOM_VISION_PROJECT_ID,
        CUSTOM_VISION_ITERATION_ID,
        CUSTOM_VISION_MIN_PROB,
        AZURE_STORAGE_CONNECTION_STRING,
        AZURE_STORAGE_CONTAINER_NAME_UNKNOWN,
        AZURE_STORAGE_CONTAINER_NAME_RECOGNIZED } = process.env;
const { PredictionAPIClient } = require("@azure/cognitiveservices-customvision-prediction");
const { BlobServiceClient } = require("@azure/storage-blob"); 
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const unknownContainerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME_UNKNOWN);
const recognizedContainerClient = blobServiceClient.getContainerClient(AZURE_STORAGE_CONTAINER_NAME_RECOGNIZED);


router.post('', async (req, res, next) => {
  try 
  {
    if (req.files.image != undefined ) {
      let unq = uniqueFilename('');
      let fileName = unq + path.extname(req.files.image.name);
      let resName = unq + ".json";
      
      fs.renameSync(req.files.image.path,  "./uploads/" + fileName );
      const testFile = fs.readFileSync("./uploads/" + fileName);
      const predictor = new PredictionAPIClient(CUSTOM_VISION_SUBSCRIPTION_KEY, CUSTOM_VISION_ENDPOINT);
      const results = await predictor.classifyImage(CUSTOM_VISION_PROJECT_ID, CUSTOM_VISION_ITERATION_ID, testFile);
      res.send(202, {message: 'File processed', results: results });

      fs.writeFileSync("./uploads/" + resName, JSON.stringify(results), 'utf-8');
      const resultsFile = fs.readFileSync("./uploads/" + resName);

      var block, block2;
      if (results.predictions[0].probability >= parseFloat(CUSTOM_VISION_MIN_PROB)) {
        block = recognizedContainerClient.getBlockBlobClient(fileName);
        block2 = recognizedContainerClient.getBlockBlobClient(resName);
      }
      else {
        block = unknownContainerClient.getBlockBlobClient(fileName);
        block2 = unknownContainerClient.getBlockBlobClient(resName);
      }
      
      await block2.uploadFile("./uploads/" + resName);
      await block.uploadFile("./uploads/" + fileName);

      fs.unlinkSync("./uploads/" + resName);
      fs.unlinkSync("./uploads/" + fileName);

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