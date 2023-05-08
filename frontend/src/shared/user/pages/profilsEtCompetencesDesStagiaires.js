import React from "react";
import ReactDOM from "react-dom";

function profilEtCompetence() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profils-Competences">
          <div className="titre-reseaux">
            <h1>Nos étudiants en Gestion de réseaux et sécurité</h1>
          </div>
          <div className="reseau"></div>
          <div className="titre-développement">
            <h1>Nos étudiant en Développement d'applications informatiques</h1>
          </div>
          <div className="profilsEtCompetences"></div>
        </div>
      </header>
    </div>
  );
}

export default profilEtCompetence;
