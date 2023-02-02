import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            I am a Full-Stack Web Developer from India. Self motivated and curious with a keen interest in building user friendly products. Looking forward to applying technical skills like CSS,MERN and JAVASCRIPT to all the organisations that I offer my services to and help the organisation grow and develop alongside me.
            </p>
        </div>
    )
}
