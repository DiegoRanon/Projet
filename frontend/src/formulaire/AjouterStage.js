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
    
    return (
      <form onSubmit={ajoutNouveauCoursHandler}>
        <div className="AjouterCours_controls" >
        <h2>Ajouter un cours</h2>
        <br/> Cours :<input type="text" value={saisieCours} onChange={saisieCoursHandler}/> 
        <br/>Discipline :<input type="text" value={saisieDiscipline} onChange={saisieDisciplineHandler}/>
        <br/>Nombre maximal d'étudiant : <input type="number" min="1" max="30"value={saisieNbMaximalEtudiant} onChange={saisieNbMaxHandler}/> 
        <br/> Date Début :<input type="date" value={saisieDateDebut} onChange={saisieDateDebutHandler}/> 
        <br/> Date Fin :<input type="date" value={saisieDateFin} onChange={saisieDateFinHandler}/> 
        <div className="boutonAjouter" > 
        <button type="submit" className="AjouterCours_button" onSubmit={handleSubmit}> Ajouter le Cours</button>
        </div> 
        </div> 
      </form>
    );
  }
  
  export default AjouterCours;
  