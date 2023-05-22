import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


import "./NavLinks.css";

function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Acceuil
        </NavLink>
      </li>
      <li className="hover-link">
        <a>Stages Etudiant</a>
        <ul className="sub-links">
          <li>
            <NavLink to="/stage/directive-etudiant">Directive Étudiant</NavLink>
          </li>

          <li>
            <NavLink to="/stage/ajouter-etudiant">
              Liste Étudiants
            </NavLink>
          </li>
        </ul>
      </li>
      
      <li className="hover-link">
        <a>Stages Employeur</a>
        <ul className="sub-links">
          <li>
            <NavLink to="/stage/directive-employeur">Directive Employeur</NavLink>
          </li>

          <li>
            <NavLink to="/stage/ajouter-stage">
              Publier Stage
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/profil-competence-stagiaires">
          Profils et compétences des stagiaires
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
