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

import Mga from "./Projects-pic/Mga.png";
import Mgb from "./Projects-pic/Mgb.png";
import Mge from "./Projects-pic/Mge.png";
import Mgd from "./Projects-pic/Mgd.png";

import apple1 from "./Projects-pic/apple1.png";
import apple2 from "./Projects-pic/apple2.png";
import apple3 from "./Projects-pic/apple3.png";
import apple4 from "./Projects-pic/apple4.png";

export default function ProjectComponents() {
  const project1 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project2 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"];
  const project3 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js","fab fa-react"];
  const project4 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js","fab fa-react","fab fa-sass","fab fa-node-js"];
  const project5 = ["fab fa-html5", "fab fa-css3-alt", "fab fa-js","fab fa-react","fab fa-sass","fab fa-node-js",];

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
        "In this project we have tried to make a look alike clone of Zara.com.ZARA is a Spanish multi-national retail clothing chain. It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes.",
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
      title:"1Mg_clone",
      description:"Tata 1mg, previously 1mg, is a healthcare platform based in Gurugram, India. It provides services, including e-pharmacy, diagnostics, e-consultation and health content. .",
      arr:project4,
      github:"https://github.com/sunchushiva/erect-measure-8906",
      website:"https://frontend-abu1osama.vercel.app/",
      object_img: {
        img1: Mga,
        img2: Mgb,
        img3: Mge,
        img4: Mgd,
      },
    },
    {
      title:"Apple_clone",
      description:"Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers (PCs), portable and wearable devices. The company also offers software related services, accessories, and third-party digital content and applications.",

      arr:project5,
      github:"https://github.com/harry-io/teal-fuel-7913",
      website:"https://bolt-beryl.vercel.app/",
      object_img: {
        img1: apple1,
        img2: apple3,
        img3: apple2,
        img4: apple4,
      },
    }
  ];

  return (
    <div id="projects" className="all-projects " >
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

     
     
    </div>
  );
}
