import React from 'react';

import '../../style/FiltrageEtudiant.css';

const FiltrageEtudiants = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Affichage : </label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='etudiants'>Toutes les étudiants</option>
          <option value='etudiantsRechercheStage'>Étudiants en recherche de stage</option>
        </select>
      </div>
    </div>
  );
};

export default FiltrageEtudiants;
