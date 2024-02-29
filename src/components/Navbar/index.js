import AnchorLink from "react-anchor-link-smooth-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

import "./index.css";

const Navbar = () => {
  const onClickHamburger = () => {
    let mobileNav = document.getElementById("mobileNavoptions");
    mobileNav.classList.toggle("show");
  };

  return (
    <>
      <div className="nav-bg-container">
        <div className="nav-container">
          <p className="nav-name-logo">Portfolio</p>
          <RxHamburgerMenu
            className="hamburger-icon"
            onClick={onClickHamburger}
          />
          <ul className="nav-options-container">
            <AnchorLink href="#aboutMe" className="nav-option">
              <li>About Me</li>
            </AnchorLink>
            <AnchorLink href="#skills" className="nav-option">
              <li>Skills</li>
            </AnchorLink>
            <AnchorLink href="#education" className="nav-option">
              <li>Education</li>
            </AnchorLink>
            <AnchorLink href="#certifications" className="nav-option">
              <li>Certifications</li>
            </AnchorLink>
            <AnchorLink href="#projects" className="nav-option">
              <li>Projects</li>
            </AnchorLink>
          </ul>
        </div>
        <ul id="mobileNavoptions" className="nav-options-mobile-container">
          <AnchorLink href="#aboutMe" className="nav-option mobile-option">
            <li>About Me</li>
          </AnchorLink>
          <AnchorLink href="#skills" className="nav-option mobile-option">
            <li>Skills</li>
          </AnchorLink>
          <AnchorLink href="#education" className="nav-option mobile-option">
            <li>Education</li>
          </AnchorLink>
          <AnchorLink
            href="#certifications"
            className="nav-option mobile-option"
          >
            <li>Certifications</li>
          </AnchorLink>
          <AnchorLink href="#projects" className="nav-option mobile-option">
            <li>Projects</li>
          </AnchorLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
