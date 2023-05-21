import React, { useState, useCallback } from "react";

import "../style/App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "../shared/Navigation/MainNavigation";
import Acceuil from "../shared/user/pages/Acceuil";
import Faq from "../shared/user/pages/Faq";
import ProfilEtCompetence from "../shared/user/pages/ProfilsEtCompetencesDesStagiaires";
import DirectiveEtudiant from "../shared/user/pages/DirectiveEtudiant";
import DirectiveEmployeur from "../shared/user/pages/DirectiveEmployeur";
import AjouterStage from "../shared/user/pages/ajouterStage";
import AjouterEtudiant from "../shared/user/pages/ajouterEtudiant";
import Footer from "../shared/user/pages/Footer";


function App() {

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
            <DirectiveEmployeur />
          </Route>

          <Route path="/stage/ajouter-etudiant">
            <AjouterEtudiant />
          </Route>

          <Route path="/stage/ajouter-employeur">
            <AjouterStage />
          </Route>

          

          <Route path="/profil-competence-stagiaires" exact>
            <ProfilEtCompetence />
          </Route>
          <Route path="/faq" exact>
            <Faq />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
        </main>
      </Router>
  );
}

export default App;
