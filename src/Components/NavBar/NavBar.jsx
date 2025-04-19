import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/filter/Male" className="item" activeClassName="active">Masculino</NavLink>
        <NavLink to="/filter/Female" className="item" activeClassName="active">Femenino</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;