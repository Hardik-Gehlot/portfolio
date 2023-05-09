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
      <div className="logo">Hard<span>ik</span></div>
      <div className="menu">
        <a href="#home" onClick={()=>setMobileMenu(false)}>Home</a>
        <a href="#aboutme" onClick={()=>setMobileMenu(false)}>About</a>
        <a href="#education" onClick={()=>setMobileMenu(false)}>Education</a>
        <a href="#skills" onClick={()=>setMobileMenu(false)}>Skills</a>
        <a href="#projects" onClick={()=>setMobileMenu(false)}>Project</a>
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
