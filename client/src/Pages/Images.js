import React, { useState, useEffect } from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import PBtn from "../Components/PBtn/PBtn";
import { Link } from "react-router-dom";
import "./Admin.css";
import api from "../utils/api";
import AdminPattern from "../Components/AdminPattern/AdminPattern";
import Upload from "../Components/Upload";
const Images = props => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    api.loadImages().then(data => {
      setImages(data.data);
    });
  };

  return (
    <div className="container-fluid admin">
      <AdminNav />
      <Upload />
      <div className="container">
        <div className="row-contained">
          <div className="col-xl-12">
            <div className="blogs">
              <div className="blogs-header-bar">
                <h2>Images</h2>
                <span className="ml-auto">
                  {/* <PBtn className="createNew" onClick={newBlog}>
                    <i className="fas fa-plus"></i>
                  </PBtn> */}
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
            {/* {images.map((blog, index) => {
              return (
                <div className="row-contained">
                  <div className="blogDisplay">
                    <div className="col-xl-3">
                      <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </div>
                    <div className="col-xl-1">{blog.date}</div>
                    <div className="col-xl-1">{blog.views}</div>
                    <div className="col-xl-1">{blog.live.toString()}</div>
                    <div className="col-xl-2">{blog.category}</div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
