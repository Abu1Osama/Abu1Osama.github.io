import React from 'react'
import"./SkillComponents.css"

export default function SkillComponents(props) {
    return (
        <div className='skill-comp'>
            {/* <img src={props.img} alt="" /> */}
            <i className={props.icon}></i>
            <p>{props.name}</p>
        </div>
    )
}
