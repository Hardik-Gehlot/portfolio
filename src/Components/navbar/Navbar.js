import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.scss";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [top, setTop] = useState(true);
  window.addEventListener('scroll', function() {
    var scrollTop = this.window.scrollY;
    if (scrollTop === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  });
  return (
    <div className={`navbar ${mobileMenu ? 'mobileView' : ''} ${top ? 'top' : ''}`}>
      <div className="logo">H<span>ardik</span></div>
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
            <VscChromeClose onClick={()=> {setMobileMenu(false)}}/>
          ) : (
            <SlMenu onClick={()=> {setMobileMenu(true)}}/>
          )
        }
      </div>
    </div>
  )
}
export default Navbar;
