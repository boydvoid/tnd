const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const PORT  = process.env.PORT || 3001;
const passport = require('passport')
const expressValidator = require('express-validator');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const db = require('./Models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
//routes imports
const User = require('./Routes/userRoutes');
const Blogs = require('./Routes/blogRoutes')
const Slider = require('./Routes/sliderRoutes')
var cors = require("cors");

//cors info
var allowedOrigins = ["http://localhost", ""];

app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(expressValidator())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // mongo
mongoose.connect(process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/tnd', { useNewUrlParser: true }).then(() => {
});

// store the session in mongo db
const store = new MongoDBStore({
  uri: process.env.MONGOLAB_ORANGE_URI || 'mongodb://localhost/tnd',
  collection: 'sessions',
});

// //testing mongo online
// mongoose.connect(process.env.MONGOLAB_ORANGE_URI || 'mongodb://admin:admin11111111@ds253537.mlab.com:53537/tnd', { useNewUrlParser: true }).then((data) => {
//   console.log(data)
// });

// // store the session in mongo db
// const store = new MongoDBStore({
//   uri: process.env.MONGOLAB_ORANGE_URI || 'mongodb://admin:admin11111111@ds253537.mlab.com:53537/tnd',
//   collection: 'sessions',
// });
// store.on('error', (error) => {
//   console.log(error);
// });

// session
app.use(session({
  secret: '4u9824389ijofsf982u4josafasfd938afdapldksfj poia a0 f2p0jr',
  resave: false,
  saveUninitialized: false,
  store,
}));
// passport
app.use(passport.initialize());
app.use(passport.session());

//route definitions
app.use('/api', User)
app.use('/api', Blogs)
app.use('/api', Slider)

//passport config
// Passport use
passport.use(new LocalStrategy(
  ((username, password, done) => {
    // When username is sent, find match in database.
    db.users.findOne({
      username,
    }).then((user) => {
      if (user === null) {
        // User was not found in the database.
        done(null, false);
      }
      const passwordCheck = bcrypt.compareSync(password, user.password);

      // User was found in the database.
      if (passwordCheck === true) {
        return done(null, user);
      }

      return done(null, false);
    }, (error) => {
      console.log(error);
    });
  }),
));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, ()=>{
	console.log(PORT);
})
