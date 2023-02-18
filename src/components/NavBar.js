import React from "react";
import "./NavBar.scss";
import img from "./pic2.png";

export default function Navbar() {
  const uncheck = () => {
      setTimeout(() => {
          document.getElementById("checker").checked = false;
    }, 1000);
  };
  const resumedown=()=>{
    setTimeout(()=>{

      window.open("./Abu-resume.pdf","_blank")
    },5000)
   
    // https://drive.google.com/file/d/1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc/view?usp=sharing

  }

  return (
    <nav id="nav-menu" className="container">
      <div className="logo">Osama</div>
      <input type="checkbox" name="" id="checker" />
      <label htmlFor="checker">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li onClick={uncheck}>
          {" "}
          <i className="far fa-address-card"></i> <a className="nav-link home" href="#home"> Home </a>{" "}
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="far fa-address-card"></i> <a className="nav-link about" href="#about"> About </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="fas fa-sitemap"></i> <a className="nav-link skills" href="#skills"> Skills </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="fas fa-laptop"></i>{" "}
          <a className="nav-link projects" href="#projects"> Projects </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="fas fa-laptop"></i>{" "}
          <a className="nav-link contact" href="#contact"> Contact </a>
          <div></div>
        </li>
        <li id="resume-button-1" onClick={uncheck}>
          {" "}
          <button style={{background:"none",border: "none",fontWeight: "bold",fontSize:"16px"}} onClick={resumedown}>

          <i className="far fa-file-alt"></i>
          <a 
          id="resume-link-1"
          className="nav-link resume"
          rel="noreferrer"
          href="https://drive.google.com/uc?export=download&id=1yAYMLTd488BqmOcYf3EYalF8DzxpEWfc"
          
          >
            {" "}
            Resume{" "}
          </a>{" "}
            </button>
          <div></div>
        </li>
      </ul>
      <div>
        <div className="navanimate"></div>
      </div>
    </nav>
  );
}
