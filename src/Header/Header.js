import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

/**
 *Header w/ Link to "/"
 *@component
 */
function Header() {
  return (
    <header className="Header">
      <Link to="/">Noteful</Link>
    </header>
  );
}

export default Header;
