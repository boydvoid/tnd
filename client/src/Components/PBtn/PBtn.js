import React from 'react';
import './PBtn.css'
import { Link } from 'react-router-dom'
const PBtn = (props) => (

	<React.Fragment>
		{
			props.link === undefined ?
				<button type={props.type} className={`primary-button ${props.className}`} onClick={props.onClick}>{props.children}</button>
				:
				""
		}
		{
			props.external ?
				<a href={props.link} className={`anchor ${props.className}`} target={props.external ? "_blank" : ""}>{props.children}</a>
				:
				""
		}

		{
			props.external === false ?
				<Link to={props.link} className={`anchor ${props.className}`} target={props.external ? "_blank" : ""}>{props.children}</Link>

				:
				""
		}
	</React.Fragment>

)

export default PBtn;