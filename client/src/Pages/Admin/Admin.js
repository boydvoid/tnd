import React, { useState, useEffect } from 'react';
import AdminNav from '../../Components/AdminNav/AdminNav';
import PBtn from '../../Components/PBtn/PBtn';
import {Link} from 'react-router-dom'
import './Admin.css'
import api from '../../utils/api';
const Admin = (props) => {
	const [blogs, setBlogs] = useState([]);
	const [th, setTh] = useState(['Number', 'Title', 'Created By', 'Date', 'Views', 'Live']);

	useEffect(() => {
		loadBlogs();
	}, [])

	const loadBlogs = () => {
		api.loadBlogs().then(data => {
			setBlogs(data.data)
		});
	}

	const newBlog = () => {
		let data = {
			username: props.username,
			title: 'New Blog',
			img: '',
			live: false
		}
		api.newBlog(data).then(done => {
			console.log(done)
			loadBlogs();

		});
	}

		return(
			<div className="container-fluid admin">
				<AdminNav logout={props.logout}/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							Admin Home
							<PBtn onClick={newBlog}>New Blog</PBtn>

							<div className="blogs">
							<h2>Blogs</h2>	
							<table class="table">
								<thead>
									<tr>
										{
											th.map((th, index) => {
												return (
													<th>{th}</th>
													)
												})	
											}
									</tr>
								</thead>
								<tbody>
									{
										blogs.map((blog,index) => {
											return (
												<tr>
													<th scope="row">{index + 1}</th>
													<td><Link to={`/admin/blog/${blog._id}`}>{blog.title}</Link></td>
													<td>{blog.username}</td>
													<td>{blog.date}</td>
													<td>{blog.views}</td>
													<td>{blog.live.toString()}</td>
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

export default Admin;

