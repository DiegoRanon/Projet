import ReactDOM from "react-dom";
import React, { useState } from "react";
import ListeEtudiants from "../../../components/Etudiant/ListeEtudiant";
import AjouterEtud from "../../../formulaire/AjouterEtudiant";

function Etudiants() {
  const [etudiants, setEtudiant] = useState([
    {
      id: "P1",
      courielle: "blblblb@fish.com",
      nom: "Sylvain",
      prenom: "Labranche",
      image:
        "https://corp.smartbrief.com/wp-content/uploads/2023/03/AMERICANED_SUTTON_052-726x420.jpg",
      Cours: ["Web et bases de données", "Algorithmie et programmation"],
    },
    {
      id: "P2",
      courielle: "blblblb@fish.com",
      nom: "Bergeron",
      prenom: "Mathieu",
      image:
        "https://as2.ftcdn.net/v2/jpg/04/30/38/55/1000_F_430385529_w99D64FtIxpBBUn8lpjcVjFJRLxac6wP.jpg",
      Cours: ["Environnement graphique client", "Structures de données"],
    },
    {
      id: "P3",
      courielle: "blblblb@fish.com",
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
      <ListeEtudiants etudiants={etudiants} />
      <AjouterEtud ajouterEtud={ajouterEtud} />
    </div>
  );
}

export default Etudiants;