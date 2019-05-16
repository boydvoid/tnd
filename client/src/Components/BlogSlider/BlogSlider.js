import React from 'react';
import './BlogSlider.css'
import {Link} from 'react-router-dom'
const BlogSlider = (props) => (
	<div className="container-fluid">
		<div className="row">
		{
			props.blogs.map((blog, index) => {
				if(blog.live){

					return (
						<div className="col-xl-4">
							<img className="slider-img" src={blog.img} alt=""/>	
							<p><Link to={`/blog/${blog._id}`}>{blog.title}</Link></p>
						</div>
				)
			}
			})
		}
		</div>	
	</div>
)

export default BlogSlider;