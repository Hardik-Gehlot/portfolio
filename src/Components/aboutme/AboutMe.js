import music from "../../assets/images/music.png";
import gym from "../../assets/images/gym.png";
import cricket from "../../assets/images/cricket.png";
import coding from "../../assets/images/coding.png";
import "./style.scss";
const AboutMe = () => {
  return (
    <div id="aboutme">
      <div className="content">
        <h1>About Me</h1>
        <p>Software Engineer with excellent problem solving skills and ability to perform well in a team. Passionate about Coding, Ambitious, Energetic, Good Learner.</p>
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
