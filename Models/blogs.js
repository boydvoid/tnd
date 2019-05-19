const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

const blogSchema = new Schema ({
	username: {type: String, required: true }, 
	blog: {type: String, required: true}, 
	title: {type: String, required: true}, 
	date: {type: String, default: convertDate()},
	img: {type: String, required: false},
	live: {type: Boolean, required: true},
  views: {type: Number, required: true},
  category: {type: String, required: true}
})

function convertDate() {
	const date = new Date().toDateString()
	return date
}
const blogs = mongoose.model('blogs', blogSchema)
module.exports = blogs;
