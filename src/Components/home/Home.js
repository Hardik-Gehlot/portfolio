import Button from "../Button";
import profile from "../../assets/images/profile.png";
import { motion as m, useInView} from "framer-motion";
import {useEffect, useRef, useState } from "react";
import "./style.scss";
import {fetchHome} from "../../database/fetchData";
const Home = () => {
    const [tagline,setTagline] = useState("");
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const data = await fetchHome();
              setTagline(data.tagline);
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    },[]);
    const ref = useRef(null);
  const inView = useInView(ref);
    function handleClick() {
        const home = document.getElementById("contactme");
        home.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div id="home" ref={ref}>
            <m.div initial={{opacity:0}}
            animate={inView ? {opacity:0.3} : {opacity:0}}
            transition={{duration:1,ease: "easeInOut"}}
            className="profileimg">
                <div>
                <div className="circle"></div>
                <img src={profile}></img>
                </div>
            </m.div>
            <m.div initial={{x:"100%"}}
            animate={inView ? {x:"0%"} :{x:"100%"}}
            transition={{duration:1,ease: "easeInOut"}}
            className="intro">
                <ul>
                    <li className="first">Hi I'm </li>
                    <li className="name">Hardik Gehlot </li>
                    <li className="title"><div>{tagline}</div></li>
                    <li className="btnDiv"><Button text={"Contact Me"} alternateText={"Stay Connected"} onClick={handleClick}></Button></li>
                </ul>
            </m.div>
            
        </div>
    )
}

export default Home;
