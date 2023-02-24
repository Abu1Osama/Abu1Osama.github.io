import React from "react";
import "./NavBar.scss";
import img from "./pic2.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const uncheck = () => {
    setTimeout(() => {
      document.getElementById("checker").checked = false;
    }, 1000);
  };
  const resumedown = () => {
      window.open("https://drive.google.com/file/d/1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc/view?usp=sharing", "_blank");
      

 
  };

  return (
    <nav id="nav-menu" className="container">
      <div className="logo">Osama</div>
      <input type="checkbox" name="" id="checker" />
      <label htmlFor="checker">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li onClick={uncheck}>
          <a className="nav-link home" href="#home">
            <i className="far fa-address-card"></i> Home
          </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          <a className="nav-link about" href="#about">
            <i className="far fa-address-card"></i> About
          </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          <a className="nav-link skills" href="#skills">
            <i className="fas fa-sitemap"></i> Skills
          </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          <a className="nav-link projects" href="#projects">
            <i className="fas fa-laptop"></i> Projects
          </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          <a className="nav-link contact" href="#contact">
            <i className="fas fa-laptop"></i> Contact
          </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          <Link className="nav-link resume" to="https://drive.google.com/uc?export=download&id=1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc">
            <button
          id="resume-button-1" 
            style={{
              background: "none",
              border: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={resumedown}
          >
             <i style={{marginRight:"5px"}} className="far fa-file-alt"></i> 
              Resume
            {/* <a
              id=""
              className="nav-link resume"
              rel="noreferrer"
              href=""
            >
             

            {/* </a> */}
          </button></Link>
          <div></div>
        </li>
      </ul>
      <div>
        <div className="navanimate"></div>
      </div>
    </nav>
  );
}
