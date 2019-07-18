import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import Navlinks from "../Components/Navlinks/Navlinks";
const Meet = props => {
  return (
    <div className="meet">
      <Navbar position="right">
        <Navlinks />
      </Navbar>
      <IconNav />
    </div>
  );
};

export default Meet;
