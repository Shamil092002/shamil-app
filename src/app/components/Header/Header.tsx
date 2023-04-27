import React from "react";
import "./styles.css";
import logo from "../../../assets/images/Logo.svg";
import lock from "../../../assets/images/Lock.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className="nav">
        <ul>
          <a className="nav-link">
            <li>DIETS</li>
          </a>
          <a href="#" className="nav-link">
            <li>CALORIE CALCULATOR</li>
          </a>
          <a className="nav-link" href="./menu.html">
            <li>MENU</li>
          </a>
          <a href="#" className="nav-link">
            <li>DELIVERY</li>
          </a>
          <a href="#" className="nav-link">
            <li>ABOUT US</li>
          </a>
          <a href="#" className="nav-link">
            <li>BLOQ</li>
          </a>
          <a href="#" className="nav-link">
            <li>FAQ</li>
          </a>
        </ul>
      </nav>
      <div className="signup">
        <img src={lock} alt="Lock" />
        <a href="./signup.html">
          <button>Sign In</button>
        </a>
      </div>
    </header>
  );
};
export default Header;
