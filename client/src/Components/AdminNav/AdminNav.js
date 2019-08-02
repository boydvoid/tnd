import React from "react";
import PBtn from "../PBtn/PBtn";
import "./AdminNav.css";
const AdminNav = props => (
  <nav className={`container-fluid admin-navbar ${props.className}`}>
    <div className="container">
      <p className="title">{props.title}</p>

      <div id="navbarNav">
        <ul>
          <li>Blogs</li>
          <li>Slider Images</li>
          <li>Freebies</li>
          <li>Go to Site</li>
        </ul>
      </div>
      <span className="ml-auto">{/* logout */}</span>
    </div>
  </nav>
);

export default AdminNav;
