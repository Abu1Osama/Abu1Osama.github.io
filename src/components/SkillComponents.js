import React from 'react'
import"./SkillComponents.scss"

export default function SkillComponents(props) {
    return (
        <div className='skill-comp skills-card'>
            {/* <img src={props.img} alt="" /> */}
            <i className={props.icon + " skills-card-img"}></i>
            <p className='skills-card-name'>{props.name}</p>
        </div>
    )
}
