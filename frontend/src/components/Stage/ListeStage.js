import React from "react";
import Stage from "./Stage";
import Card from "./components/Card";

function ListeStage(props) {
  

  if (props.stages.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun stage</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="cours-list">
      {props.stages.map((stage) => (
        <div key={stage.id}>
        <Stage key={stage.id} stage={stage} />
        <button onClick={() => props.onDeleteStage(stage.id)}>
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}

export default ListeStage;


