import { MdOutlineEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import "./style.scss";
import { motion as m, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { fetchAboutMe, fetchResume } from "../../database/fetchData";
const AboutMe = () => {
  const [bio, setBio] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAboutMe();
        setBio(data.bio);
        const url = await fetchResume();
        setResumeUrl(url);
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
      <m.h1 initial={{ x: "-100%" }}
        animate={inView ? { x: "0%" } : { x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ><span></span>About</m.h1>
      <div className="content">
        <div className="bio">
          <div className="sub-heading">Who AM I</div>
          <m.p initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >{bio}
          </m.p>
          <div className="btn-download">
            <a href={resumeUrl} target="_blank">Download Resume</a>
          </div>
          <div className="contacts">
            <div className="card"><Email /><span>Email</span>hardikgehlot2303@gmail.com</div>
            <div className="card"><Phone /><span>Phone</span>+91-9096706395</div>
          </div>
          <div className="links">
            <a href="https://leetcode.com/hardikgehlot2303/"><SiLeetcode /></a>
            <a href="https://auth.geeksforgeeks.org/user/hardikgehlot"><SiGeeksforgeeks /></a>
            <a href="https://www.codechef.com/users/code_hardik23"><SiCodechef /></a>
          </div>
        </div>
        <div className="aboutme-image">
          <div className="border"></div>
          <img src={process.env.PUBLIC_URL + "/Profile.jpg"} />
        </div>
      </div>
    </div>
  )
}
export default AboutMe;
