import React from "react";
import Projects from "./Projects.js";
import "./ProjectComponents.scss";
import A1 from "./Projects-pic/A1.png"
import A2 from "./Projects-pic/A2.png"
import A3 from "./Projects-pic/A3.png"
import A4 from "./Projects-pic/A4.png"

import B1 from "./Projects-pic/B1.png"
import B2 from "./Projects-pic/B2.png"
import B3 from "./Projects-pic/B3.png"
import B4 from "./Projects-pic/B4.png"

import C1 from "./Projects-pic/C1.png"
import C2 from "./Projects-pic/C2.png"
import C3 from "./Projects-pic/C3.png"
import C4 from "./Projects-pic/C4.png"

import movie1 from "./Projects-pic/movie1.png";
import movie2 from "./Projects-pic/movie2.png";
import movie3 from "./Projects-pic/movie3.png";
import movie4 from "./Projects-pic/movie4.png";

export default function ProjectComponents() {
  const project1 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project2 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project3 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js","fab fa-react"];
  const project4 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js","fab fa-react"];

  // let object_img = {
  //   img1: Trip,
  //   img2: ZaRa,
  //   img3: Shop,
  // };

  let Project_data = [
    {
      title: "Tripadivisor_Clone",
      description:
        "In this project I have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.some of the functionality I have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage.",
      arr:  project1,
      github: "https://github.com/Abu1Osama/august-wool-9387",
      website: "https://abu1osama.github.io/august-wool-9387/",
      object_img: {
        img1: A1,
        img2: A2,
        img3: A3,
        img4: A4,
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
        img1: B1,
        img2: B2,
        img3: B3,
        img4: B4,
      },
    },
    {
      title:"Shopclues_Clone",
      description:"In this project we have tried to make a look alike clone of ShopClues.com, i have used React.Js & styling using css,chakra UI and tried to make website more dynamic and responsive. Data is developed using Json server.",
      arr:project3,
      github:"https://github.com/Abu1Osama/close-hand-543",
      website:"https://yousamuniverse-abu1osama.vercel.app/",
      object_img: {
        img1: C1,
        img2: C2,
        img3: C3,
        img4: C4,
      },
    },
    {
      title:"Movies_info",
      description:"Website  to search any movies including its trailer and teaser,i have made this project using React.js,Data is Developed using Api.",
      arr:project4,
      github:"https://github.com/Abu1Osama/Movieapp_info",
      website:"https://movieapp-info.vercel.app/",
      object_img: {
        img1: movie1,
        img2: movie2,
        img3: movie3,
        img4: movie4,
      },
    }
  ];

  return (
    <div id="projects" className="all-projects project-card" >
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
