<<<<<<< HEAD
import "../styles/header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
=======
import React from 'react'
>>>>>>> minnam

function header() {
  return (
<<<<<<< HEAD
    <header className="header">
      <div className="header__logo">
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink
              to="/"
              className="header__link"
              activeClassName="header__link--active1"
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink
              to="/Apropos"
              className="header__link"
              activeClassName="header__link--active1"
            >
              A propos
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/Connections" className="header__button">
              Se connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
=======
    <div>
      <head>
        <title>Navbar</title>
        </head>
    </div>
  )
}
>>>>>>> minnam

export default header
