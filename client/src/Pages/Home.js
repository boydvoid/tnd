import React, { useState, useEffect } from "react";
import IconNav from "../Components/IconNav/IconNav";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Slider from "../assets/freebies-slider.jpg";
import ConvertKit from "../Components/ConvertKit/ConvertKit";
import CollectionSlider from "../Components/CollectionSlider/CollectionSlider";
import BlogSlider from "../Components/BlogSlider/BlogSlider";
import api from "../utils/api";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import SocialClips from "../Components/SocialClips/SocialClips";
import AboutSection from "../Components/AboutSection/AboutSection";
import SearchBar from "../Components/SearchBar/SearchBar";
import Navlinks from "../Components/Navlinks/Navlinks";
const Home = props => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.loadBlogs().then(blogs => {
      setBlogs(blogs.data);
    });
  }, []);

  return (
    <div className="wrapper-home">
      <Navbar position="right">
        <Navlinks />
      </Navbar>
      <IconNav />
      <Jumbotron mainImage={Slider} />
      <ConvertKit title="Join my newsletter and gain access to a library of FREE resources for upper elementary grades!" />
      <CollectionSlider />
      <BlogSlider blogs={blogs} />
      <SocialClips />
      <AboutSection />
      <Footer>
        <Navlinks />
      </Footer>
    </div>
  );
};

export default Home;
