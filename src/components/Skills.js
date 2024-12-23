import React from "react";

import "./Skills.scss";
import SkillComponents from "./SkillComponents";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <p>Skills and Tools</p>
      <div className="tools">
        <SkillComponents name="HTML" icon="cib-html5" />
        <SkillComponents name="CSS" icon="cib-css3-shiled" />
        <SkillComponents name="JS" icon="cib-js" />
        <SkillComponents name="BOOTSTRAP" icon="cib-bootstrap" />
        <SkillComponents name="REACT" icon="cib-react" />
        <SkillComponents name="REDUX" icon="cib-redux" />
        <SkillComponents name="SASS" icon="cib-sass " />
        <SkillComponents name="NODE js" icon="cib-node-js" />
        <SkillComponents name="TYPESCRIPT" icon="cib-typescript" />
        <SkillComponents name="MONGODB" icon="cib-mongodb" />
        <SkillComponents name="NEXT . JS" icon="cib-next-js" />
        <SkillComponents name="POSTMAN" icon="cib-postman" />
        <SkillComponents name="POSTGRESQL" icon="cib-postgresql" />
        <SkillComponents name="VS-CODE" icon="cib-visual-studio-code" />
        <SkillComponents name="INTELLIJIDEA" icon="cib-intellijidea" />
        <SkillComponents name="FIGMA" icon="cib-figma" />
        <SkillComponents name="GITHUB" icon="cib-github" />
        <SkillComponents name="JAVA" icon="cib-java" />
        <SkillComponents name="AMAZON AWS" icon="cib-amazon-aws" />
        <SkillComponents name="SPRING" icon="cib-spring" />
        <SkillComponents name="TEMPORAL" icon="cib-react" />
        <SkillComponents name="TERRAFORM" icon="cib-terraform" />
      </div>
    </div>
  );
}
