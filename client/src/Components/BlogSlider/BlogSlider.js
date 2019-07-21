import React from "react";
import "./BlogSlider.css";
import { Link } from "react-router-dom";
const BlogSlider = props => (
  <div className="container padding-30">
    <div className="row-contained">
      {props.blogs.map((blog, index) => {
        if (blog.live && index < 8) {
          return (
            <div className="col-xl-3" key={index}>
              <img className="slider-img" src={blog.img} alt="" />
              <p>
                <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
              </p>
            </div>
          );
        }
      })}
    </div>
  </div>
);

export default BlogSlider;
