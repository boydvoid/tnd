import React, { Component } from 'react';
import MainNav from '../Components/MainNav/MainNav';
import IconNav from '../Components/IconNav/IconNav'
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Slider from '../assets/freebies-slider.jpg'
import ConvertKit from '../Components/ConvertKit/ConvertKit';
import CollectionSlider from '../Components/CollectionSlider/CollectionSlider';
import BlogSlider from '../Components/BlogSlider/BlogSlider'
import api from '../utils/api';
import './Home.css'
class Home extends Component {
	state={
		blogs: []
	}
	componentDidMount() {
		api.loadBlogs().then(blogs => {
			this.setState({
				blogs: blogs.data
			})
		})
	}
	render () {
		return (
			<div className="wrapper-home">
				<MainNav/>	
				<div className="container-fluid">
					<IconNav />
					<Jumbotron mainImage={Slider}/>
					<ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!"/>
					<BlogSlider blogs={this.state.blogs}/>
				</div>
			</div>
		)
	}
}

export default Home;