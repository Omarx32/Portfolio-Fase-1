// import React from "react";
// import style from "./nav.module.css";
// import { Link } from "react-scroll";

// export const NavBar = () => {
//   return (
//     <nav className={`flex justify-around items-center fixed ${style.nav} text-xl`}>
//       <div className="-mr-36 ml-24 text-3xl">Omar Sampayo</div>
//       <div className="lg:hidden">hola </div>
//       <ul className="flex ml-16">
//         <li className="mr-8">
//           <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
//             <button>Home</button>
//           </Link>
//         </li>
//         <li className="mr-8">
//           <Link to="exterprise" spy={true} smooth={true} offset={0} duration={500}>
//             <button>My Exterprise</button>
//           </Link>
//         </li>
//         <li className="mr-8">
//           <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
//             <button>Experience</button>
//           </Link>
//         </li>
//         <li className="mr-8">
//           <Link to="contactme" spy={true} smooth={true} offset={0} duration={500}>
//             <button>Contact Me</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
import { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

export const  NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    setAnimate(!animate);
  };

  const handleLinkClick = () => {
    setIsActive(false);
    setAnimate(!animate);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <h2 className="nav-h2">Omar Sampayo</h2>
          <ul className="nav-ul">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div className={`bar1 ${animate ? "firstAnimateBar1" : ""}`}></div>
            <div className={`bar2 ${animate ? "firstAnimateBar2" : ""}`}></div>
            <div className={`bar3 ${animate ? "firstAnimateBar3" : ""}`}></div>
          </div>
        </nav>
      </header>
      <nav className={`mobile-nav ${isActive ? "active" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          HOME
        </a>
        <a href="#about" onClick={handleLinkClick}>
          ABOUT
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          PROJECTS
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          CONTACT
        </a>
      </nav>
    </>
  );
}
