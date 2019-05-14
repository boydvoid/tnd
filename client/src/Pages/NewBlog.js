import React, { Component } from 'react';
import BlogEditor from '../Components/BlogEditor/BlogEditor';
import AdminNav from '../Components/AdminNav/AdminNav';

class NewBlog extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render () {
		return(
			<div className="container-fluid">
				<AdminNav logout={this.props.logout}/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<BlogEditor username={this.props.username}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NewBlog;
