const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const db = require('../Models')	
	module.exports = () => {
		passport.use(new LocalStrategy(
			function(username, password, done) {
				db.users.findOne({ username: username }, function(err, user) {
					if (err) { return done(err); }
					if (!user) {
						return done(null, false, { message: 'Incorrect username.' });
					}
					if (!user.validPassword(password)) {
						return done(null, false, { message: 'Incorrect password.' });
					}
					return done(null, user);
				});
			}
		));
	}