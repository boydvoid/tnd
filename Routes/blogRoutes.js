const router = require('express').Router();
const blogController = require('../Controllers/blogController');

// router
//   .route('/blog/load')
//   .get(blogController.load);

router
  .route('/blog/loadall')
  .get(blogController.loadall);

  router
  .route('/blog/load/:id')
  .get(blogController.load)

	router
  .route('/blog/save')
  .post(blogController.save);

	router
  .route('/blog/views')
  .post(blogController.updateViews);

	router
  .route('/blog/new')
  .post(blogController.new);
module.exports = router;
