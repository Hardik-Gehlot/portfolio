import "./style.scss";
const Skill = ({image,title}) => {
  return (
    <div className="skill-item">
      <img src={image} />
      <h4 className="title">{title}</h4>
    </div>
  )
}
export default Skill;