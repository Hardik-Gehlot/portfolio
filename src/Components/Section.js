import AboutMe from "./aboutme/AboutMe";
import ContactMe from "./contact/ContactMe";
import Education from "./education/Education";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
const Section = () => {
  return (
    <>
        <Home/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Projects/>
        <ContactMe/>
    </>
  )
}

export default Section;
