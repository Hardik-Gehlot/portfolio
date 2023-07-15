import "./style.scss";
import {CiMobile2 as Mobile} from "react-icons/ci";
import {SlScreenDesktop as Other} from "react-icons/sl";
import {BsGlobe as Web} from "react-icons/bs";
const Project = ({ obj, counter }) => {
  var arr = [];
  var tech = [];
  const desc = obj.description.split("~");
  for (let i = 0; i < desc.length; i++) {
    arr.push(<li>{desc[i]}</li>);
  }
  if (obj.technology) {
    const technology = obj.technology.split(',');
    for (let i = 0; i < technology.length; i++) {
      tech.push(<span className="techItem">{technology[i]}</span>);
    }
  }
  function getIcon(category){
    if(category=="android"){
      return (
        <div className="icon"><Mobile/></div>
      );
    }else if(category=="web"){
      return (
        <div className="icon"><Web/></div>
      );
    }else{
      return (
        <div className="icon"><Other/></div>
      );
    }
  }
  const formattedValue = String(counter).padStart(2, '0');
  return (
    <div className="project-item">
      <div className="top">
        {getIcon(obj.category)}
        <div className="text">
          <div className="counter">{formattedValue}</div>
          <h3 className="title">{obj.name}</h3>
        </div>
      </div>
      <div className="middle">
        <h6 className="time">{obj.time}</h6>
        <ul className="desc">{arr}</ul>
        <div className="technology">{tech}</div>
      </div>
      <div className="actions">
        <div className="probtn github" onClick={() => window.open(obj.code)}>Code</div>
        {
          obj.weblink && <div className="probtn preview" onClick={() => window.open(obj.weblink)}>preview </div>
        }
      </div>
    </div>
  )
}
export default Project;