import Button from "../Button";
import { motion as m, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { fetchHome } from "../../database/fetchData";
const Home = () => {
    const [tagline, setTagline] = useState("Android & Web Developer");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHome();
                setTagline(data.tagline);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const ref = useRef(null);
    const inView = useInView(ref);
    function handleClick() {
        const home = document.getElementById("contactme");
        home.scrollIntoView({ behavior: "smooth" });
    }
    function handleResume(){

    }
    return (
        <div id="home" ref={ref}>
            <div className="background">
                <img src={process.env.PUBLIC_URL + "/background.jpg"}/>
                <div className="filter"></div>
            </div>
            <m.div initial={{ x: "100%" }}
                animate={inView ? { x: "0%" } : { x: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="intro">
                <ul>
                    <li className="first">Hello</li>
                    <li className="name">I'm Hardik Gehlot </li>
                    <li className="title"><div>{tagline}</div></li>
                    <li className="btnDiv"><Button text={"Contact Me"} alternateText={"Stay Connected"} onClick={handleClick}></Button></li>
                </ul>
            </m.div>

        </div>
    )
}

export default Home;
