import "../css/Nav.css";
import { navItems } from "../constants";
import logo from "../assets/logo.png";
import Arrow from "../assets/Arrow-Down.png";
import React, { useState } from "react";


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo-containers">
        <img src={logo} alt="logoo" />
      </div>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-items-container ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((items, index) => (
            <li key={index}>
              <a href={items.href}>{items.label}</a>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <a href="#" className="buttons">
              Sign up
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Nav;
