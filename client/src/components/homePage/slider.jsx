import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = ["/slide1.png", "/slide2.jpg", "/slide3.jpg", "/slide4.jpg"];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={goToPreviousSlide} className="nav-btn prev-btn rounded-full w-[45px] h-[45px] flex justify-center items-center">
        <svg
          width="16"
          height="24"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <button onClick={goToNextSlide} className="nav-btn next-btn rounded-full w-[45px] h-[45px] flex justify-center items-center">
        <svg
          width="16"
          height="24"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <img src="" alt="" />
    </div>
  );
}

export default Slider;
