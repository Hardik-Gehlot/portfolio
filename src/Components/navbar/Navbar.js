import { useState } from "react";
// import { SlMenu } from "react-icons/sl";
// import { VscChromeClose } from "react-icons/vsc";
import menu from "../../assets/icons/hamburger-menu.svg";
import close from "../../assets/icons/cross.svg";
import "./style.scss";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={`navbar ${mobileMenu ? 'mobileView' : ''}`}>
      <div className="logo">Port<span>fo</span>lio</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#aboutme">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Project</a>
      </div>
      <div className="mobileMenuItems">
        {
          mobileMenu ? (
            <img src={close} onClick={()=> {setMobileMenu(false)}}/>
          ) : (
            <img src={menu} onClick={()=> {setMobileMenu(true)}}/>
          )
        }
      </div>
    </div>
  )
}
export default Navbar;
