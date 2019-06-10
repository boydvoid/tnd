const router = require('express').Router();
const sliderController = require('../Controllers/sliderController')

router
  .route('/slider/addLink')
  .post(sliderController.addLink)

router
  .route('/slider/retrieveLinks')
  .get(sliderController.retrieveLinks)
  
  module.exports = router;