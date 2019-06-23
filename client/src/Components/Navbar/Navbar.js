import React from 'react';
import PBtn from '../PBtn/PBtn'
import Input from '../Input/Input'
import './Navbar.css'
const Navbar = (props) => {

	return (
		<nav className={`navbar navbar-expand-lg ${props.className}`}>
			{
				props.brand !== undefined ?
					<span>
						<PBtn link="/admin" >
							<img src={props.brand} width="30" height="30" alt="" />
						</PBtn>

						<span className="title">
							{props.title}
						</span>

					</span>
					:

					<span className="title">
						{props.title}
					</span>

			}
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				{
					props.position === "left" ?

						<span className='mr-auto'>
							{props.children}
						</span>
						:
						''
				}
				{

					props.position === 'right' ?
						<span className="ml-auto">
							{props.children}
						</span>
						:
						''
				}
			</div>
		</nav>
	)
}



export default Navbar;