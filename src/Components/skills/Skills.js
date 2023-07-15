import Skill from "./skill/Skill";
import "./style.scss";
import { useEffect, useState } from "react";
import { fetchSkills } from "../../database/fetchData";
const Skills = () => {
    const [skills, setSkills] = useState(null);
    const[jsxToRender,setJsxToRender] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSkills();
                setSkills(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (skills !== null) {
            let jsx = Object.keys(skills).map(key => {
                const obj = skills[key];
                return (
                    <Skill key={key} image={obj.img} title={obj.name} />
                );
            });
            setJsxToRender(jsx);
        }
    }, [skills]);
    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="skilldiv">
                <div className="items">
                    {(jsxToRender!=null)?jsxToRender:""}
                </div>
            </div>
        </div>
    )
}
export default Skills;