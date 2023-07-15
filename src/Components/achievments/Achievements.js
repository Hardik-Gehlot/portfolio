import "./style.scss";
import { useState, useEffect } from "react";
import { fetchAchievements } from "../../database/fetchData";
import Achievement from "./item/Achievement";
const Achievements = () => {
  const [achievements, setAchievements] = useState({});
  const [jsxToRender, setJsxToRender] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAchievements();
        setAchievements(data);
        console.info(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (achievements !== null) {
      let jsx = Object.keys(achievements).map(key => {
        const obj = achievements[key];
        return (
          <Achievement key={key} obj={obj}/>
        );
      });
      setJsxToRender(jsx);
    }
  }, [achievements]);
  return (
    <div id="achievements">
      {jsxToRender && jsxToRender}
    </div>
  )
}
export default Achievements;
