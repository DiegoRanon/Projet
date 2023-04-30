import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/Logomomo.png';

function Acceuil() {

    return <div className="App">
        <header className="App-header">
            <img src={logo} alt='logo montmorency' className='lmj-logo' width="400" height="100" />
            <h1>Description du site </h1>
            <p>Ce site permet de gérer les inscriptions à des cours au collège Montmorency. Tout d'abord, Il y a une page Professeur qui donne la liste des professeurs enseignant au collège. Ensuite, Il y a une page Cours qui indique la liste des cours donnés à la session actuelle au Collège. Finalement, il y aussi une page individuelle par cours.</p>

        </header>
    </div>
}

export default Acceuil;