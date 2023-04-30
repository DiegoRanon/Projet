import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../style/Cours.css"
import Card from "./components/Card";

function Cours({ cours }) {
  return (
    <li className="cours-item">

      <Card className="cours-item__content">
        <Link to={`/cours/${cours.id}`}>
          <div>
            <h2>{"Titre: " + cours.titre}</h2>
            <h3>{"Discipline: " + cours.discipline}</h3>
            <h3>{"Nombre maximal d'étudiant: " + cours.nbMaximalEtudiant}</h3>
            <h3>{"Debut: " + cours.dateDebut}</h3>
            <h3>{"Fin: " + cours.dateFin}</h3>
            <h3>{"ID: " + cours.id}</h3>
            <h3>{"Classe : " + cours.classes[0].prenom}</h3>
          </div>
        </Link>
      </Card>


    </li>
  );
}

export default Cours;
