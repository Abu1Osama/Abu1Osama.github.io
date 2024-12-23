import React from "react";
import "./SkillComponents.scss";

export default function SkillComponents(props) {
  return (
    <div id="skillcorrect" className="skill-comp skills-card">
      {/* <img src={props.img} alt="" /> */}
      <i data-aos="fade-left" className={props.icon + " skills-card-img"}></i>

      <p data-aos="fade-right" className="skills-card-name">
        {props.name}
      </p>
    </div>
  );
}
