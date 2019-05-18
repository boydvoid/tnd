import React, { useState, useEffect } from 'react';
import IconNav from '../Components/IconNav/IconNav'
import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Slider from '../assets/freebies-slider.jpg'
import ConvertKit from '../Components/ConvertKit/ConvertKit';
import CollectionSlider from '../Components/CollectionSlider/CollectionSlider';
import BlogSlider from '../Components/BlogSlider/BlogSlider'
import api from '../utils/api';
import './Home.css'
import Navbar from '../Components/Navbar/Navbar';
import PBtn from '../Components/PBtn/PBtn'
import Input from '../Components/Input/Input'
const Home = (props) => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		api.loadBlogs().then(blogs => {
			setBlogs(blogs.data)
		})
	}, [])
	
		return (
			<div className="wrapper-home">
				<Navbar position="right">
					<ul>
						<li> <PBtn link="/" external={false}>Home</PBtn> </li>
						<li> <PBtn link="/my-blog"external={false}>Blog</PBtn> </li>
						<li> <PBtn link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" external={true}>My Store</PBtn> </li>
						<li> <PBtn link="/teacher-freebies"external={false}>Teacher Freebies</PBtn> </li>
						<li> <PBtn link="/meet-jenn"external={false}>Meet Jenn</PBtn> </li>
						<li> <PBtn link="/contact-me"external={false}>Contact Me</PBtn> </li>
						<li> <PBtn link="https://www.facebook.com/TheTeacherNextDoor" external={true}><i className="fab fa-facebook" ></i></PBtn> </li>
						<li> <PBtn link="https://www.instagram.com/theteachernextdoor/" external={true}><i className="fab fa-instagram" ></i></PBtn> </li>
						<li> <PBtn link="https://www.pinterest.com/TeacherNextDoor/" external={true}><i className="fab fa-pinterest-square" ></i></PBtn> </li>
						<li> <PBtn link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" external={true}>TpT</PBtn> </li>
						<li><Input className="searchBar" type="text" placeholder="Search..."/></li>
					</ul>
				</Navbar>
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