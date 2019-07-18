import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import api from "../utils/api";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import AboutSection from "../Components/AboutSection/AboutSection";
import "./FreebiesRegister.css";
import FreebieLogin from "../Components/FreebieLogin/FreebieLogin";
import Footer from "../Components/Footer/Footer";
import Navlinks from "../Components/Navlinks/Navlinks";
const FreebiesReg = props => {
  useEffect(() => {
    //api call
  }, []);

  return (
    <div className="freebies wrapper-freebies">
      <Navbar position="right">
        <Navlinks />
      </Navbar>
      <IconNav />

      <div className="container-fluid">
        <div className="row">
          <FreebieLogin register={false} />
          {/* login bar */}
          <div className="container">
            <div className="freebies-title">
              <h2>
                Want to access a FREE library of rdesources for upper elementary
                classrooms?
              </h2>
            </div>
            <div className="col-xl-12">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                aperiam, rerum accusantium, eveniet quia sint eius adipisci
                corporis eum deserunt voluptatum molestiae hic rem nisi atque,
                sed sapiente labore cum. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dicta, iusto quo? Perferendis, architecto
                quidem corrupti hic distinctio eos molestiae aliquid! Placeat
                adipisci enim est dolores cum autem minima dignissimos dolorem.
              </p>
            </div>
          </div>
          <ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!" />
          <AboutSection />
          <div className="col-xl-12">
            {/* footer */}
            <Footer>
              <ul>
                <li>
                  <PBtn link="/" external={false}>
                    Home
                  </PBtn>
                </li>
                <li>
                  <PBtn link="/my-blog" external={false}>
                    Blog
                  </PBtn>
                </li>
                <li>
                  <PBtn
                    link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
                    external={true}
                  >
                    My Store
                  </PBtn>
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
                  <Input
                    className="searchBar"
                    type="text"
                    placeholder="Search..."
                  />
                </li>
              </ul>
            </Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreebiesReg;
