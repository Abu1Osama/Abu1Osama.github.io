import React from "react";
import "./Projects.css";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects(props) {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
  };
  return (
    <div className="projects">
      <div className="pro-img">
      <Slider {...settings}>
        <img src={props.preview.img1} alt="" />
        <img src={props.preview.img2} alt="" />
        <img src={props.preview.img3} alt="" />
      </Slider>
      </div>
      <div className="pro-info">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>Tech Stack</p>
        <div className="tech-used">
          {props.arr.map((e,i) => (
            <i className={e} key={i}></i>
          ))}
        </div>
        <div className="pro-btn">
          <a target="_blank" rel='noreferrer' href={props.website}>
            <button>Preview</button>
          </a>

          <a target="_blank" rel='noreferrer' href={props.github}>
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}
