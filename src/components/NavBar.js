import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  const uncheck = () => {
    document.getElementById("checker").checked = false;
  };
  return (
    <nav className="container">
      <div className="logo">Osama</div>
      <input type="checkbox" name="" id="checker" />
      <label htmlFor="checker">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li onClick={uncheck}>
          {" "}
          <i className="far fa-address-card"></i> <a href="#HOME"> Home </a>{" "}
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="far fa-address-card"></i> <a href="#ABOUT"> About </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="fas fa-sitemap"></i> <a href="#SKILLS"> Skills </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="fas fa-laptop"></i>{" "}
          <a href="#recent-work"> Projects </a>
          <div></div>
        </li>
        <li onClick={uncheck}>
          {" "}
          <i className="far fa-file-alt"></i>
          <a
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
