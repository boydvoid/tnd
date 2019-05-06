import React, { Component } from 'react';
import MainNav from '../Components/MainNav/MainNav';
import IconNav from '../Components/IconNav/IconNav'
class Home extends Component {
	render () {
		return (
			<div className="wrapper">
				<MainNav/>	
				<div className="container-fluid">
					<IconNav />
				</div>
			</div>
		)
	}
}

export default Home;