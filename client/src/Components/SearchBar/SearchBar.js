import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import api from "../../utils/api";
import PBtn from "../PBtn/PBtn";
import { Redirect } from "react-router-dom";
const SearchBar = props => {
  const [searchBox, setBox] = useState("");
  //fuzzy search all blogs here
  const handleChange = e => {
    setBox(e.target.value);
  };
  return (
    <form action="/my-blog">
      <Input
        className="searchBar"
        type="text"
        placeholder="Search..."
        name="q"
        onChange={handleChange}
      />
      <PBtn type="submit">
        <i className="fas fa-search"></i>
      </PBtn>
    </form>
  );
};

export default SearchBar;
