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
        <ul>
          <li>
            {" "}
            <PBtn link="/" external={false}>
              Home
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn link="/my-blog" external={false}>
              Blog
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn
              link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
              external={true}
            >
              My Store
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn link="/teacher-freebies" external={false}>
              Teacher Freebies
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn link="/meet-jenn" external={false}>
              Meet Jenn
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn link="/contact-me" external={false}>
              Contact Me
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn
              link="https://www.facebook.com/TheTeacherNextDoor"
              external={true}
            >
              <i className="fab fa-facebook"></i>
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn
              link="https://www.instagram.com/theteachernextdoor/"
              external={true}
            >
              <i className="fab fa-instagram"></i>
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn
              link="https://www.pinterest.com/TeacherNextDoor/"
              external={true}
            >
              <i className="fab fa-pinterest-square"></i>
            </PBtn>{" "}
          </li>
          <li>
            {" "}
            <PBtn
              link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
              external={true}
            >
              TpT
            </PBtn>{" "}
          </li>
          <li>
            <Input className="searchBar" type="text" placeholder="Search..." />
          </li>
        </ul>
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
