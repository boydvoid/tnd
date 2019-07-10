import React, { useState, useEffect } from "react";
import PBtn from "../PBtn/PBtn";
import "./FreebieLogin.css";
import P from "../P/p";
const FreebieLogin = props => {
  if (props.register === true) {
    return (
      <div className="container-fluid freebie-login">
        <P>Sign up for my newsletter!</P>
        <PBtn
          link="/teacher-freebies"
          className="primary-button"
          external={false}
        >
          Register for Freebies
        </PBtn>
      </div>
    );
  } else {
    return (
      <div className="container-fluid freebie-login">
        <P>Have you already joined the newsletter?</P>
        <PBtn link="/my-freebies" className="primary-button" external={false}>
          Login
        </PBtn>
      </div>
    );
  }
};

export default FreebieLogin;

//TYgg8lXToCzj3_E7q4JnLw
//988284
