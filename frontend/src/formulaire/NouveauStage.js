import React, { useState } from "react";

import "../style/AjouterStage.css";

import { useHistory } from 'react-router-dom';

function NouveauStage({ ajouterStage }) {
  // Validateurs
  const [validationNomEntreprise, setValidationNomEntreprise] = useState(false);
  const [validationAdresseEntreprise, setValidationAdresseEntreprise] =
    useState(false);
  const [validationRecruteur, setValidationRecruteur] = useState(false);
  const [validationEmailRecruteur, setValidationEmailRecruteur] =
    useState(false);
  const [validationPosteDispo, setValidationPosteDispo] = useState(false);
  const [validationDescriptionStage, setValidationDescriptionStage] =
    useState(false);
  const [validationTypeStage, setValidationTypeStage] = useState(false);
  const [validationRemuneration, setValidationRemuneration] = useState(false);

  // Attributs Stage
  const [saisieNomEntreprise, setSaisieNomEntreprise] = useState("");
  const [saisieAdresseEntreprise, setSaisieAdresseEntreprise] = useState("");
  const [saisieRecruteur, setSaisieRecruteur] = useState("");
  const [saisieEmailRecruteur, setSaisieEmailRecruteur] = useState("");
  const [saisiePosteDispo, setSaisiePosteDispo] = useState("");
  const [saisieDescriptionStage, setSaisieDescriptionStage] = useState("");
  const [saisieTypeStage, setSaisieTypeStage] = useState("");
  const [saisieRemuneration, setSaisieRemuneration] = useState("");

  function ajoutNouveauStageHandler(event) {
    event.preventDefault();
    if (
      validationNomEntreprise &&
      validationAdresseEntreprise &&
      validationRecruteur &&
      validationEmailRecruteur &&
      validationPosteDispo &&
      validationDescriptionStage &&
      validationTypeStage &&
      validationRemuneration
    ) {
      const nouveauStage = {
        nomRecruteur: saisieRecruteur,
        emailRecruteur: saisieEmailRecruteur,
        nomEntreprise: saisieNomEntreprise,
        adresseEntreprise: saisieAdresseEntreprise,
        typeStage: saisieTypeStage,
        nbPoste: saisiePosteDispo,
        descriptionStage: saisieDescriptionStage,
        reumunerationStage:saisieRemuneration
      };
      ajouterStage(nouveauStage);

      setSaisieNomEntreprise("");
      setSaisieAdresseEntreprise("");
      setSaisieRecruteur("");
      setSaisieEmailRecruteur("");
      setSaisiePosteDispo("");
      setSaisieDescriptionStage("");
      setSaisieTypeStage("");


    }
  }

  function saisieNomEntrepriseHandler(event) {
    setSaisieNomEntreprise(event.target.value);
    if (event.target.value != "") {
      setValidationNomEntreprise(true);
    } else {
      setValidationNomEntreprise(false);
    }
  }

  function saisieAdresseEntrepriseHandler(event) {
    setSaisieAdresseEntreprise(event.target.value);
    if (event.target.value != "") {
      setValidationAdresseEntreprise(true);
    } else {
      setValidationAdresseEntreprise(false);
    }
  }

  function saisieRecruteurHandler(event) {
    setSaisieRecruteur(event.target.value);
    if (event.target.value != "") {
      setValidationRecruteur(true);
    } else {
      setValidationRecruteur(false);
    }
  }

  function saisieEmailRecruteurHandler(event) {
    setSaisieEmailRecruteur(event.target.value);
    if (event.target.value != "") {
      setValidationEmailRecruteur(true);
    } else {
      setValidationEmailRecruteur(false);
    }
  }

  function saisiePosteDispoHandler(event) {
    setSaisiePosteDispo(event.target.value);
    if (event.target.value != "") {
      setValidationPosteDispo(true);
    } else {
      setValidationPosteDispo(false);
    }
  }

  function saisieTypeStageHandler(event) {
    setSaisieTypeStage(event.target.value);
    if (event.target.value != "") {
      setValidationTypeStage(true);
    } else {
      setValidationTypeStage(false);
    }
  }

  function saisieDescriptionHandler(event) {
    setSaisieDescriptionStage(event.target.value);
    if (event.target.value != "") {
      setValidationDescriptionStage(true);
    } else {
      setValidationDescriptionStage(false);
    }
  }

  function saisieRemunerationHandler(event) {
    setSaisieRemuneration(event.target.value);
    if (event.target.value != "") {
      setValidationRemuneration(true);
    } else {
      setValidationRemuneration(false);
    }
  }

  const handleSubmit = (event) => {
    if (
      validationNomEntreprise &&
      validationAdresseEntreprise &&
      validationRecruteur &&
      validationEmailRecruteur &&
      validationPosteDispo &&
      validationDescriptionStage &&
      validationTypeStage
    ) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={ajoutNouveauStageHandler}>
      <div className="AjouterStage_controls">
        <br />
        Nom de la personne contact:
        <input
          type="text"
          value={saisieRecruteur}
          onChange={saisieRecruteurHandler}
        />
        <br />
        Courriel de la personne contact:{" "}
        <input
          type="text"
          value={saisieEmailRecruteur}
          onChange={saisieEmailRecruteurHandler}
        />
        <br /> Nom de l'entreprise:
        <input
          type="text"
          value={saisieNomEntreprise}
          onChange={saisieNomEntrepriseHandler}
        />
        <br /> Adresse de l'entreprise:
        <input
          type="text"
          value={saisieAdresseEntreprise}
          onChange={saisieAdresseEntrepriseHandler}
        />
        <br /> Type de stage:
        <input
          type="text"
          value={saisieTypeStage}
          onChange={saisieTypeStageHandler}
        />
        <br /> Nombre de poste disponibles:
        <input
          type="int"
          value={saisiePosteDispo}
          onChange={saisiePosteDispoHandler}
        />
        <br /> Description du stage:
        <input
          type="text"
          value={saisieDescriptionStage}
          onChange={saisieDescriptionHandler}
        />
        <br /> Rémunération (salaire horaire, montant unique pour le stage ou aucune rémunération):
        <input
          type="text"
          value={saisieRemuneration}
          onChange={saisieRemunerationHandler}
        />

        <div className="boutonAjouter">
          <button
            type="submit"
            className="AjouterStage_button"
            onSubmit={handleSubmit}
          >
            {" "}
            Ajouter le Stage
          </button>
        </div>
      </div>
    </form>
  );
}

export default NouveauStage;