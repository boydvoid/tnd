import React from 'react';
import Logo from '../../assets/logo.PNG'
import './IconNav.css'
const IconNav = (props) => (
	<div className="icon-nav">
		<img src={Logo} alt=""/>	
		<span className="ml-auto">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>	
		</span>
	</div>
)

export default IconNav;