import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import api from "../utils/api";
import { Link } from "react-router-dom";
import "./Blogs.css";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import Navlinks from "../Components/Navlinks/Navlinks";
const Blogs = props => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(undefined);
  useEffect(() => {
    setCategory(props.category);
    api.loadBlogs().then(blogs => {
      setBlogs(blogs.data);
    });
  }, [props.category]);

  return (
    <div className="blogs">
      <Navbar position="right">
        <Navbar position="right">
          <Navlinks />
        </Navbar>
      </Navbar>
      <IconNav />
      <ConvertKit />
      <div className="container-fluid">
        <div className="row">
          {blogs.map((blog, index) => {
            if (blog.live) {
              if (category !== undefined) {
                let bCategory = blog.category.toLowerCase().split(",");
                console.log(bCategory);
                return (
                  <div className="col-xl-3" key={index}>
                    <img className="slider-img" src={blog.img} alt="" />
                    <p>
                      <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </p>
                  </div>
                );
              } else {
                return "";
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
