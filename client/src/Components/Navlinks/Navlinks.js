import React from "react";
import { Link } from "react-router-dom";
import PBtn from "../PBtn/PBtn";
import SearchBar from "../SearchBar/SearchBar";

const Navlinks = props => (
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
      <PBtn link="/teacher-freebies" external={false}>
        Teacher Freebies
      </PBtn>
    </li>
    <li>
      <PBtn link="/meet-jenn" external={false}>
        Meet Jenn
      </PBtn>
    </li>
    <li>
      <PBtn link="/contact-me" external={false}>
        Contact Me
      </PBtn>
    </li>
    <li>
      <PBtn link="https://www.facebook.com/TheTeacherNextDoor" external={true}>
        <i className="fab fa-facebook"></i>
      </PBtn>
    </li>
    <li>
      <PBtn
        link="https://www.instagram.com/theteachernextdoor/"
        external={true}
      >
        <i className="fab fa-instagram"></i>
      </PBtn>
    </li>
    <li>
      <PBtn link="https://www.pinterest.com/TeacherNextDoor/" external={true}>
        <i className="fab fa-pinterest-square"></i>
      </PBtn>
    </li>
    <li>
      <PBtn
        link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
        external={true}
      >
        TpT
      </PBtn>
    </li>
    <li>
      <SearchBar history={props.history} />
    </li>
  </ul>
);

export default Navlinks;
