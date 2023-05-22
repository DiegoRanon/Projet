import React, { useState, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';
import ReactDOM from "react-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import NouveauStage from "../../../formulaire/NouveauStage";
import ListeStage from "../../../components/Stage/ListeStage";
import FiltrageStage from "../../../components/Filtrage/FiltrageStage";

function AsignerStage() {
  // Variables
  const [erreur, setErreur] = useState();
  const {error, sendRequest, clearError } = useHttpClient();
  const [filteredStages, setfilteredStages] = useState("option1");
  const [stages, setStages] = useState([]);
  const [deletedStageId, setDeletedStageId] = useState(null);

  const filterChangeHandler = (selectedOption) => {
    setfilteredStages(selectedOption);
  };

  const deleteStage = async (stageId) => {
    try {
      await sendRequest(`http://localhost:5000/stages/${stageId}`, 'DELETE');
      setDeletedStageId(stageId);
    } catch (err) {
      // Handle any errors

    }
  };


  function ajouterStage(nouveauStage) {
    setStages(() => stages.concat(nouveauStage));
  }

  useEffect(() => {
    const recupererStages = async () => {
      try {
        const reponseData = await sendRequest("http://localhost:5000/stages");

        setStages(reponseData.stages);
      } catch (err) {
        
      }
    };
    recupererStages();
  }, [sendRequest]);

  useEffect(() => {
    if (deletedStageId) {
      setStages((prevStage) => prevStage.filter((stage) => stage.id !== deletedStageId));
      setDeletedStageId(null);
    }
  }, [deletedStageId]);

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

        <ListeStage stages={stageFiltrees} onDeleteStage={deleteStage}/>
        <NouveauStage ajouterStage={ajouterStage} />
      </header>
    </div>
  );
}

export default AsignerStage;
