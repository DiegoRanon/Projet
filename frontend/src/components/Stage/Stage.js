import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/Cours.css"
import Card from "./components/Card";

function Stage({ stage }) {
  return (
    <li className="stage-item">

      <Card className="stage-item__content">
          <div>
            <h2>{"Nom du recruteur: " + stage.nomRecruteur}</h2>
            <h3>{"Courriel du recruteur: " + stage.emailRecruteur}</h3>
            <h3>{"Nom de l'entreprise: " + stage.nomEntreprise}</h3>
            <h3>{"Adresse de l'entreprise: " + stage.adresseEntreprise}</h3>
            <h3>{"Type de stage: " + stage.typeStage}</h3>
            <h3>{"Nombre de postes disponibles: " + stage.nbPoste}</h3>
            <h3>{"Description du stage: " + stage.descriptionStage}</h3>
          </div>
      </Card>


    </li>
  );
}

export default Stage;
