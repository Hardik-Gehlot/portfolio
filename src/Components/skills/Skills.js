import firebase from "../../assets/images/firebase.png";
import blockchain from "../../assets/images/blockchain.png";
import css3 from "../../assets/images/css3.png";
import html5 from "../../assets/images/html5.png";
import javascript from "../../assets/images/javascript.png";
import mongodb from "../../assets/images/mongodb.png";
import mysql from "../../assets/images/mysql.png";
import react from "../../assets/images/react.png";
import spring from "../../assets/images/spring-boot.png";
import android from "../../assets/images/android.png";
import git from "../../assets/images/git.png";
import php from "../../assets/images/php.svg";
import nodejs from "../../assets/images/node-js.svg";
import java from "../../assets/images/java.svg";
import docker from "../../assets/images/docker.svg";
import kubernates from "../../assets/images/kubernates.svg";
import Skill from "./skill/Skill";
import "./style.scss";
const Skills = () => {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="skilldiv">
                <div className="items">
                    <Skill image={git} title="Git" />
                    <Skill image={java} title="Java" />
                    <Skill image={android} title="Android Development" />
                    <Skill image={docker} title="Docker" />
                    <Skill image={kubernates} title="Kubernates" />
                    <Skill image={html5} title="HTML" />
                    <Skill image={css3} title="CSS" />
                    <Skill image={javascript} title="JS" />
                    <Skill image={react} title="React" />
                    <Skill image={nodejs} title="Nodejs" />
                    <Skill image={mongodb} title="MongoDB" />
                    <Skill image={mysql} title="MySQL" />
                    <Skill image={firebase} title="Firebase" />
                    <Skill image={php} title="php" />
                    <Skill image={spring} title="Spring" />
                    <Skill image={blockchain} title="Blockchain Development" />
                </div>
            </div>
        </div>
    )
}
export default Skills;