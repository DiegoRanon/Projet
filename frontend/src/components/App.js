import React, { useState, useCallback} from "react";

import "../style/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


import MainNavigation from "../shared/Navigation/MainNavigation";
import Acceuil from "../shared/user/pages/Acceuil";
import Faq from "../shared/user/pages/Faq";
import ProfilEtCompetence from "../shared/user/pages/ProfilsEtCompetencesDesStagiaires";

import { AuthContext } from '../shared/context/auth-context';
import DirectiveEtudiant from "../shared/user/pages/DirectiveEtudiant";

import Connexion from "../shared/user/pages/Connexion";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;




  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>

          <Route path="/stage/directive-etudiant">
            <DirectiveEtudiant />
          </Route>

          <Route path="/stage/directive-employeur">

          </Route>
          
          <Route path="/profil-competence-stagiaires" exact>
            <ProfilEtCompetence />
          </Route>
          <Route path="/FAQ" exact>
            <Faq />
          </Route>

          <Route path="/connexion" exact>
          <Connexion />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
