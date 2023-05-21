import React from "react";
import "../../style/listeEtudiant.css";
import Etudiant from "./Etudiant";
import Card from "../Etudiant/components/Card";


function ListeEtudiant(props) {
  if (props.etudiants.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun etudiant</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.etudiants.map((etudiant) => (
        <Etudiant key={etudiant.id} etudiant={etudiant} />
      ))}
    </ul>
  );
}

export default ListeEtudiant;


