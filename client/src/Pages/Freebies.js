import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PBtn from '../Components/PBtn/PBtn'
import Input from '../Components/Input/Input'
import IconNav from '../Components/IconNav/IconNav';
import api from '../utils/api';
const Freebies = (props) => {


	useEffect(() =>{
		//api call
	}, [])


	return(
		<div className="freebies">
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

			<div className="container">
				<div className="row">
					
				{
					props.loggedIn ?
					<div className="col-xl-12">
							<PBtn onClick={props.logout}>Logout</PBtn>
					</div>
					: 
					
					<div className="col-xl-12">
						<form className="login-form" action="/api/login" method="POST">
							<Input className="form-control" type="text" placeholder="Username" name="username"/>
							<Input className="form-control" type="password" placeholder="Password" name="password"/>
						<PBtn type="submit">Get Freebies</PBtn>
						</form>
					</div>
				}


				</div>
			</div>
		</div>
	)
	
}

export default Freebies;