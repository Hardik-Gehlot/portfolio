import music from "../assets/images/music.png";
import gym from "../assets/images/gym.png";
import cricket from "../assets/images/cricket.png";
import coding from "../assets/images/coding.png";
const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="content">
        <h1>About Me</h1>
        <p>Software Engineer with excellent problem solving skills and ability to perform well in a team. Passionate about Coding, Ambitious, Energetic, Good Learner.</p>
        <h2>Hobbies</h2>
        <div className="hobbies">
          <img src={cricket}></img>
          <img src={gym}></img>
          <img src={coding}></img>
          <img src={music}></img>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
