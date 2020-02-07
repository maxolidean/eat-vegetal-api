const { api } = require('../../config.test');
const { PATH_BASE } = require('./const.test');

// describe('POST', () => {
//     it('should upload an image by using Multipart', () => 
//       api.post(PATH_BASE)
//       .set('Content-Type', 'multipart/form-data')
//       .attach('image', './src/__tests__/routes/v1/upload/frutillas.jpg')
//       .expect(202));
// });
  
describe('POST', () => {
  it('should upload an image by using Multipart', () => 
    api.post(PATH_BASE)
    .set('Content-Type', 'multipart/form-data')
    .attach('image', './src/__tests__/routes/v1/upload/berenjenas.jpg')
    .expect(202));
});

