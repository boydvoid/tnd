import React, { useState, useEffect } from "react";
import PBtn from "../PBtn/PBtn";
import "./CollectionSlider.css";
import Slider from "react-slick";
const CollectionSlider = props => {
  const [items, setItems] = useState([
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
    },
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
    },
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
    },
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
    },
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588"
    },
    {
      img:
        "https://ecdn.teacherspayteachers.com/thumbitem/Nonfiction-Reading-Games-Reading-Centers-3244260-1547399353/original-3244260-1.jpg",
      link:
        "https://www.teacherspayteachers.com/Product/Inferences-Using-Literature-for-3rd-5th-Grades-935588",
      name: "Link Name"
    }
  ]);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false
  };
  return (
    <div className="container-fluid grey border-bottom padding-30">
      <div className="container">
        <div className="row-contained">
          <Slider {...settings}>
            {items.map((item, index) => {
              return (
                <div className="col-xl-2 slider-item" key={index}>
                  <img src={item.img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="row">
          <div className="col-xl-2">
            <PBtn>Visit My Shop</PBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
