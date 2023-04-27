const Project = ({obj}) => {
    var arr = [];
    for(let i=0;i<obj.desc.length;i++){
      arr.push(<li>{obj.desc[i]}</li>);
    }
    return (
      <div className="item">
        <h3 className="title">{obj.title}</h3>
        <ul className="desc">{arr}</ul>
      </div>
    )
  }
  export default Project;