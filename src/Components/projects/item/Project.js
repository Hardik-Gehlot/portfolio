import "./style.scss";
const Project = ({ obj }) => {
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
  return (
    <div className="project-item">
      <h3 className="title">{obj.name}</h3>
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