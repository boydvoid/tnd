import React from "react";
import PBtn from "../PBtn/PBtn";
import Input from "../Input/Input";
import "./Navbar.css";
const Navbar = props => {
  return (
    <nav className={`container-fluid navbar ${props.className}`}>
      <div className="container">
        {props.brand !== undefined ? (
          <span>
            <PBtn link="/admin">
              <img src={props.brand} width="30" height="30" alt="" />
            </PBtn>
            <span className="title">{props.title}</span>
          </span>
        ) : (
          <span className="title">{props.title}</span>
        )}

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
};

export default Navbar;
