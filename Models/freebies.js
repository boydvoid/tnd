const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const Schema = mongoose.Schema

const freebieschema = new Schema ({
	link: {type: String, required: true}, 
	title: {type: String, required: true}, 
	date: {type: String, default: convertDate()},
	img: {type: String, required: false},
	live: {type: Boolean, required: true},
  category: {type: String, required: true}
})

function convertDate() {
	const date = new Date().toDateString()
	return date
}
const freebies = mongoose.model('freebies', freebieschema)
module.exports = freebies;
