import React, { Component } from 'react';
import BlogEditor from '../../Components/BlogEditor/BlogEditor';
import AdminNav from '../../Components/AdminNav/AdminNav';


const NewBlog = (props) => {
		return(
			<div className="container-fluid">
				<AdminNav logout={props.logout}/>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<BlogEditor username={props.username}/>
						</div>
					</div>
				</div>
			</div>
		)
	}

export default NewBlog;
