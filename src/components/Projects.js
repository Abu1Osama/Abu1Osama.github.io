import React from "react";
import "./Projects.scss";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects(props) {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    // fade:true,
    adaptiveHeight:false,
    className:"sliderabc"
  };
  
  return (
    <div id="kaamkharaab" className="projects">
      <div className="pro-img">
      <Slider {...settings}>
        <img src={props.preview.img1} alt="" />
        <img src={props.preview.img2} alt="" />
        <img src={props.preview.img3} alt="" />
        <img src={props.preview.img4} alt="" />
      </Slider>
      </div>
      <div className="pro-info">
        <p className="project-title">{props.title}</p>
        <p className="project-description">{props.description}</p>
        <p>Tech Stack</p>
        <div className="tech-used project-tech-stack">
          {props.arr.map((e,i) => (
            <i className={e} key={i}></i>
          ))}
        </div>
        <div className="pro-btn">
          <a className="project-deployed-link" target="_blank" rel='noreferrer' href={props.website}>
            <button>Preview</button>
          </a>

          <a className="project-github-link" target="_blank" rel='noreferrer' href={props.github}>
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}