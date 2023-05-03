import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
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
            <VscChromeClose onClick={() => {
              setMobileMenu(false)
            }} />
          ) : (
            <SlMenu onClick={()=> {setMobileMenu(true)}} />
          )
        }
      </div>
    </div>
  )
}
export default Navbar;
//   return (
//     <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
//       <ContentWrapper>
//         <div className="logo" onClick={()=>navigate("/")}>
//           <img src={logo} alt="movix" />
//         </div>
//         <ul className="menuItems">
//           <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
//           <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
//           <li className="menuItem"><HiOutlineSearch onClick={openSearch}/></li>
//         </ul>
//         <div className="mobileMenuItems">
//           <HiOutlineSearch onClick={openSearch} />
//           {
//             mobileMenu ? (
//               <VscChromeClose onClick={() => {
//                 setMobileMenu(false)
//               }} />
//             ) : (
//               <SlMenu onClick={openMobileMenu} />
//             )
//           }
//         </div>
//       </ContentWrapper>
//       {showSearch && <div className="searchBar">
//         <ContentWrapper>
//           <div className="searchInput">
//             <input type="text"
//               placeholder='search for movies or tv shows...'
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyUp={searchQueryHandler}
//             />
//             <VscChromeClose onClick={() => {
//               setShowSearch(false)
//             }} />
//           </div>
//         </ContentWrapper>
//       </div>}
//     </header>
//   );
// };

// export default Header;
