const router = require('express').Router();
const blogController = require('../Controllers/blogController');

// router
//   .route('/blog/load')
//   .get(blogController.load);

	router
  .route('/blog/save')
  .post(blogController.save);


module.exports = router;