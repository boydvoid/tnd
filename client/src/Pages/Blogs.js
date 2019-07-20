import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import api from "../utils/api";
import { Link } from "react-router-dom";
import "./Blogs.css";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import InfiniteScroll from "react-infinite-scroller";
import FreebiesReg from "./FreebiesRegister";
import FreebieLogin from "../Components/FreebieLogin/FreebieLogin";
import Navlinks from "../Components/Navlinks/Navlinks";
const Blogs = props => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState(undefined);
  useEffect(() => {
    setCategory(props.category);
    if (props.category === undefined) {
      //search here for query
      if (window.location.href.includes("q")) {
        //search param
        let query = window.location.href.split("q=")[1];
        api.search(query).then(blogs => {
          console.log(blogs);
          setBlogs(blogs.data);
        });
      } else {
        console.log("loading");
        api.loadBlogs().then(blogs => {
          setBlogs(blogs.data);
        });
      }
    } else {
      console.log("loading");
      let query = window.location.href.split("/")[3];
      console.log(query);
      api.categorySearch(query).then(blogs => {
        setBlogs(blogs.data);
      });
    }
  }, [props.category]);

  return (
    <div className="blogs">
      <Navbar position="right">
        <Navlinks />
      </Navbar>
      <IconNav />
      <FreebieLogin register={true} />
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => {
            if (blog.live) {
              if (category !== undefined) {
                let bCategory = blog.category.toLowerCase().split(",");
                if (bCategory.includes(category)) {
                  console.log(bCategory);
                  return (
                    <div className="col-xl-4" key={index}>
                      <img className="slider-img" src={blog.img} alt="" />
                      <p>
                        <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                      </p>
                    </div>
                  );
                }
              } else {
                return (
                  <div className="col-xl-4" key={index}>
                    <img className="slider-img" src={blog.img} alt="" />
                    <p>
                      <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </p>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
