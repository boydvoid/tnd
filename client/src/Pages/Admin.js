import React, { Component } from 'react';
import AdminNav from '../Components/AdminNav/AdminNav';
import PBtn from '../Components/PBtn/PBtn';
import {Link} from 'react-router-dom'
import './Admin.css'
class Admin extends Component {


	render () {
		return(
			<div className="container-fluid admin">
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
