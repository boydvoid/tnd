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
   db.blogs.findOne({
     _id: req.body.id
   }).then(found => {
     
     db.blogs.update({
       username: req.body.username,
       blog: req.body.blog, 
       title: req.body.title,
       img: req.body.img
     }).then(done => {
       res.send(done)
     })
   })
 },
 new: (req, res) => {
  console.log(req.body)
 db.blogs.create({
   username: req.body.username,
   blog: "<p>New Blog</p>", 
   title: req.body.title
 }).then(done => {
   res.send(done)
 })
},
 loadall: (req, res) => {
 db.blogs.find({
 }).then(done => {
   res.send(done)
 })
},
load: (req, res) => {
  db.blogs.findOne({
    _id: req.params.id
  }).then(done => {
    res.send(done)
  })
 }
}