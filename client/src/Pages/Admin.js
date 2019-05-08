import React, { Component } from 'react';
import BlogEditor from '../Components/BlogEditor/BlogEditor';

class Admin extends Component {
	render () {
		return(
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<BlogEditor/>
					</div>
				</div>
			</div>
		)
	}
}

export default Admin;