import React from "react";
import "../../style/listeProfesseurs.css";
import Professeur from "./Professeur";
import Card from "./components/Card";


function ListeProfesseurs(props) {
  if (props.professeurs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun enseignant</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.professeurs.map((professeur) => (
        <Professeur key={professeur.id} professeur={professeur} />
      ))}
    </ul>
  );
}

export default ListeProfesseurs;


