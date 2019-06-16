import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import BookIcon from '../../assets/BookIcon.png'
import Calc from '../../assets/calc.png'
import Light from '../../assets/light.png'
import Mug from '../../assets/mug.png'
import Pencil from '../../assets/pencil.png'
import './IconNav.css'
const IconNav = (props) => (
	<div className="icon-nav">
		<img src={Logo} alt="" className="logo"/>	
		<span className="ml-auto icon-nav-right">
			<ul>
				<li><Link to="/reading" className="icon-link-tags"><img src={BookIcon} className="icons" alt=""/>Reading</Link></li>
				<li><Link to="/writing-grammar" className="icon-link-tags"><img src={Pencil} className="icons" alt=""/>Writing & Grammar</Link></li>
				<li><Link to="/math" className="icon-link-tags"><img src={Calc} className="icons" alt=""/>Math</Link></li>
				<li><Link to="/holidays" className="icon-link-tags"><img src={Mug} className="icons" alt=""/>Holidays</Link></li>
				<li><Link to="/classroom-ideas" className="icon-link-tags"><img src={Light} className="icons" alt=""/>Classroom Ideas</Link></li>
			</ul>	
		</span>
	</div>

)

export default IconNav;