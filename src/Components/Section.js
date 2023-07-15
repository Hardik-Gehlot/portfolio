import AboutMe from "./aboutme/AboutMe";
import ContactMe from "./contact/ContactMe";
import Education from "./education/Education";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Achievements from "./achievments/Achievements";
const Section = () => {
  return (
    <>
        <Home/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects/>
        <Achievements/>
        <ContactMe/>
    </>
  )
}

export default Section;
