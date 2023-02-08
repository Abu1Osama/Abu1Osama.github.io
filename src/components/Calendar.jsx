import React from 'react'
import Githubcalendar from "react-github-calendar"
import {Tooltip} from 'react-tooltip'

const Calendar=()=> {
  return (
    <div className='react-activity-calendar' style={{width:"90%" ,margin:"auto"}}>
<Githubcalendar
username="abu1osama"
color="#16DB94"
>
{/* <Tooltip delayHide={30} html /> */}

</Githubcalendar>

    </div>
  )
}

export default Calendar