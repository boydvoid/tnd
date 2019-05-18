import React, { Component } from 'react';
import BlogEditor from '../../Components/BlogEditor/BlogEditor';
import AdminNav from '../../Components/AdminNav/AdminNav';
import Navbar from '../../Components/Navbar/Navbar'
import PBtn from '../../Components/PBtn/PBtn';

const NewBlog = (props) => {
		return(
			<div className="container-fluid">
				<Navbar position="right" title="Admin">
					<PBtn onClick={props.logout}>Logout</PBtn>
				</Navbar>
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
