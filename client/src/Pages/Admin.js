import React, { Component } from 'react';
import AdminNav from '../Components/AdminNav/AdminNav';
import PBtn from '../Components/PBtn/PBtn';
import {Link} from 'react-router-dom'
import './Admin.css'
import api from '../utils/api';
class Admin extends Component {
	state={
		blogs: [] 
	}

	componentDidMount() {
		this.loadBlogs();
	}

	loadBlogs = () => {
		api.loadBlogs().then(data => {
			console.log(data)
			this.setState({
				blogs: data.data
			})
		});
	}

	newBlog = () => {
		let data = {
			username: this.props.username,
			title: 'New Blog',
			img: ''
		}
		api.newBlog(data).then(done => {
			console.log(done)
			this.loadBlogs();

		});
	}

	render () {
		return(
			<div className="container-fluid admin">
				<AdminNav logout={this.props.logout}/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							Admin Home
							<PBtn onClick={this.newBlog}>New Blog</PBtn>

							<div className="blogs">
							<h2>Blogs</h2>	
							<table class="table">
								<thead>
									<tr>
										<th scope="col">Number</th>
										<th scope="col">Title</th>
										<th scope="col">Created By</th>
										<th scope="col">Date</th>
										<th scope="col">Views</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.blogs.map((blog,index) => {
											return (
												<tr>
													<th scope="row">{index + 1}</th>
													<td><Link to={`/admin/blog/${blog._id}`}>{blog.title}</Link></td>
													<td>{blog.username}</td>
													<td>{blog.date}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Admin;
