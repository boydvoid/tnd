import React from "react";
import PBtn from "../PBtn/PBtn";
import "./AdminNav.css";
import api from "../../utils/api";
import { Link } from "react-router-dom";
const logout = () => {
  api.logout();
  window.location.reload();
};

const AdminNav = props => (
  <nav className={`container-fluid admin-navbar ${props.className}`}>
    <span className="title">Admin Panel</span>

    <div id="navbarNav">
      <ul>
        <li className="active">
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
        <li>Freebies</li>
        <li>Go to Site</li>
      </ul>
    </div>
    <span className="ml-auto">
      <PBtn onClick={logout}>Logout</PBtn>
    </span>
  </nav>
);

export default AdminNav;
