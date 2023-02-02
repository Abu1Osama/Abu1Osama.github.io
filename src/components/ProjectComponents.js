import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.css";
import Trip from "./Projects-pic/Trip.png";
import Trip2 from "./Projects-pic/Trip2.png";
import Trip3 from "./Projects-pic/Trip3.png";
import Trip4 from "./Projects-pic/Trip4.png";
import ZaRa from "./Projects-pic/ZaRa.png";
import Shop from "./Projects-pic/Shop.png";

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
        img1: Trip,
        img2: Trip2,
        img3: Trip3,
        img4: Trip4,
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
        img1: Trip,
        img2: ZaRa,
        img3: Shop,
        img4: Trip4,
      },
    },
    {
      title:"Shopclues_Clone",
      description:"In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage.",
      arr:project3,
      github:"https://github.com/Abu1Osama/close-hand-543",
      website:"https://yousamuniverse-abu1osama.vercel.app/",
      object_img: {
        img1: Trip,
        img2: ZaRa,
        img3: Shop,
        img4: Trip4,
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
