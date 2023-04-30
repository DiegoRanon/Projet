import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import ListeCours from "../components/Cours/ListeCours";
import AjouterCours from "../formulaire/AjouterCours";
import FiltrageCours from "../components/Filtrage/FiltrageCours";

function LesCours() {
   const [filteredSession, setFilteredSession] = useState("session 4");

   const filterChangeHandler = (selectedSession) => {
      setFilteredSession(selectedSession);
   };

   const [pagePerso, setPagePerso] = useState(false);



   const [cours, setCours] = useState([
      {
         id: "C1",
         titre: "Environnement graphique ",
         discipline: "Informatique",
         nbMaximalEtudiant: "28",
         dateDebut: "2022-01-24",
         dateFin: "2022-05-16",
         session: "session 4",
         classes: [
            { prenom: "Alice", nom: "Durand" },
            { prenom: "Bob", nom: "Martin" },
            { prenom: "Charlie", nom: "Lefebvre" },
            { prenom: "David", nom: "Girard" },
            { prenom: "Émilie", nom: "Roy" },
            { prenom: "Frédéric", nom: "Dubois" },
            { prenom: "Gabrielle", nom: "Lavoie" },
            { prenom: "Hector", nom: "Boucher" },
            { prenom: "Isabelle", nom: "Côté" },
            { prenom: "Jean", nom: "Tremblay" },
            { prenom: "Karine", nom: "Bergeron" },
            { prenom: "Lucie", nom: "Pelletier" },
            { prenom: "Marc", nom: "Gagnon" },
            { prenom: "Nathalie", nom: "Rousseau" },
            { prenom: "Olivier", nom: "Laporte" },
            { prenom: "Pascal", nom: "Lachance" },
            { prenom: "Quentin", nom: "Leclerc" },
            { prenom: "Roxanne", nom: "Dufour" },
            { prenom: "Sylvain", nom: "Bélanger" },
            { prenom: "Thomas", nom: "Moreau" },
            { prenom: "Ulysse", nom: "Laliberté" },
            { prenom: "Valérie", nom: "Gauthier" },
            { prenom: "William", nom: "Fournier" },
            { prenom: "Xavier", nom: "Beaudoin" },
            { prenom: "Yannick", nom: "Leduc" },
            { prenom: "Zoé", nom: "Dupuis" },
            { prenom: "Adrien", nom: "Gagné" },
            { prenom: "Béatrice", nom: "Jacques" },
            { prenom: "Charles", nom: "Dion" }
         ]

      },
      {
         id: "C2",
         titre: "Web et bases de données",
         discipline: "Informatique",
         nbMaximalEtudiant: "28",
         dateDebut: "2023-01-23",
         dateFin: "2023-05-15",
         session: "session 4",
         classes: [
            { prenom: "Alice", nom: "Durand" },
            { prenom: "Bob", nom: "Martin" },
            { prenom: "Charlie", nom: "Lefebvre" },
            { prenom: "David", nom: "Girard" },
            { prenom: "Émilie", nom: "Roy" },
            { prenom: "Frédéric", nom: "Dubois" },
            { prenom: "Gabrielle", nom: "Lavoie" },
            { prenom: "Hector", nom: "Boucher" },
            { prenom: "Isabelle", nom: "Côté" },
            { prenom: "Jean", nom: "Tremblay" },
            { prenom: "Karine", nom: "Bergeron" },
            { prenom: "Lucie", nom: "Pelletier" },
            { prenom: "Marc", nom: "Gagnon" },
            { prenom: "Nathalie", nom: "Rousseau" },
            { prenom: "Olivier", nom: "Laporte" },
            { prenom: "Pascal", nom: "Lachance" },
            { prenom: "Quentin", nom: "Leclerc" },
            { prenom: "Roxanne", nom: "Dufour" },
            { prenom: "Sylvain", nom: "Bélanger" },
            { prenom: "Thomas", nom: "Moreau" },
            { prenom: "Ulysse", nom: "Laliberté" },
            { prenom: "Valérie", nom: "Gauthier" },
            { prenom: "William", nom: "Fournier" },
            { prenom: "Xavier", nom: "Beaudoin" },
            { prenom: "Yannick", nom: "Leduc" },
            { prenom: "Zoé", nom: "Dupuis" },
            { prenom: "Adrien", nom: "Gagné" },
            { prenom: "Béatrice", nom: "Jacques" },
            { prenom: "Charles", nom: "Dion" }
         ]
      },
      {
         id: "C3",
         titre: "Interface Utilisateur",
         discipline: "Informatique",
         nbMaximalEtudiant: "28",
         dateDebut: "2023-01-23",
         dateFin: "2023-05-15",
         session: "session 3",
         classes: [
            { prenom: "Alice", nom: "Durand" },
            { prenom: "Bob", nom: "Martin" },
            { prenom: "Charlie", nom: "Lefebvre" },
            { prenom: "David", nom: "Girard" },
            { prenom: "Émilie", nom: "Roy" },
            { prenom: "Frédéric", nom: "Dubois" },
            { prenom: "Gabrielle", nom: "Lavoie" },
            { prenom: "Hector", nom: "Boucher" },
            { prenom: "Isabelle", nom: "Côté" },
            { prenom: "Jean", nom: "Tremblay" },
            { prenom: "Karine", nom: "Bergeron" },
            { prenom: "Lucie", nom: "Pelletier" },
            { prenom: "Marc", nom: "Gagnon" },
            { prenom: "Nathalie", nom: "Rousseau" },
            { prenom: "Olivier", nom: "Laporte" },
            { prenom: "Pascal", nom: "Lachance" },
            { prenom: "Quentin", nom: "Leclerc" },
            { prenom: "Roxanne", nom: "Dufour" },
            { prenom: "Sylvain", nom: "Bélanger" },
            { prenom: "Thomas", nom: "Moreau" },
            { prenom: "Ulysse", nom: "Laliberté" },
            { prenom: "Valérie", nom: "Gauthier" },
            { prenom: "William", nom: "Fournier" },
            { prenom: "Xavier", nom: "Beaudoin" },
            { prenom: "Yannick", nom: "Leduc" },
            { prenom: "Zoé", nom: "Dupuis" },
            { prenom: "Adrien", nom: "Gagné" },
            { prenom: "Béatrice", nom: "Jacques" },
            { prenom: "Charles", nom: "Dion" }
         ]
      },
      {
         id: "C4",
         titre: "Programmation Structurée",
         discipline: "Informatique",
         nbMaximalEtudiant: "28",
         dateDebut: "2023-01-23",
         dateFin: "2023-05-15",
         session: "session 2",
         classes: [
            { prenom: "Alice", nom: "Durand" },
            { prenom: "Bob", nom: "Martin" },
            { prenom: "Charlie", nom: "Lefebvre" },
            { prenom: "David", nom: "Girard" },
            { prenom: "Émilie", nom: "Roy" },
            { prenom: "Frédéric", nom: "Dubois" },
            { prenom: "Gabrielle", nom: "Lavoie" },
            { prenom: "Hector", nom: "Boucher" },
            { prenom: "Isabelle", nom: "Côté" },
            { prenom: "Jean", nom: "Tremblay" },
            { prenom: "Karine", nom: "Bergeron" },
            { prenom: "Lucie", nom: "Pelletier" },
            { prenom: "Marc", nom: "Gagnon" },
            { prenom: "Nathalie", nom: "Rousseau" },
            { prenom: "Olivier", nom: "Laporte" },
            { prenom: "Pascal", nom: "Lachance" },
            { prenom: "Quentin", nom: "Leclerc" },
            { prenom: "Roxanne", nom: "Dufour" },
            { prenom: "Sylvain", nom: "Bélanger" },
            { prenom: "Thomas", nom: "Moreau" },
            { prenom: "Ulysse", nom: "Laliberté" },
            { prenom: "Valérie", nom: "Gauthier" },
            { prenom: "William", nom: "Fournier" },
            { prenom: "Xavier", nom: "Beaudoin" },
            { prenom: "Yannick", nom: "Leduc" },
            { prenom: "Zoé", nom: "Dupuis" },
            { prenom: "Adrien", nom: "Gagné" },
            { prenom: "Béatrice", nom: "Jacques" },
            { prenom: "Charles", nom: "Dion" }
         ]
      },
      {
         id: "C5",
         titre: "Algorithmie et programmation",
         discipline: "Informatique",
         nbMaximalEtudiant: "28",
         dateDebut: "2023-01-23",
         dateFin: "2023-05-15",
         session: "session 1",
         classes: [
            { prenom: "Alice", nom: "Durand" },
            { prenom: "Bob", nom: "Martin" },
            { prenom: "Charlie", nom: "Lefebvre" },
            { prenom: "David", nom: "Girard" },
            { prenom: "Émilie", nom: "Roy" },
            { prenom: "Frédéric", nom: "Dubois" },
            { prenom: "Gabrielle", nom: "Lavoie" },
            { prenom: "Hector", nom: "Boucher" },
            { prenom: "Isabelle", nom: "Côté" },
            { prenom: "Jean", nom: "Tremblay" },
            { prenom: "Karine", nom: "Bergeron" },
            { prenom: "Lucie", nom: "Pelletier" },
            { prenom: "Marc", nom: "Gagnon" },
            { prenom: "Nathalie", nom: "Rousseau" },
            { prenom: "Olivier", nom: "Laporte" },
            { prenom: "Pascal", nom: "Lachance" },
            { prenom: "Quentin", nom: "Leclerc" },
            { prenom: "Roxanne", nom: "Dufour" },
            { prenom: "Sylvain", nom: "Bélanger" },
            { prenom: "Thomas", nom: "Moreau" },
            { prenom: "Ulysse", nom: "Laliberté" },
            { prenom: "Valérie", nom: "Gauthier" },
            { prenom: "William", nom: "Fournier" },
            { prenom: "Xavier", nom: "Beaudoin" },
            { prenom: "Yannick", nom: "Leduc" },
            { prenom: "Zoé", nom: "Dupuis" },
            { prenom: "Adrien", nom: "Gagné" },
            { prenom: "Béatrice", nom: "Jacques" },
            { prenom: "Charles", nom: "Dion" }
         ]
      }


   ]);

   function ajouterCours(nouveauCours) {
      setCours(() => cours.concat(nouveauCours));
      //objectifsCours.push(nouvelObjectif);
   }

   const coursFiltrees = cours.filter((leCours) => {
      return leCours.session === filteredSession;
   });

   

   return (<div>
      <FiltrageCours
         selected={filteredSession}
         onChangementFiltre={filterChangeHandler}
      />
      <ListeCours cours={coursFiltrees}/>
      <AjouterCours ajouterCours={ajouterCours} />
   </div>);
}

export default LesCours;