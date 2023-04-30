import React from 'react';

import Tableau from '../Tableau/Tableau';

const TableauDepenses = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fév', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Avr', value: 0 },
    { label: 'Mai', value: 0 },
    { label: 'Juin', value: 0 },
    { label: 'Juil', value: 0 },
    { label: 'Aout', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Déc', value: 0 },
  ];



  return <Tableau dataPoints={chartDataPoints} />;
};

export default TableauDepenses;
f