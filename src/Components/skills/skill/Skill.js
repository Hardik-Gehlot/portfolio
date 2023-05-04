import fullStar from "../../../assets/images/star-full.png";
import halfStar from "../../../assets/images/star-half.png";
import emptyStar from "../../../assets/images/star-empty.png";
import "./style.scss";
const Skill = ({image,title,fullstars,isHalfstar}) => {
  var arr = [];
  // for(let i=0;i<5;i++){
  //   if(i<fullstars){
  //     arr.push(<img src={fullStar}></img>);
  //   }else if(isHalfstar && i==fullstars){
  //     arr.push(<img src={halfStar}></img>);
  //   }else{
  //     arr.push(<img src={emptyStar}></img>);
  //   }
  // }
  return (
    <div className="item">
      <img src={image} />
      <h4 className="title">{title}</h4>
      {/* <div className="stars">
      {arr}
      </div> */}
    </div>
  )
}
export default Skill;