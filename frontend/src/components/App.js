import React, { useState, useEffect, useCallback } from "react";

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
import { useHttpClient } from "../shared/hooks/http-hook";
import ProfilEtCompetence from "../shared/user/pages/ProfilsEtCompetencesDesStagiaires";
import DirectiveEtudiant from "../shared/user/pages/DirectiveEtudiant";
import DirectiveEmployeur from "../shared/user/pages/DirectiveEmployeur";
import AjouterStage from "../shared/user/pages/ajouterStage";
import AjouterEtudiant from "../shared/user/pages/ajouterEtudiant";
import Footer from "../shared/user/pages/Footer";
import UpdateEtudiant from "../shared/user/pages/UpdateEtudiant";
import AsignerStage from "../shared/user/pages/assignerStage";
import UpdateStage from "../shared/user/pages/UpdateStage"

function App() {
  const {error, sendRequest, clearError } = useHttpClient();
  const [etudiants, setEtudiants] = useState([]);
  const [stages, setStages] = useState([]);

  // Étudiants 
  useEffect(() => {
    const recupererEtudiants = async () => {
      try {
        const reponseData = await sendRequest("http://localhost:5000/etudiants");

        setEtudiants(reponseData.etudiants);
      } catch (err) {
        
      }
    };
    recupererEtudiants();
  }, [sendRequest]);

  // Stages

  useEffect(() => {
    const recupererStages = async () => {
      try {
        const reponseData = await sendRequest("http://localhost:5000/stages");

        setStages(reponseData.stages);
      } catch (err) {
        
      }
    };
    recupererStages();
  }, [sendRequest]);

  const updateStageHandler = useCallback((updatedStage) => {
    setStages((prevStages) => {
      const updatedIndex = prevStages.findIndex(
        (stage) => stage.id === updatedStage.id
      );
      if (updatedIndex !== -1) {
        const updatedStages = [...prevStages];
        updatedStages[updatedIndex] = updatedStage;
        return updatedStages;
      }
      return prevStages;
    });
  }, []);

  const updateEtudiantHandler = useCallback((updatedEtudiant) => {
    setEtudiants((prevEtudiants) => {
      const updatedIndex = prevEtudiants.findIndex(
        (etudiant) => etudiant.id === updatedEtudiant.id
      );
      if (updatedIndex !== -1) {
        const updatedEtudiants = [...prevEtudiants];
        updatedEtudiants[updatedIndex] = updatedEtudiant;
        return updatedEtudiants;
      }
      return prevEtudiants;
    });
  }, []);

  
  
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

          <Route path="/asignerStage/:etudiantId"
          render={(props) => (
            <AsignerStage
              {...props}
              etudiants={etudiants}
            />
          )}/>
          <Route
            path="/update-etudiant/:etudiantId"
            render={(props) => (
              <UpdateEtudiant
                {...props}
                etudiants={etudiants}
                onUpdateEtudiant={updateEtudiantHandler}
              />
            )}
          />

          <Route
            path="/update-stage/:stageId"
            render={(props) => (
              <UpdateStage
                {...props}
                stages={stages}
                onUpdateStage={updateStageHandler}
              />
            )}
          />

          <Route path="/stage/directive-employeur">
            <DirectiveEmployeur />
          </Route>

          <Route path="/stage/ajouter-etudiant">
            <AjouterEtudiant />
          </Route>

          <Route path="/stage/ajouter-stage">
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
