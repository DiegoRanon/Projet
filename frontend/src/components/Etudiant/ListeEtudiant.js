import React from "react";
import "../../style/listeEtudiant.css";
import { useHistory } from "react-router-dom";
import Etudiant from "./Etudiant";
import Card from "../Etudiant/components/Card";

function ListeEtudiant(props) {
  const history = useHistory();

  const handleUpdateEtudiant = (etudiantId) => {
    history.push(`/update-etudiant/${etudiantId}`);
  };

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
        <div key={etudiant.id} className="users-list-solo">
          <div className="place-item__actions">
          <Etudiant key={etudiant.id} etudiant={etudiant} />
          <button className="ButtonList" onClick={() => props.onAssignerStage(etudiant.id)}>Assigner à un Stage</button>
          <button className="ButtonList" onClick={() => props.onEditEtudiant(etudiant.id)}>Update</button>
          <button className="ButtonList" onClick={() => props.onDeleteEtudiant(etudiant.id)}>
            Delete
          </button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default ListeEtudiant;
