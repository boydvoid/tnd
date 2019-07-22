import React, { useState, useEffect } from "react";
import AdminNav from "../../Components/AdminNav/AdminNav";
import PBtn from "../../Components/PBtn/PBtn";
import { Link } from "react-router-dom";
import "./Admin.css";
import api from "../../utils/api";
import Navbar from "../../Components/Navbar/Navbar";
import SideMenu from "./SideMenu";
import AdminPattern from "../../Components/AdminPattern/AdminPattern";
const Admin = props => {
  const [blogs, setBlogs] = useState([]);
  const [th, setTh] = useState([
    "Number",
    "Title",
    "Created By",
    "Date",
    "Views",
    "Live",
    "Category"
  ]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    api.loadBlogs().then(data => {
      setBlogs(data.data);
    });
  };

  const newBlog = () => {
    let data = {
      username: props.username,
      title: "New Blog",
      img: "",
      live: false,
      views: 0,
      category: "Reading"
    };
    api.newBlog(data).then(done => {
      console.log(done);
      loadBlogs();
    });
  };

  return (
    <div className="container-fluid admin">
      <AdminNav title="Admin Panel">
        <PBtn onClick={props.logout}>Logout</PBtn>
      </AdminNav>
      <div className="container">
        <div className="row-contained">
          <div className="col-xl-12">
            <div className="blogs">
              <div className="blogs-header-bar">
                <h2>Blogs</h2>
                <span className="ml-auto">
                  <PBtn className="createNew" onClick={newBlog}>
                    <i className="fas fa-plus"></i>
                  </PBtn>
                </span>
              </div>
            </div>
            <div className="row-contained">
              <div className="col-xl-3">
                <p>Title</p>
              </div>
              <div className="col-xl-1">
                <p>Date</p>
              </div>
              <div className="col-xl-1">
                <p>Views</p>
              </div>
              <div className="col-xl-1">
                <p>Live</p>
              </div>
              <div className="col-xl-2">
                <p>Categories</p>
              </div>
            </div>
            {blogs.map((blog, index) => {
              return (
                <div className="row-contained">
                  <div className="blogDisplay">
                    <div className="col-xl-3">
                      <Link to={`/admin/blog/${blog._id}`}>{blog.title}</Link>
                    </div>
                    <div className="col-xl-1">{blog.date}</div>
                    <div className="col-xl-1">{blog.views}</div>
                    <div className="col-xl-1">{blog.live.toString()}</div>
                    <div className="col-xl-2">{blog.category}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AdminPattern />
    </div>
  );
};

export default Admin;
