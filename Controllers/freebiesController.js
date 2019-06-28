const db = ('../Models')

module.exports = {
  getAll: () => {
    //get all of the freebies
    db.freebies.find({
    }).then(done => {
      res.send(done)
    })
  },
  getCategory: (req, res) => {
    //get a certain category of freebies
    db.freebies.find({
      category: req.params.category
    })
  }
}