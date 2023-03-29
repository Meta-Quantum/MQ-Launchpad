import React from "react";
import "./Navbar.scss";
import Buttons from "./Buttons/Buttons";
import Menu from "./Menu/Menu";
import logoWhite from "../../assets/logo_white.png";
import { Link } from "react-router-dom";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { useWeb3React } from "@web3-react/core";

function Navbar() {
  function getLibrary(provider: any) {
    return new Web3(provider);
  }

  return (
    <div className="navbar__container">
      <div className="navbar__container__element">
        <Web3ReactProvider getLibrary={getLibrary}>
          <Buttons />
        </Web3ReactProvider>
      </div>
      <div className="navbar__container__element">
        <Link to="/">
          <img className="navbar__container__element__logo" src={logoWhite} alt="meta-quantum-logo" />
        </Link>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
