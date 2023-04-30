import React from "react";

import "../style/App.css";
import logo from "../assets/Logomomo.png";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import LesCours from "../pages/LesCours";
import Professeurs from "../pages/Professeurs";
import MainNavigation from "../shared/Navigation/MainNavigation";
import Acceuil from "../pages/Acceuil";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>
          <Route path="/professeur" exact>
            <Professeurs />
          </Route>
          <Route path="/cours/:id" exact>
            <LesCours />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
