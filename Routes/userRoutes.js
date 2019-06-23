const router = require('express').Router();
const passport = require('passport');
const usersController = require('../Controllers/usersController');

router
  .route('/checkLogin')
  .get(usersController.checkLogin);

// login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}));

router
  .route('/users/find/:id')
  .get(usersController.findById);

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.send(false);
});

router
  .route('/register')
  .post(usersController.createUser);

// req.login uses these functions
passport.serializeUser((user_id, done) => {
  done(null, user_id);
});
// this gets the users info
passport.deserializeUser((user_id, done) => {
  done(null, user_id);
});

module.exports = router;