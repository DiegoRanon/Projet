import React, { useState, useEffect} from "react";
import { useParams, useHistory } from 'react-router-dom';
import ReactDOM from "react-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import NouveauStage from "../../../formulaire/NouveauStage";
import ListeStage from "../../../components/Stage/ListeStage";
import FiltrageStage from "../../../components/Filtrage/FiltrageStage";
import SelectStage from "../../../components/Stage/SelectStage"

function AsignerStage() {
  // Variables
  const { etudiantId } = useParams();
  const [erreur, setErreur] = useState();
  const {error, sendRequest, clearError } = useHttpClient();
  const [filteredStages, setfilteredStages] = useState("option1");
  const [stages, setStages] = useState([]);
  const [deletedStageId, setDeletedStageId] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);
  const history = useHistory();




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

  const handleSelectStage = async (stageId) => {
    try {
      const responseData = await sendRequest(`http://localhost:5000/etudiants/assignerStage/${etudiantId}`, "PATCH",
      JSON.stringify({
        idStage:stageId
        }),
        {
          "Content-Type": "application/json",
        }
      
      );
      console.log(responseData);
      history.push('/stage/ajouter-etudiant');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>Yo c moi Lucas.</p>
        <SelectStage stages={stages}onSelectStage={handleSelectStage}/>
      </header>
    </div>
  );
}

export default AsignerStage;
