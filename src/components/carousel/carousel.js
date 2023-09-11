import MainBanner1 from "../../images/Main-Banner1.jpg";
import MainBanner2 from "../../images/Main-Banner2.jpg";
import MainBanner3 from "../../images/Main-Banner31.jpg";
import { Link } from "react-router-dom";

import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import React from 'react';

const Carousel1 = () => {
  const images = [
    {
      id: 1,
      src: MainBanner1,
      alt: "First Slide"
    },
    {
      id: 2,
      src: MainBanner2,
      alt: "Second Slide"
    },
    {
      id: 3,
      src: MainBanner3,
      alt: "Third Slide"
    }
  ];

  return (
    <div className="carousel">
    <Carousel controls="true">
      {images.map((imageSlide) => (
        <Carousel.Item key={imageSlide.id}>
          <Link to="/">
            <img
              src={imageSlide.src}
              className="img-fluid w-100"
              alt={imageSlide.alt}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
 
};

export default Carousel1;
