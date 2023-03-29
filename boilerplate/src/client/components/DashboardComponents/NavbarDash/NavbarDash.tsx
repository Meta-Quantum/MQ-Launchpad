import React from "react";
import logoWhite from "../../../assets/logo_white.png";
import ElementsDash from "./ElementsDash/ElementsDash";
import "./NavbarDash.scss";
import { Link } from "react-router-dom";

function NavbarDash() {
  return (
    <div className="navbarDash__container">
      <div className="navbarDash__container__element">
        <Link to="/">
          <img className="navbarDash__container__element__logo" src={logoWhite} alt="meta-quantum-logo" />
        </Link>
        <ElementsDash />
      </div>
      <div className="navbarDash__container__element"></div>
    </div>
  );
}

export default NavbarDash;
