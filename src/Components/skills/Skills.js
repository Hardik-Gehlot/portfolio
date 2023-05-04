import firebase from "../../assets/images/firebase.png";
import blockchain from "../../assets/images/blockchain.png";
import css3 from "../../assets/images/css3.png";
import html5 from "../../assets/images/html5.png";
import solidity from "../../assets/images/solidity.png";
import javascript from "../../assets/images/javascript.png";
import mongodb from "../../assets/images/mongodb.png";
import mysql from "../../assets/images/mysql.png";
import react from "../../assets/images/react.png";
import spring from "../../assets/images/spring-boot.png";
import hibernate from "../../assets/images/hibernate.png";
import android from "../../assets/images/android.png";
import git from "../../assets/images/git.png";
import Skill from "./skill/Skill";
import "./style.scss";
const Skills = () => {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="skilldiv">
                <div className="items">
                    <Skill fullstars={3} image={git} title="Git" />
                    <Skill fullstars={3} isHalfstar={true} image={android} title="Android Development" />
                    <Skill fullstars={3} image={html5} title="Web Development" />
                    <Skill fullstars={2} image={blockchain} title="Blockchain Development" />
                    <Skill fullstars={3} image={spring} title="Spring" />
                    <Skill fullstars={3} image={react} title="React" />
                    <Skill fullstars={3} image={mysql} title="MySQL" />
                    <Skill fullstars={2} image={firebase} title="Firebase" />
                    <Skill fullstars={3} image={hibernate} title="Hibernate" />
                    <Skill fullstars={3} isHalfstar={true} image={javascript} title="Data Structure & Algorithms" />
                </div>
            </div>
        </div>
    )
}
export default Skills;