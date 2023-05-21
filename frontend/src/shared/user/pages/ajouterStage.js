import React, { useState } from "react";
import ReactDOM from "react-dom";

import NouveauStage from "../../../formulaire/NouveauStage";
import ListeStage from "../../../components/Stage/ListeStage";
import FiltrageStage from "../../../components/Filtrage/FiltrageStage";

function AjouterStage() {
  const [filteredStages, setfilteredStages] = useState("option1");

  const filterChangeHandler = (selectedOption) => {
    setfilteredStages(selectedOption);
  };

  const [stages, setStage] = useState([
    {
      nomRecruteur: "Samuel de champlain",
      emailRecruteur: "samuelchamplain@gmail.com",
      nomEntreprise: "Québec",
      adresseEntreprise: "Québec",
      typeStage: "Colonisation",
      nbPoste: 100,
      descriptionStage: "yo je vien de trouver un nouveau continent pam",
    },
  ]);

  function ajouterStage(nouveauStage) {
    setStage(() => stages.concat(nouveauStage));
  }

  const stageFiltrees = stages.filter((etudiant) => {
    if (filteredStages == "option1") {
      return stages;
    } else if (filteredStages == "option2") {
      return stages.typeStage === "Réseaux et sécurité";
    } else if (filteredStages == "option3") {
      return stages.typeStage === "Développement d'applications";
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Yo c moi Lucas.</p>

        <FiltrageStage 
        selected={filteredStages}
        onChangementFiltre={filterChangeHandler}/>

        <ListeStage stages={stageFiltrees} />
        <NouveauStage ajouterStage={ajouterStage} />
      </header>
    </div>
  );
}

export default AjouterStage;
