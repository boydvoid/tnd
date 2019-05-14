const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

const blogSchema = new Schema ({
	username: {type: String, required: true }, 
	blog: {type: String, required: true}, 
	title: {type: String, required: true}, 
	date: {type: Date, default: new Date()}
})

const blogs = mongoose.model('blogs', blogSchema)
module.exports = blogs;