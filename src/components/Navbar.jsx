import React, { useState } from "react";
import { Link as Link1 } from "react-scroll";
import logo from "../../public/images/logo1.png";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link1 to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="logo" />
      </Link1>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
        <ul>
          <li>
            <Link1 to="main" smooth={true} duration={2000}>
              Header
            </Link1>
          </li>
          <li>
            <Link1 to="products" smooth={true} duration={2000}>
              Products
            </Link1>
          </li>
          <li>
            <Link1 to="about" smooth={true} duration={2000}>
              About
            </Link1>
          </li>
          <li>
            <Link1 to="contact" smooth={true} duration={2000}>
              Contact
            </Link1>
          </li>
        </ul>
      </label>
    </nav>
  );
};

export default Navbar;
