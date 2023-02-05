import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";
import Trip7 from "./Projects-pic/Trip7.png";
import Trip12 from "./Projects-pic/Trip12.jpeg";
import Trip9 from "./Projects-pic/Trip9.png";
import Trip10 from "./Projects-pic/trip10.jpeg";
import zara11 from "./Projects-pic/zara11.jpeg";
import zara12 from "./Projects-pic/zara12.jpeg";
import zara13 from "./Projects-pic/zara13.jpeg";
import zara19 from "./Projects-pic/zara19r.jpeg";
import shop12 from "./Projects-pic/shop12.jpeg";
import shop14 from "./Projects-pic/shop14.jpeg";
import shop15 from "./Projects-pic/shop15.jpeg";
import shop17 from "./Projects-pic/shop17.jpeg";

export default function ProjectComponents() {
  const project1 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project2 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project3 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];

  // let object_img = {
  //   img1: Trip,
  //   img2: ZaRa,
  //   img3: Shop,
  // };

  let Project_data = [
    {
      title: "Tripadivisor_Clone",
      description:
        "In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage.",
      arr:  project1,
      github: "https://github.com/Abu1Osama/august-wool-9387",
      website: "https://abu1osama.github.io/august-wool-9387/",
      object_img: {
        img1: Trip7,
        img2: Trip12,
        img3: Trip9,
        img4: Trip10,
      }
    },
    {
      title: "Zara_Clone",
      description:
        "In this project we have tried to make a look alike clone of Zara.com. some of the functionality we have added are home page, payment page, slider, navbar, pop up, drop down",
      arr: project2 ,
      github: "https://github.com/i-m-prince/beneficial-jelly-4258",
      website: "https://tubular-concha-7a9bfb.netlify.app/",
      object_img: {
        img1: zara11,
        img2: zara12,
        img3: zara13,
        img4: zara19,
      },
    },
    {
      title:"Shopclues_Clone",
      description:"In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage.",
      arr:project3,
      github:"https://github.com/Abu1Osama/close-hand-543",
      website:"https://yousamuniverse-abu1osama.vercel.app/",
      object_img: {
        img1: shop12,
        img2: shop14,
        img3: shop15,
        img4: shop17,
      },
    }
  ];

  return (
    <div className="all-projects" id="recent-work">
      <p>Recent Work</p>
      {Project_data.map((item, index) => (
        <Projects
        key={index}
        preview={item.object_img}
        title={item.title}
        description={item.description}
        arr={item.arr}
        github={item.github}
        website={item.website}
      />


      ))}

     
      {/* <Projects
      preview={ZaRa}
        title="Zara_Clone"
        description="In this project we have tried to make a look alike clone of Zara.com. some of the functionality we have added are home page, payment page, slider, navbar, pop up, drop down"
        arr={project2}
        github="https://github.com/i-m-prince/beneficial-jelly-4258"
        website="https://tubular-concha-7a9bfb.netlify.app/"
      />
       <Projects
      preview={Shop}
        title="Shopclues_Clone"
        description="In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage."
        arr={project3}
        github="https://github.com/Abu1Osama/close-hand-543"
        website="https://yousamuniverse-abu1osama.vercel.app/"
      /> */}
    </div>
  );
}
