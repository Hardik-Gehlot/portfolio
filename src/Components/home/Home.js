import Button from "../Button";
import profile from "../../assets/images/profile.png";
import Lottie from 'react-lottie';
import "./style.scss";
import hiAnimation from "../../assets/images/hi.json";
import winkAnimation from "../../assets/images/wink.json";
const Home = () => {
    const hi = {
        loop: true,
        autoplay: true,
        animationData: hiAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const wink = {
        loop: true,
        autoplay: true,
        animationData: winkAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    function handleClick() {
        const home = document.getElementById("contactme");
        home.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div id="home">
            <div className="profileimg">
                <div>
                <div className="circle"></div>
                <img src={profile}></img>
                </div>
            </div>
            <div className="intro">
                <ul>
                    <li className="first"><div className="lottie"><Lottie options={hi}/></div>I'm </li>
                    <li className="name">Hardik Gehlot <div className="lottie"><Lottie options={wink}/></div></li>
                    <li className="title"><div>Android & Web Developer</div></li>
                    <li className="btnDiv"><Button text={"Contact Me"} alternateText={"Stay Connected"} onClick={handleClick}></Button></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Home;
