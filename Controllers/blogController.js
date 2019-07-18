const db = require('../Models')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

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
    db.blogs.updateOne({ _id: req.body.id }, {
      $set: {
        username: req.body.username,
        blog: req.body.blog,
        title: req.body.title,
        img: req.body.img,
        live: req.body.live,
        category: req.body.category
      }
    }).then(done => {
      res.send(done)
    })
  },
  new: (req, res) => {
    console.log(req.body)
    db.blogs.create({
      username: req.body.username,
      blog: "<p>New Blog</p>",
      title: req.body.title,
      live: false,
      views: 0,
      category: 'Reading'
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
  updateViews: (req, res) => {
    db.blogs.updateOne({ _id: req.body.id }, {
      $set: {
        views: req.body.views
      }
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
  },
  search: (req, res) => {
    const regex = new RegExp(escapeRegex(req.params.search), 'gi');
    // let allBlogs = []
    db.blogs.find({ $and: [{ title: { $regex: regex, $options: 'i' } }, { category: { $regex: regex, $options: 'i' } }] }).then(blogs => {
      res.send(blogs)
    })
    // db.blogs.fuzzySearch(query).then(blogs => {
    //   res.send(blogs)
    // })
  }

}

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};