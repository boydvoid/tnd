import React from 'react';
import './Footer.css'
const Footer = (props) => {
	return (
		<nav>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				{/* left */}
				<p>Copyright The Teacher Next Door 2019</p>
				<span className='mr-auto'>
					{props.children}
				</span>
			</div>
		</nav>
	)
}

export default Footer;