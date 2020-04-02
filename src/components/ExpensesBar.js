/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";

const ExpensesBar = ({ category, labels, colors }) => {

    const createDataset = (category) => {
        let myDatasets = [];
        let labelPointer = 0; 
        let colorPointer = 0; 
        for (let subCat in category){
            let newSub = {
                label: labels[labelPointer],
                backgroundColor: colors[colorPointer],
                stack: "2", 
                data: [category[subCat]]
            }
            myDatasets.push(newSub)
            labelPointer++;
            colorPointer++; 
        }

        return myDatasets; 
    }

  const data = {
    datasets: createDataset(category)
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          stacked: true
        }
      ],
      yAxes: [
        {
          stacked: true
        }
      ]
    },
    tooltips: {
      yAlign: "above",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0
    },
    hover: { mode: null }
  };

  return (
    <WrapperDiv>
      <div className="desktop">
        <HorizontalBar height={110} width={500} data={data} options={options} />
      </div>
      <div className="mobile">
        <HorizontalBar height={110} width={275} data={data} options={options} />
      </div>
    </WrapperDiv>
  );
};

export default ExpensesBar;

const WrapperDiv = styled.div`
  .desktop {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media only screen and (max-width: 600px) {
      display: block;
    }
  }
`;
