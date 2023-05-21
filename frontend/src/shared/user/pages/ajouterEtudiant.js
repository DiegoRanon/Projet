import React, { useState } from "react";
import ReactDOM from "react-dom";

import ListeEtudiant from "../../../components/Etudiant/ListeEtudiant";
import NouveauEtudiant from "../../../formulaire/NouveauEtudiant";
import FiltrageEtudiants from "../../../components/Filtrage/FiltrageEtudiants";

function AjouterEtudiant() {
  const [filteredEtudiants, setfilteredEtudiants] = useState("etudiants");

  const filterChangeHandler = (selectedOption) => {
    setfilteredEtudiants(selectedOption);
  };

  const [etudiants, setEtudiants] = useState([{
    DA:"2040616",
    nom:"Diego",
    courriel:"2040616@cmontmorency.qc.ca",
    profilSortie:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg", 
    stagesPostule:[],
    stage: ""
  }, 
  {
    DA:"2040333",
    nom:"Lucas",
    courriel:"2040616@cmontmorency.qc.ca",
    profilSortie:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg", 
    stagesPostule:["iasdfiasofoisdf"],
    stage: ""
  }
]);

  function ajouterEtudiant(nouveauEtudiant) {
    setEtudiants(() => etudiants.concat(nouveauEtudiant));
  }

  const etudiantFiltrees = etudiants.filter((etudiant) => {
    if (filteredEtudiants == "etudiants") {
      return etudiants;
    } else if(filteredEtudiants == "etudiantsRechercheStage") {
      return etudiant.stagesPostule.length > 0;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <FiltrageEtudiants 
        selected={filteredEtudiants}
        onChangementFiltre={filterChangeHandler} />
        <ListeEtudiant etudiants={etudiantFiltrees} />
        <NouveauEtudiant ajouterEtudiant={ajouterEtudiant} />
      </header>
    </div>
  );
}

export default AjouterEtudiant;
