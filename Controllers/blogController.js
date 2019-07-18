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
    const query = req.params.search.replace(/\+/g, " ")
    let allBlogs = []
    db.blogs.find({ $or: [{ title: { $regex: query, $options: 'i' } }, { blog: { $regex: query, $options: 'i' }}, { category: { $regex: query, $options: 'i' } } ] }).then(blogs => {
      res.send(blogs)
    })

  }

}
