import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";

function NavLinks(props) {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Acceuil
        </NavLink>
      </li>
      <li className="hover-link">
        <a>Stages</a>
        <ul className="sub-links">
          <li>
            <NavLink to="/stage/directive-etudiant">Directive Étudiant</NavLink>
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
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/connexion">Connexion</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Déconnexion</button>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
