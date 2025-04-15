import React from "react";
import LogoDragon from "../../assets/LOGO-DBZ.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={LogoDragon} alt="Logo Dragon Ball Z" className="logo-db" />
      <h2>The Dragon Ball API</h2>
    </header>
  );
};

export default Header;
