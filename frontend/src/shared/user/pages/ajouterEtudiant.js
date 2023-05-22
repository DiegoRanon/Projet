import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ListeEtudiant from "../../../components/Etudiant/ListeEtudiant";
import NouveauEtudiant from "../../../formulaire/NouveauEtudiant";
import FiltrageEtudiants from "../../../components/Filtrage/FiltrageEtudiants";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import UpdateEtudiant from "../../../shared/user/pages/UpdateEtudiant";

function AjouterEtudiant() {
  // Variables
  const [erreur, setErreur] = useState();
  const { error, sendRequest, clearError } = useHttpClient();
  const [filteredEtudiants, setfilteredEtudiants] = useState("etudiants");
  const [etudiants, setEtudiants] = useState([]);
  const etudiantId = useParams().etudiantId;
  const [deletedEtudiantId, setDeletedEtudiantId] = useState(null);
  const [selectedEtudiant, setSelectedEtudiant] = useState(null);
  const history = useHistory();

  // Méthodes
  const filterChangeHandler = (selectedOption) => {
    setfilteredEtudiants(selectedOption);
  };

  const deleteEtudiant = async (etudiantId) => {
    try {
      await sendRequest(
        `http://localhost:5000/etudiants/${etudiantId}`,
        "DELETE"
      );
      setDeletedEtudiantId(etudiantId);
    } catch (err) {
      // Handle any errors
    }
  };

  const assignerStage = (etudiantId) => {
    history.push(`/asignerStage/${etudiantId}`);
  };

  const editEtudiant = (etudiantId) => {
    const selected = etudiants.find((etudiant) => etudiant.id === etudiantId);
    setSelectedEtudiant(selected);
    history.push(`/update-etudiant/${etudiantId}`);
  };

  function ajouterEtudiant(nouveauEtudiant) {
    setEtudiants(() => etudiants.concat(nouveauEtudiant));
  }

  const etudiantFiltrees = etudiants.filter((etudiant) => {
    if (filteredEtudiants == "etudiants") {
      return etudiants;
    } else if (filteredEtudiants == "etudiantsRechercheStage") {
      return etudiant.stagesPostule.length > 0;
    }
  });

  useEffect(() => {
    const recupererEtudiants = async () => {
      try {
        const reponseData = await sendRequest(
          "http://localhost:5000/etudiants"
        );

        setEtudiants(reponseData.etudiants);
      } catch (err) {}
    };
    recupererEtudiants();
  }, [sendRequest]);

  useEffect(() => {
    if (deletedEtudiantId) {
      setEtudiants((prevEtudiants) =>
        prevEtudiants.filter((etudiant) => etudiant.id !== deletedEtudiantId)
      );
      setDeletedEtudiantId(null);
    }
  }, [deletedEtudiantId]);

  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
          <FiltrageEtudiants
            selected={filteredEtudiants}
            onChangementFiltre={filterChangeHandler}
          />
          {etudiants && (
            <ListeEtudiant
              etudiants={etudiantFiltrees}
              onDeleteEtudiant={deleteEtudiant}
              onEditEtudiant={editEtudiant}
              onAssignerStage={assignerStage}
            />
          )}
          {selectedEtudiant && (
            <UpdateEtudiant
              etudiants={etudiants}
              onUpdateSuccess={() => setSelectedEtudiant(null)}
            />
          )}
          
          <NouveauEtudiant ajouterEtudiant={ajouterEtudiant} />
        </React.Fragment>
      </header>
    </div>
  );
}

export default AjouterEtudiant;
