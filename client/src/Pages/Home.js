import React, { useState, useEffect } from 'react';
import MainNav from '../Components/MainNav/MainNav';
import IconNav from '../Components/IconNav/IconNav'
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Slider from '../assets/freebies-slider.jpg'
import ConvertKit from '../Components/ConvertKit/ConvertKit';
import CollectionSlider from '../Components/CollectionSlider/CollectionSlider';
import BlogSlider from '../Components/BlogSlider/BlogSlider'
import api from '../utils/api';
import './Home.css'

const Home = (props) => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		api.loadBlogs().then(blogs => {
			setBlogs(blogs.data)
		})
	}, [])
	
		return (
			<div className="wrapper-home">
				<MainNav/>	
				<div className="container-fluid">
					<IconNav />
					<Jumbotron mainImage={Slider}/>
					<ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!"/>
					<BlogSlider blogs={blogs}/>
				</div>
			</div>
		)
	}

export default Home;