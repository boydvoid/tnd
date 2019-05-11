import React, { Component } from 'react';
import BlogEditor from '../Components/BlogEditor/BlogEditor';
import AdminNav from '../Components/AdminNav/AdminNav';

class NewBlog extends Component {
	render () {
		return(
			<div className="container-fluid">
				<AdminNav />
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<BlogEditor/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NewBlog;
