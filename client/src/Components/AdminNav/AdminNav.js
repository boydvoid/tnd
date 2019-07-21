import React from "react";
import PBtn from "../PBtn/PBtn";
import "./AdminNav.css";
const AdminNav = props => (
  <nav className={`container-fluid admin-navbar ${props.className}`}>
    <div className="container">
      <p className="title">{props.title}</p>

      <div id="navbarNav">
        {props.position === "left" ? (
          <span className="mr-auto">{props.children}</span>
        ) : (
          ""
        )}
        {props.position === "right" ? (
          <span className="ml-auto">{props.children}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  </nav>
);

export default AdminNav;
