import React from 'react';

import '../../style/FiltrageStage.css';

const FiltrageStage = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };



  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Affichage : </label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='option1'>Toutes les stages</option>
          <option value='option2'>Réseaux et sécurité</option>
          <option value='option3'>Développement d'applications</option>
        </select>
      </div>
    </div>
  );
};

export default FiltrageStage;
