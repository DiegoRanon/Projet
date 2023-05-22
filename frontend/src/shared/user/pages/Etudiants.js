import ReactDOM from "react-dom";
import React, { useState } from "react";
import ListeEtudiants from "../../../components/Etudiant/ListeEtudiant";
import AjouterEtud from "../../../formulaire/AjouterEtudiant";

function Etudiants() {
  const [etudiants, setEtudiant] = useState([
    ,
  ]);

  function ajouterEtud(nouveauEtud) {
    setEtudiant(() => etudiants.concat(nouveauEtud));

  }

  return (
    <div>
      <ListeEtudiants etudiants={etudiants} />
      <AjouterEtud ajouterEtud={ajouterEtud} />
    </div>
  );
}

export default Etudiants;
