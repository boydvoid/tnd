import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import PBtn from '../Components/PBtn/PBtn'
import Input from '../Components/Input/Input'
import IconNav from '../Components/IconNav/IconNav';
import api from '../utils/api';
import ConvertKit from '../Components/ConvertKit/ConvertKit';
import AboutSection from '../Components/AboutSection/AboutSection';
import './FreebiesRegister.css'
import FreebieLogin from '../Components/FreebieLogin/FreebieLogin';
const FreebiesReg = (props) => {


	useEffect(() =>{
		//api call
	}, [])


	return(
		<div className="freebies wrapper-freebies">
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

			<div className="container-fluid">
				<div className="row">
            <FreebieLogin/> 
            {/* login bar */}
            <div className="freebies-title">
              <h2>Want to access a FREE library of rdesources for upper elementary classrooms?</h2>
            </div>
          <div className="col-xl-12">
                <p>Enter your information on the form to join my email list! The first email you'll recieve will give you the password for the Free Resource Library!</p>

          </div>
          <ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!"/>
          <AboutSection />
          <div className="col-xl-12">
             {/* footer */}
          </div>
				</div>
			</div>
		</div>
	)
	
}

export default FreebiesReg;