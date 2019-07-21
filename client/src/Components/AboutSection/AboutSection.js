import React from "react";
import Jenn from "../../assets/jennphoto.png";
import "./AboutSection.css";
import PBtn from "../PBtn/PBtn";
const AboutSection = props => {
  return (
    <div className="container about padding-top-30">
      <div className="row">
        <div className="col-xl-2">
          <img className="profile-img" src={Jenn} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 padding-30">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa quiofficia deserunt mollit anim id est laborum."
          </p>
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
