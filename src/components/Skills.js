import React from 'react'

import"./Skills.css"
import SkillComponents from './SkillComponents'

export default function Skills() {
    return (
        <div className='skills' id='SKILLS'>
            <p>Skills and Tools</p>
            <div className="tools">

           <SkillComponents name ="HTML" icon="fab fa-html5"/>
           <SkillComponents name ="CSS" icon="fab fa-css3-alt"/>
           <SkillComponents name ="js" icon="fab fa-js"/>
           <SkillComponents name ="BOOTSTRAP" icon="fab fa-bootstrap"/>
         
           <SkillComponents  name ="REACT" icon="fab fa-react"/>
           <SkillComponents name ="NODE js" icon="fab fa-node-js"/>
            </div>
        </div>
    )
}
