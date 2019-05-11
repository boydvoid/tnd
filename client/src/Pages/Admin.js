import React, { Component } from 'react';
import AdminNav from '../Components/AdminNav/AdminNav';
import PBtn from '../Components/PBtn/PBtn';
import {Link} from 'react-router-dom'
class Admin extends Component {

	newBlog = () => {
		window.location.href('/admin/newBlog')
	}
	render () {
		return(
			<div className="container-fluid">
				<AdminNav />
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							Admin Home
							<Link to="/admin/newblog">New Blog</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Admin;
