import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="connect">
      <div className="number">
        <p>Contact Me</p>
        <p id="phone-number">+91 7070835551</p>
        <p>abuosamasports@gmail.com</p>
        <div className="cont">
          <a target="_blank" rel='noreferrer' href="https://github.com/moneer824">
            <i className="fab fa-github"></i>
          </a>

          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/moneer-ashraf-7a4475218/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel='noreferrer' href="https://twitter.com/HMTS64801432">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
      No © copyright issues | Designed and developed by Abu Osama 
      </div>
    </div>
  );
}
