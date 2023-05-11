import React from "react";
import ReactDOM from "react-dom";

function ProfilEtCompetence() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="profils-Competences">

        <div className="carteProfile">
          <div className="titre-reseaux">
            <h1>Nos étudiants en Gestion de réseaux et sécurité</h1>
          </div>
          <div className="reseau">
            <ul>
              <li>Monter un serveur</li>
              <li>Planifier et implanter un réseau</li>
              <li>
                Implanter les technologies et les services propres au réseau
                Internet
              </li>
              <li>Assurer la gestion du réseau</li>
              <li>Planifier et déployer des environnements virtuels</li>
              <li>
                Planifier et mettre en place la sécurité des systèmes
                informatiques
              </li>
              <li>Déployer les nouvelles technologies des réseaux</li>
              <li>Automatiser les tâches d'administration réseaux</li>
              <li>Superviser les réseaux</li>
              <li>Assurer le soutien technique aux utilisateurs</li>
              <li>Découvrir des nouvelles technologies</li>
            </ul>
          </div>
          </div>
          <div className="carteProfile">
          <div className="titre-développement">
            <h1>Nos étudiant en Développement d'applications informatiques</h1>
          </div>
          <div className="profilsEtCompetences">
            <ul>
              <li>Participer à l''analyse des systèmes à implanter</li>
              <li>
                Détecter les problèmes, en dégager la structure et trouver les
                solutions logiques
              </li>
              <li>
                Effectuer les jeux d’essai et la mise au point des programmes et
                des systèmes
              </li>
              <li>
                Elaborer des systèmes et participer à leur implantation ou à
                leur modification dans les entreprises
              </li>
              <li>Programmer des objets connectés</li>
              <li>Sécuriser les applications informatiques</li>
              <li>Virtualiser des postes de travail</li>
              <li>Comprendre les notions fondamentales des réseaux</li>
              <li>
                Gérer les versions des fichiers sources des applications
                informatiques
              </li>
              <li>Déployer des applications infonuagiques</li>
              <li>Découvrir les nouvelles technologies</li>
            </ul>
            </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default ProfilEtCompetence;
