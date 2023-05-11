import React, { useState } from "react";


import "../style/AjouterCours.css"

function AjouterCours({ ajouterCours }) {
  
  const [validationDateDebut, setValidationDateDebut] = useState(false);
  const [validationDateFin, setValidationDateFin] = useState(false);
  const [validationNbEleve, setValidationNbEleve] = useState(false);
  const [validationCours, setValidationCours] = useState(false);
  const [validationDiscipline, setValidationDiscipline] = useState(false);

  const [saisieCours, setSaisieCours] = useState("");
  const [saisieEntreprise, setSaisieEntreprise] = useState("");
  const [saisieAdresseEntreprise, setSaisieAdresseEntreprise] = useState("");
  const [saisieRecruteur, setSaisieRecruteur] = useState("");
  const [saisieTelRecruteur, setSaisieTelRecruteur] = useState("");
  const [saisieEmailRecruteur, setSaisieEmailRecruteur] = useState("");
  const [saisieDateFin, setSaisieDateFin] = useState("");
  const [saisieStage, setSaisieStage] = useState("");
  const [saisieSalaire, setSaisieSalaire] = useState("");
  const [saisiePoste, setSaisiePoste] = useState("");
  const [saisieDescriptionStage, setSaisieDescriptionStage] = useState("");
  
   
    function ajoutNouveauCoursHandler(event) {
      event.preventDefault();
      if(validationDateDebut && validationDateFin && validationNbEleve && validationDiscipline && validationCours) {
      const nouveauCours = {
        id: "C" + Math.floor(Math.random() * 1000).toString(),
        titre: saisieCours,
        nomEntreprise: saisieEntreprise,
        adresseEntreprise: saisieAdresseEntreprise,
        nomRecruteur:saisieRecruteur,
        telRecruteur:saisieTelRecruteur,
        emailRecruteur:saisieEmailRecruteur,
        stage:saisieStage,
        poste:saisiePoste,

        salaire:saisieSalaire,


      };
      ajouterCours(nouveauCours);

      setSaisieCours("");
      setSaisieDiscipline("");
      setSaisieNbMaximalEtudiant("");
      setSaisieDateDebut("");
      setSaisieDateFin("");
    } 
    }

    function saisieCoursHandler(event){
      setSaisieCours(event.target.value);
      if(event.target.value != "") {
        setValidationCours(true);
      } else {
        setValidationCours(false);
      }
    }
    
    function saisieDisciplineHandler(event){
      setSaisieDiscipline(event.target.value);
      if(event.target.value != "") {
        setValidationDiscipline(true);
      } else {
        setValidationDiscipline(false);
      }
    }
    
    function saisieNbMaxHandler(event){
      setSaisieNbMaximalEtudiant(event.target.value);
      if(event.target.value > 0) {
        setValidationNbEleve(true)
      } else {
        setValidationNbEleve(false)
      }
    }
    
    function saisieDateDebutHandler(event){
      setSaisieDateDebut(event.target.value.toString());
      const date = new Date(event.target.value.toString());
      const dateDebut = new Date("2023-01-01");
      const dateFin = new Date("2023-06-06");
      if((date > dateDebut) && (date < dateFin)) {
        setValidationDateDebut(true);
      } else {
        setValidationDateDebut(false);
      }

      
    }
    
    function saisieDateFinHandler(event){
      setSaisieDateFin(event.target.value.toString());
      const dateDebut = new Date("2023-01-01");
      const dateFin = new Date("2023-06-06");
      const date = new Date(event.target.value.toString())
      if((date > dateDebut) && (date < dateFin)) {
        setValidationDateFin(true);
      } else {
        setValidationDateFin(false);
      }
      
    }
    
    
    const handleSubmit = (event) => {
      if(validationDateDebut && validationDateFin) {
      event.preventDefault();
      }
    }
    
  
    if (event.target.value != "") {
      setValidationTypeStage(true);
    } else {
      setValidationTypeStage(false);
    }
  }
  function setSaisieNombre(event) {
    setSaisieNombre(event.target.value.toString());
    if (event.target.value != 0) {
      setSaisieNombre(true);
    } else {
      setSaisieNombre(false);
    }
  }

  function setSaisieDescription(event) {
    setSaisieDescription(event.target.value.toString());
    if (event.target.value != "") {
      setSaisieDescription(true);
    } else {
      setSaisieDescription(false);
    }
  }

  const handleSubmit = (event) => {
    if (validationDateDebut && validationDateFin) {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={ajoutNouveauStageHandler}>
      <div className="AjouterStage_controls">
        <h2>Formulaire d'inscription de milieu de stage</h2>
        <p>
          Stages réguliers ayant lieu à la session hiver Les stages sont du 21
          janvier au 3 mai 2019 (il est toutefois possible après entente avec le
          coordonnateur de débuter le stage un peu plus tôt) Sur réception de ce
          formulaire, le coordonnateur des stages entrera en contact avec le
          responsable en entreprise pour discuter du stage. Veuillez vous
          référez à la page Profil de sortie pour connaître le profil de sortie
          et les compétences des étudiants.
        </p>
        <div></div>
        <br /> Stage :
        <input type="text" value={saisieStage} onChange={saisieStageHandler} />
        <br />
        Nom :<input type="text" value={saisieNom} onChange={saisieNomHandler} />
        <br />
        Courriel :{" "}
        <input
          type="text"
          value={saisieCourriel}
          onChange={saisieCourriel}
        />
        <br /> Telephone :
        <input
          type="text"
          value={saisieTelephone}
          onChange={saisieTelephoneHandler}
        />
        <br /> Type de stage:
        <input
          type="text"
          value={saisieTypeStage}
          onChange={saisieTypeStageHandler}
        />
        <br /> Nombre de poste:
        <input type="int" value={saisieNombre} onChange={saisieNombreHandler} />
        <br /> Nom de l'entreprise:
        <input
          type="text"
          value={saisieNomEntreprise}
          onChange={saisieNomEntrepriseHandler}
        />
        <br /> Description du stage:
        <input
          type="text"
          value={saisieDescription}
          onChange={saisieDescriptionHandler}
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

export default AjouterStage;
