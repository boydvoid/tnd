import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PBtn from '../Components/PBtn/PBtn'
import Input from '../Components/Input/Input'
import IconNav from '../Components/IconNav/IconNav';
const Contact = (props) => {


	return(
		<div className="contact">
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
			<IconNav/>
		</div>
	)
	
}

export default Contact;