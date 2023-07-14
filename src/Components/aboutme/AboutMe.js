import music from "../../assets/images/music.png";
import gym from "../../assets/images/gym.png";
import cricket from "../../assets/images/cricket.png";
import coding from "../../assets/images/coding.png";
import "./style.scss";
import { motion as m, useInView } from "framer-motion";
import { useRef, useState,useEffect} from "react";
import { fetchAboutMe } from "../../database/fetchData";
const AboutMe = () => {
  const [bio, setBio] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAboutMe();
        setBio(data.bio);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div id="aboutme" ref={ref} >
      <div className="content">
        <m.h1 initial={{ x: "-100%" }}
          animate={inView ? { x: "0%" } : { x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >About Me</m.h1>
        <m.p initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >{bio}
        </m.p>
        <h2>Hobbies</h2>
        <div className="hobbies">
          <div className="images">
            <img src={cricket}></img>
            <img src={gym}></img>
            <img src={coding}></img>
            <img src={music}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe;
