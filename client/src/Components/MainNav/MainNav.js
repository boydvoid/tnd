import React from 'react';
import {Link} from 'react-router-dom'
import './MainNav.css'
import Input from '../Input/Input';
const MainNav = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-purple">
		 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
	<div class="collapse navbar-collapse" id="navbarNav">
			<span className="ml-auto">
				<ul>
					<li> <Link to="/">Home</Link> </li>
					<li> <Link to="/my-blog">Blog</Link> </li>
					<li> <a href="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" target="_blank">My Store</a> </li>
					<li> <Link to="/teacher-freebies">Teacher Freebies</Link> </li>
					<li> <Link to="/meet-jenn">Meet Jenn</Link> </li>
					<li> <Link to="/contact-me">Contact Me</Link> </li>
					<li> <a href="https://www.facebook.com/TheTeacherNextDoor" target="_blank"><i class="fab fa-facebook" ></i></a> </li>
					<li> <a href="https://www.instagram.com/theteachernextdoor/" target="_blank"><i class="fab fa-instagram" ></i></a> </li>
					<li> <a href="https://www.pinterest.com/TeacherNextDoor/" target="_blank"><i class="fab fa-pinterest-square" ></i></a> </li>
					<li> <a href="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door" target="_blank">TpT</a> </li>
					<li><Input className="searchBar" type="text" placeholder="Search..."/></li>
				</ul>
			</span>
	</div>
		</nav>
	) 
}

export default MainNav;