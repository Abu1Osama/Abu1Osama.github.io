import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.scss";
import img from "./pic2.png";
import av from "./av.png";
import tree from "./skill-logo/fogtree.jpg";

export default function AboutMe() {
  const resumedown2 = () => {
    setTimeout(() => {
      window.open(
        " https://drive.google.com/file/d/1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc/view?usp=sharing",
        "_blank"
      );
    }, 5000);
  };
  //
  return (
    <div id="home" className="about">
      <div className="fog">
        <img src={tree} alt="" />
      </div>
      <div className="info">
        <p>Hey there!</p>
        <div className="content">
          <p id="user-detail-name">I am Abu Osama</p>
          <p>I am Abu Osama</p>
          <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc"
          >
            <button
              data-aos="slide-right"
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              onClick={resumedown2}
            >
              Resume
            </button>
          </Link>
        </div>
        <a style={{ marginTop: "10px" }} href="#contact">
          {" "}
          <button data-aos="slide-left"> Connect </button>{" "}
        </a>
        {/* <p>Aspiring full stack web developer at Masai school. Self motivated and curious with a keen interest in building user friendly products. Looking forward to applying technical skills like CSS,MERN and JAVASCRIPT to all the organisations that I offer my services to and help the organisation grow and develop alongside me.</p> */}
      </div>

      <div data-aos="flip-left" className="image">
        <div className="white">
          <img className="home-img" src={av} alt="Abu Osama" />
        </div>
      </div>
    </div>
  );
}
