import React from "react";
import "./AboutMe.scss";
import img from "./pic2.png";
import tree from "./skill-logo/fogtree.jpg";

export default function AboutMe() {
  const openresume=()=>{
    window.open("https://drive.google.com/file/d/1q4__WeM1faZIwzqBAoUrIhp-2akqo78X/view?usp=sharing","_blank")
 }
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
       <button id="resume-button-2" onClick={openresume}><a id="resume-link-2" href="https://drive.google.com/file/d/1q4__WeM1faZIwzqBAoUrIhp-2akqo78X/view?usp=sharing"></a>Resume</button>
       </div>
         <a href="#connect"><button> Connect </button></a>
        {/* <p>Aspiring full stack web developer at Masai school. Self motivated and curious with a keen interest in building user friendly products. Looking forward to applying technical skills like CSS,MERN and JAVASCRIPT to all the organisations that I offer my services to and help the organisation grow and develop alongside me.</p> */}
      </div>

      <div className="image">
        <div className="white">
          <img className="home-img" src={img} alt="Abu Osama" />
        </div>
      </div>
    </div>
  );
}