const db = require('../Models')

module.exports = {

  addLink: (req, res) => {
    console.log(req.body)
    db.slider.create({
      title: req.body.title,
      img: req.body.img,
      link: req.body.link
    }).then(done => {
      res.send(done)
    })
  },
  retrieveLinks: (req, res) => {
    db.slider.find({
    }).then(done => {
      res.send(done)
    })
  },
}
