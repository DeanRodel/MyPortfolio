import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Home from "../../img/home.png";
import HomeReact from "../../img/homeReact.png";
import Fullstack from "../../img/fullstack.png";
import ReactNew from "../../img/ReactNew.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="home">
       
        Front-end using HTML, CSS, and Bootstrap
       
          <img src={Home} alt="home using HTML, CSS, Bootstrap" />
          <br/>
          <a href="https://deanrodel.github.io/ProjectPortfolio/" className="link">Click Here</a>
        </SwiperSlide>

        <SwiperSlide className="home">
        Front-end using ReactJS
          <img src={HomeReact} alt="Home using Reactjs" />
          <br/>
          <a href="https://deanrodel.github.io/ProjectPortfolio/" className="link">Click Here</a>
        </SwiperSlide>

        <SwiperSlide className="home">
        Fullstack Project
          <img src={Fullstack} alt="Fullstack project" />
          <br/>
          <a href="https://fullstack-capstone3-capstone3-final-seven.vercel.app/" className="link">Click Here</a>
        </SwiperSlide>

        <SwiperSlide className="home">
        Home page using ReactJS
          <img src={ReactNew} alt="Home page only" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
