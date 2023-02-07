import React from "react";
import "./NavBar.scss";

export default function Navbar() {
  const uncheck = () => {
      setTimeout(() => {
          document.getElementById("checker").checked = false;
    }, 1000);
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
          <i className="far fa-file-alt"></i>
          <a
          id="resume-link-1"
          className="nav-link resume"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1q4__WeM1faZIwzqBAoUrIhp-2akqo78X/view?usp=sharing"
          >
            {" "}
            Resume{" "}
          </a>{" "}
          <div></div>
        </li>
      </ul>
      <div>
        <div className="navanimate"></div>
      </div>
    </nav>
  );
}