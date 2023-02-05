import React from "react";
import "./AboutMe.css";
import img from "./pic2.png";
import tree from "./skill-logo/fogtree.jpg";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="fog">
        <img src={tree} alt="" />
      </div>
      <div className="info">
        <p>Hey there!</p>
       <div className="content">
       <p>I am Abu Osama</p>
       <p>I am Abu Osama</p>
       </div>
         <a href="#connect"><button> Connect </button></a>
        {/* <p>Aspiring full stack web developer at Masai school. Self motivated and curious with a keen interest in building user friendly products. Looking forward to applying technical skills like CSS,MERN and JAVASCRIPT to all the organisations that I offer my services to and help the organisation grow and develop alongside me.</p> */}
      </div>

      <div className="image">
        <div className="white">
          <img src={img} alt="Abu Osama" />
        </div>
      </div>
    </div>
  );
}
