/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
//import PieLegend from './PieLegend';

const MoodPie = () => {


 const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            '#00917A',
            '#53BBC9',
            '#FCD783',
            '#F2812E',
            '#F47979',
          ],
          hoverBackgroundColor: [
            '#00917A',
            '#53BBC9',
            '#FCD783',
            '#F2812E',
            '#F47979',
          ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};
  const options = {
    cutoutPercentage: 20,
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontColor: '#333',
        usePointStyle: true,
      },
    },
  };

  return (
    <div>
      <PieChartH2>Expenses</PieChartH2>
      <Pie height={400} width={400} data={data} options={options} />
      {/* <PieLegend totalMoods={totalMoods} /> */}
    </div>
  );
};

const PieChartH2 = styled.div`
  height: 19px;
  margin-left: 9px;
  margin-bottom: 19px;

  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #0c423b;
`;

export default MoodPie;
