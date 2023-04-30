import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Acceuil</NavLink>
    </li>
    <li>
      <NavLink to="/cours/:id">Les cours</NavLink>
    </li>
    <li>
      <NavLink to="/professeur">Les professeurs</NavLink>
    </li>
  </ul>
};

export default NavLinks;