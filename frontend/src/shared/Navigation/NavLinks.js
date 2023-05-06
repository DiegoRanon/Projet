import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Acceuil</NavLink>
    </li>
    <li>
      <NavLink to="/deroulementStageEmployeurs">Déroulement des stages  (Employeurs)</NavLink>
    </li>
    <li>
      <NavLink to="/profil-competence-stagiaires">Profils et compétences des stagiaires</NavLink>
    </li>

    <li>
      <NavLink to="/deroulementStageEtudiant">Déroulement des stages (Etudiants) </NavLink>
    </li>

    <li>
      <NavLink to="/faq">FAQ</NavLink>
    </li>
  </ul>
};

export default NavLinks;