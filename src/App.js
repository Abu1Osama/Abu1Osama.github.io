import Navbar from "./components/Navbar.js";
import "./App.scss";
import AboutMe from "./components/AboutMe.js";
import MyDetails from "./components/MyDetails.js";
import Skills from "./components/Skills.js";
import ProjectComponents from "./components/ProjectComponents.js";
import Contact from "./components/Contact.js";
import Githubcal from "./components/Githubcal.jsx";

function App() {
  return (
    <div id="HOME">
      <div className="empty"  ></div>
      <div>
        <Navbar />
        <AboutMe />
        <MyDetails />
        <ProjectComponents />
        <Skills />
        <Githubcal/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
