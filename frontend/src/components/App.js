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
import Faq from "../shared/user/pages/Faq"

import { AuthContext } from '../shared/context/auth-context';


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
          <Route path="/deroulementStageEmployeurs" exact>
          </Route>
          <Route path="/profil-competence-stagiaires" exact>
          </Route>
          <Route path="/deroulementStageEtudiant" exact>
          </Route>
          <Route path="/FAQ" exact>
          <Faq />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
