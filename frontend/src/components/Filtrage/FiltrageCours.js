import React from 'react';

import '../../style/FiltrageCours.css';

const FiltrageCours = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtrer par session : </label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='session 4'>session 4</option>
          <option value='session 3'>session 3</option>
          <option value='session 2'>session 2</option>
          <option value='session 1'>session 1</option>
        </select>
      </div>
    </div>
  );
};

export default FiltrageCours;
