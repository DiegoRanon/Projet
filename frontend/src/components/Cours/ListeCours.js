import React from "react";
import Cours from "./Cours";
import Card from "./components/Card";

function ListeCours(props) {
  

  if (props.cours.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun cours</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="cours-list">
      {props.cours.map((cours) => (

        <Cours key={cours.id} cours={cours} />


      ))}
    </ul>
  );
}

export default ListeCours;


