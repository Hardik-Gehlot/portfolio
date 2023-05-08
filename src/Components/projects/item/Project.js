import "./style.scss";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";
const Project = ({ obj }) => {
  var arr = [];
  var tech = [];
  for (let i = 0; i < obj.desc.length; i++) {
    arr.push(<li>{obj.desc[i]}</li>);
  }
  if (obj.technology) {
    for (let i = 0; i < obj.technology.length; i++) {
      tech.push(<span className="techItem">{obj.technology[i]}</span>);
    }
  }
  return (
    <div className="project-item">
      <h3 className="title">{obj.title}</h3>
      <div className="middle">
        <h6 className="time">{obj.time}</h6>
        <ul className="desc">{arr}</ul>
        <div className="technology">{tech}</div>
      </div>
      <div className="actions">
        <div className="probtn github" onClick={() => window.open(obj.github)}><AiOutlineGithub /> Code</div>
        {
          obj.preview && <div className="probtn preview" onClick={() => window.open(obj.preview)}><AiFillEye /> preview </div>
        }
      </div>
    </div>
  )
}
export default Project;