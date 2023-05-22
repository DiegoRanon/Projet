import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";

function UpdateEtudiant({ etudiants, onUpdateSuccess }) {
  const { etudiantId } = useParams();
  const etudiant = etudiants.find((etudiant) => etudiant.id === etudiantId);
  console.log(etudiant);
  const { sendRequest, error, clearError } = useHttpClient();
  // Validations
  const [validationDA, setValidationDA] = useState(false);
  const [validationNom, setValidationNom] = useState(false);
  const [validationcourriel, setValidationcourriel] = useState(false);
  const [validationProfil, setValidationProfil] = useState(false);
  // saisies
  const [saisiecourriel, setSaisiecourriel] = useState(etudiant.courriel);
  const [saisieNom, setSaisieNom] = useState(etudiant.nom);
  const [saisieDA, setSaisieDA] = useState(etudiant.DA);
  const [saisieProfil, setSaisieProfil] = useState(etudiant.profil);
  const history = useHistory();

    const fetchEtudiant = async (event) => {
        event.preventDefault();
      try {
        const responseData = await sendRequest(`http://localhost:5000/etudiants/${etudiantId}`, "PATCH",
        JSON.stringify({
            DA: saisieDA,
            nom: saisieNom,
            courriel: saisiecourriel,
            profil: saisieProfil
          }),
          {
            "Content-Type": "application/json",
          }
        
        );
        console.log(responseData);
        history.push(`/stage/ajouter-etudiant`);
      } catch (err) {
        console.log(err);
      }
    };

    

  function saisiecourrielHandler(event) {
    setSaisiecourriel(event.target.value);
    if (event.target.value != "") {
      setValidationcourriel(true);
    } else {
      setValidationcourriel(false);
    }
  }

  function saisieDAHandler(event) {
    setSaisieDA(event.target.value);
    if (event.target.value != "") {
      setValidationDA(true);
    } else {
      setValidationDA(false);
    }
  }

  function saisieNomHandler(event) {
    setSaisieNom(event.target.value);
    if (event.target.value != "") {
      setValidationNom(true);
    } else {
      setValidationNom(false);
    }
  }

  function saisieProfilHandler(event) {
    setSaisieProfil(event.target.value);
    if (event.target.value != "") {
      setValidationProfil(true);
    } else {
      setValidationProfil(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <ErrorModal error={error} onClear={clearError} />
      <form onSubmit={fetchEtudiant}>
      <div className="AjouterEtudiant_controls">
        <h2>Ajouter etudiant</h2>
        <br />
        DA : <input type="text" value={saisieDA} onChange={saisieDAHandler} />
        <br />
        Nom :<input type="text" value={saisieNom} onChange={saisieNomHandler} />
        <br /> Courriel:{" "}
        <input
          type="text"
          value={saisiecourriel}
          onChange={saisiecourrielHandler}
        />
        <br /> 
        <br /> Profil de sortie:{" "}
        <input
          type="text"
          value={saisieProfil}
          onChange={saisieProfilHandler}
        />
        <br /> 

        <div className="AjouterEtudiant_action">
          <button
            className="AjouterEtudiant_Button"
            type="submit"
            onSubmit={handleSubmit}
          >
            {" "}
            Update Étudiant
          </button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default UpdateEtudiant;
