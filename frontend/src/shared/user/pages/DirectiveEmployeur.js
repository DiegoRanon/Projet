import React from "react";
import ReactDOM from "react-dom";

function DirectiveEtudiant() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Formulaire d'inscription de milieu de stage</h2>
        <div></div>
        <p>
          Stages réguliers ayant lieu à la session hiver Les stages sont du 21
          janvier au 3 mai 2019 (il est toutefois possible après entente avec le
          coordonnateur de débuter le stage un peu plus tôt) Sur réception de ce
          formulaire, le coordonnateur des stages entrera en contact avec le
          responsable en entreprise pour discuter du stage.
        </p>
        <div></div>
        <p>
          Veuillez vous référez à la page <a>Profil de sortie</a> pour connaître
          le profil de sortie et les compétences des étudiants.
        </p>
      </header>
    </div>
  );
}

export default DirectiveEtudiant;
