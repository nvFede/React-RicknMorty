import React, { Component } from "react";
import logotipo from "../images/rnm_logo.png";
import "../styles/components/navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header className="Header">
        <Link to="/">
          <img
            className="Header__logo"
            src={logotipo}
            alt="Rick and Morty Logo"
          />
        </Link>
        <nav>
          <ul className="Header__nav">
            <li className="Header__nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="Header__nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="Header__nav-item Header__nav-item--alternative">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
