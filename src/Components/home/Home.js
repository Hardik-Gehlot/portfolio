import Button from "../Button";
import profile from "../../assets/images/profile.png";
import "./style.scss";
const Home = () => {
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
                    <li className="first">Hi I'm </li>
                    <li className="name">Hardik Gehlot </li>
                    <li className="title"><div>Android & Web Developer</div></li>
                    <li className="btnDiv"><Button text={"Contact Me"} alternateText={"Stay Connected"} onClick={handleClick}></Button></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Home;
