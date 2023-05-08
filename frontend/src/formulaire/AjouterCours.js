import React, { useState } from "react";

import "../style/AjouterStage.css";

function AjouterStage({ ajouterStage }) {
  const [validationNom, setValidationNom] = useState(false);
  const [validationCourriel, setValidationCourriel] = useState(false);
  const [validationTelephone, setValidationNbEleve] = useState(false);
  const [validationNomEntreprise, setValidationCours] = useState(false);
  const [validationAdresse, setValidationAdresse] = useState(false);
  const [validationTypeStage, setValidationTypeStage] = useState(false);
  const [validationNombre, setValidationNombre] = useState(false);
  const [validationRemuneration, setValidationRemuneration] = useState(false);


  const [saisieNom, setSaisieNom] = useState("");
  const [saisieCourriel, setSaisieCourriel] = useState("");
  const [saisieTelephone, setSaisieTelephone] = useState("");
  const [saisieNomEntreprise, setSaisieNomEntreprise] = useState("");
  const [saisieAdresse, setSaisieAdresse] = useState("");
  const [saisieTypeStage, setSaisieTypeStage] = useState("");
  const [saisieNombre, setSaisieNombre] = useState("");
  const [saisieRenumeration, setSaisieRenumeration] = useState("");

  function ajoutNouveauStageHandler(event) {
    event.preventDefault();
    if (
      validationNom &&
      validationCourriel &&
      validationTelephone &&
      validationNomEntreprise &&
      validationAdresse&&
      validationTypeStage&&
      validationNombre&&
      validationRemuneration
    ) {
      const nouveauCours = {
        id: "C" + Math.floor(Math.random() * 1000).toString(),
        nom: setSaisieNom,
        courriel: setSaisieCourriel,
        telephone: setSaisieTelephone,
        nomEntreprise: setSaisieNomEntreprise,
        adresse: setSaisieAdresse,
        typeStage: setSaisieTypeStage,
        nombre: setSaisieNombre,
        renumeration: setSaisieRenumeration,
      };
      ajouterStage(nouveauStage);

      setSaisieNom("");
      setSaisieCourriel("");
      setSaisieTelephone("");
      setSaisieNomEntreprise("");
      setSaisieAdresse("");
      setSaisieTypeStage("");
      setSaisieNombre("");
      setSaisieRenumeration("");
    }
  }

  function setSaisieNom(event) {
    setSaisieCours(event.target.value);
    if (event.target.value != "") {
      setValidationCours(true);
    } else {
      setValidationCours(false);
    }
  }

  function setSaisieCourriel(event) {
    setSaisieDiscipline(event.target.value);
    if (event.target.value != "") {
      setValidationDiscipline(true);
    } else {
      setValidationDiscipline(false);
    }
  }

  function setSaisieTelephone(event) {
    setSaisieNbMaximalEtudiant(event.target.value);
    if (event.target.value > 0) {
      setValidationNbEleve(true);
    } else {
      setValidationNbEleve(false);
    }
  }

  function setSaisieNomEntreprise(event) {
    setSaisieDateDebut(event.target.value.toString());
    const date = new Date(event.target.value.toString());
    const dateDebut = new Date("2023-01-01");
    const dateFin = new Date("2023-06-06");
    if (date > dateDebut && date < dateFin) {
      setValidationDateDebut(true);
    } else {
      setValidationDateDebut(false);
    }
  }

  function setSaisieAdresse(event) {
    setSaisieDateFin(event.target.value.toString());
    const dateDebut = new Date("2023-01-01");
    const dateFin = new Date("2023-06-06");
    const date = new Date(event.target.value.toString());
    if (date > dateDebut && date < dateFin) {
      setValidationDateFin(true);
    } else {
      setValidationDateFin(false);
    }
  }

  function setSaisieTypeStage(event) {
    setSaisieDateFin(event.target.value.toString());
    const dateDebut = new Date("2023-01-01");
    const dateFin = new Date("2023-06-06");
    const date = new Date(event.target.value.toString());
    if (date > dateDebut && date < dateFin) {
      setValidationDateFin(true);
    } else {
      setValidationDateFin(false);
    }
  }
  function setSaisieNombre(event) {
    setSaisieDateFin(event.target.value.toString());
    const dateDebut = new Date("2023-01-01");
    const dateFin = new Date("2023-06-06");
    const date = new Date(event.target.value.toString());
    if (date > dateDebut && date < dateFin) {
      setValidationDateFin(true);
    } else {
      setValidationDateFin(false);
    }
  }

  function setSaisieRenumeration(event) {
    setSaisieDateFin(event.target.value.toString());
    const dateDebut = new Date("2023-01-01");
    const dateFin = new Date("2023-06-06");
    const date = new Date(event.target.value.toString());
    if (date > dateDebut && date < dateFin) {
      setValidationDateFin(true);
    } else {
      setValidationDateFin(false);
    }
  }

  const handleSubmit = (event) => {
    if (validationDateDebut && validationDateFin) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={ajoutNouveauCoursHandler}>
      <div className="AjouterCours_controls">
        <h2>Ajouter un cours</h2>
        <br /> Cours :
        <input type="text" value={saisieCours} onChange={saisieCoursHandler} />
        <br />
        Discipline :
        <input
          type="text"
          value={saisieDiscipline}
          onChange={saisieDisciplineHandler}
        />
        <br />
        Nombre maximal d'étudiant :{" "}
        <input
          type="number"
          min="1"
          max="30"
          value={saisieNbMaximalEtudiant}
          onChange={saisieNbMaxHandler}
        />
        <br /> Date Début :
        <input
          type="date"
          value={saisieDateDebut}
          onChange={saisieDateDebutHandler}
        />
        <br /> Date Fin :
        <input
          type="date"
          value={saisieDateFin}
          onChange={saisieDateFinHandler}
        />
        <div className="boutonAjouter">
          <button
            type="submit"
            className="AjouterCours_button"
            onSubmit={handleSubmit}
          >
            {" "}
            Ajouter le Cours
          </button>
        </div>
      </div>
    </form>
  );
}

export default AjouterStage;
