const db = require('../Models')

module.exports = {
	checkLogin: (req, res) => {
    if (req.isAuthenticated()) {
      // send user id to client
      res.send(req.user);
    } else {
      res.send(false);
    }
  },
 save: (req, res) => {
   console.log(req.body)
  db.blogs.create({
    username: req.body.username,
    blog: req.body.blog, 
    title: req.body.title
  }).then(done => {
    res.send('saved')
  })
 }
}