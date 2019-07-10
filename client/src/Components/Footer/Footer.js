import React from "react";
import "./Footer.css";
import P from "../P/p";
const Footer = props => {
  return (
    <nav className={`navbar navbar-expand-lg ${props.className}`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* left */}
        <P className="copyright">Copyright The Teacher Next Door 2019</P>
        <span className="ml-auto">{props.children}</span>
      </div>
    </nav>
  );
};

export default Footer;
