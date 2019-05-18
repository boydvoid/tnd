import React, { Component } from 'react';
import PBtn from '../PBtn/PBtn';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
class CollectionSlider extends Component {
	state={
		images: ['https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg', 'https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg', 'https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg', 'https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg', 'https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg'], 
		links: [
			'https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588',
			'https://www.teacherspayteachers.com/Product/Cause-and-Effect-Informational-Text-3rd-Grade-Cause-and-Effect-1136395',
			'https://www.teacherspayteachers.com/Product/Inferences-Using-Informational-Text-4th-and-5th-Grade-Inferences-855807',
			'https://www.teacherspayteachers.com/Product/Nonfiction-Reading-Games-Bundle-for-4th-and-5th-Grades-3244260'
		
		
		]
	}
	render () {
		return (
			<div className="container-fluid grey">
		
			</div>
		)
	}
}

export default CollectionSlider;