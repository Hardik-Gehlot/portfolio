import fullStar from "../../../assets/images/star-full.png";
import halfStar from "../../../assets/images/star-half.png";
import emptyStar from "../../../assets/images/star-empty.png";
import "./style.scss";
const Skill = ({image,title,fullstars,isHalfstar}) => {
  var arr = [];
  return (
    <div className="skill-item">
      <img src={image} />
      <h4 className="title">{title}</h4>
    </div>
  )
}
export default Skill;