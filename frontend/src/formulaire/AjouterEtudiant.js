import React, { useState } from "react";

import '../style/AjouterEtudiant.css';
function NouveauEtudiant({ ajouterEtudiant }) {

  const [validationNom, setValidationNom] = useState(false);
  const [validationPrenom, setValidationPrenom] = useState(false);
  const [validationCourielle, setValidationCourielle] = useState(false);
  let tableauImage = ["https://corp.smartbrief.com/wp-content/uploads/2023/03/AMERICANED_SUTTON_052-726x420.jpg", "https://as2.ftcdn.net/v2/jpg/04/30/38/55/1000_F_430385529_w99D64FtIxpBBUn8lpjcVjFJRLxac6wP.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/0008-14112011j_preview_ecran.jpg/1200px-0008-14112011j_preview_ecran.jpg", "https://static.actu.fr/uploads/2020/10/adobestock-360989390.jpeg", "https://media.licdn.com/dms/image/C4E22AQHza8gN-ZINxQ/feedshare-shrink_800/0/1669656804443?e=2147483647&v=beta&t=3a3ksjBh6-kT1NbeIuKXcGpZwXP9w_HqR5N-RX7XGbc", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg", "https://vid.alarabiya.net/images/2023/02/17/97dd1488-977f-469d-b05e-45aea2088b46/97dd1488-977f-469d-b05e-45aea2088b46.jpg?crop=4:3&width=1200", "https://m.media-amazon.com/images/M/MV5BZWU0NzFhNGQtMDVmYS00Njg1LTk1OWYtMTI3MTRlMzEyOTQ5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg"]
  let [saisieCourielle, setSaisieCourielle] = useState("");
  let [saisieNom, setSaisieNom] = useState("");
  let [saisiePrenom, setSaisiePrenom] = useState("");
  let valeurImageAleatoire = Math.floor(Math.random() * tableauImage.length);

  function ajoutNouveauEtudiantHandler(event) {
    event.preventDefault();
    if (validationNom && validationPrenom && validationCourielle) {
      const nouveauEtudiant = {
        id: "P5",
        courielle: saisieCourielle,
        nom: saisieNom,
        prenom: saisiePrenom,
        image: tableauImage[valeurImageAleatoire],
        Cours: "Pas de cours"

      };
      ajouterEtudiant(nouveauEtudiant);

      setSaisieCourielle("");
      setSaisieNom("");
      setSaisiePrenom("");
    }
  }


  function saisieCourielleHandler(event) {
    setSaisieCourielle(event.target.value);
    if (event.target.value != "") {
      setValidationCourielle(true);
    } else {
      setValidationCourielle(false);
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

  function saisiePrenomHandler(event) {
    setSaisiePrenom(event.target.value);
    if (event.target.value != "") {
      setValidationPrenom(true);
    } else {
      setValidationPrenom(false);
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <form onSubmit={ajoutNouveauEtudiantHandler}>
      <div className="AjouterEtudiant_controls" >
        <h2>Ajouter etudiant</h2>
        <br /> courielle: <input type="text" value={saisieCourielle} onChange={saisieCourielleHandler} />
        <br />Nom :<input type="text" value={saisieNom} onChange={saisieNomHandler} />
        <br />Prénom : <input type="text" value={saisiePrenom} onChange={saisiePrenomHandler} />

        <div className="AjouterEtudiant_action" >
          <button className="AjouterEtudiant_Button" type="submit" onSubmit={handleSubmit}> Ajouter l'étudiant</button>
        </div>
      </div>
    </form>
  );
}

export default NouveauEtudiant;
