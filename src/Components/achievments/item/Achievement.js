import "./style.scss";
import {FaAward} from "react-icons/fa";
import {AiFillStar} from "react-icons/ai";
import {SiLeetcode, SiGeeksforgeeks} from "react-icons/si";
import {RiThumbUpFill} from "react-icons/ri";

const Achievement = ({obj}) => {
  function getIcon(type){
    if(type === "medal"){
      return (<FaAward/>);
    }else if(type === "star"){
      return (<AiFillStar/>);
    }else if(type === "leetcode"){
      return (<SiLeetcode/>);
    }else if(type === "gfg"){
      return (<SiGeeksforgeeks/>);
    }else{
      return (<RiThumbUpFill/>);
    }
  }
  return (
    <div id="achievement">
        <div className="number">{obj.number}</div>
        <div className="separator"/>
        <div className="right">
            {getIcon(obj.icon)}
            <div className="text">{obj.text}</div>
        </div>
    </div>
  )
}
export default Achievement;
