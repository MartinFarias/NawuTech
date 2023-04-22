import React from "react";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/cartWidget.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo.png"

export const NavBar = () => {
  return (
         <div className="Container">
          <nav className="nav">
            <div className="nav__brand">

          <img src= {logo} alt="logo" className="logo"/>
              <NavLink className="nav__Link nombre" to='/'>NawuTech</NavLink>
              </div>
              <ul className="nav__List">
              <li>
                   <NavLink className="nav__Link"to='/catalogo/ofertas' >ofertas</NavLink>
              </li>
              <li>
                  <NavLink className="nav__Link" to='/catalogo/catalogo'>catalogo</NavLink>
              </li>
              <li>
              <NavLink className="nav__Link" to='cart'>
                <CartWidget />
                </NavLink>
              </li>
              </ul>
              </nav>
              </div>
  );
}

export default NavBar;
