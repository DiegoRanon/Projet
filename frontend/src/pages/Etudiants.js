import ReactDOM from "react-dom";
import React, { useState } from "react";
import ListeEtudiants from "../components/Etudiant/ListeEtudiants";
import AjouterEtud from "../formulaire/AjouterEtud";

function Etudiants() {
  const [etudiants, setEtudiant] = useState([
    {
      id: "P1",
      dateEmbauche: "1/09/2002",
      nom: "Sylvain",
      prenom: "Labranche",
      image:
        "https://corp.smartbrief.com/wp-content/uploads/2023/03/AMERICANED_SUTTON_052-726x420.jpg",
      Cours: ["Web et bases de données", "Algorithmie et programmation"],
    },
    {
      id: "P2",
      dateEmbauche: "2/01/2003",
      nom: "Bergeron",
      prenom: "Mathieu",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/30/38/55/1000_F_430385529_w99D64FtIxpBBUn8lpjcVjFJRLxac6wP.jpg",
      Cours: ["Environnement graphique client", "Structures de données"],
    },
    {
      id: "P3",
      dateEmbauche: "31/08/2005",
      nom: "Deschênes",
      prenom: "Simon",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/30/38/55/1000_F_430385529_w99D64FtIxpBBUn8lpjcVjFJRLxac6wP.jpg",
      Cours: ["Objets connectés", "Interface Utilisateur"],
    },
  ]);

  function ajouterEtud(nouveauEtud) {
    setEtudiant(() => etudiants.concat(nouveauEtud));

  }

  return (
    <div>
      <ListeEtud etudiants={etudiants} />
      <AjouterEtud ajouterEtud={ajouterEtud} />
    </div>
  );
}

export default Etudiants;