/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";

const NecessitiesExpensesBar = ({ necessities }) => {
  const data = {
    datasets: [
      {
        label: "Student Loans",
        backgroundColor: "#475580",
        stack: "2",
        data: [necessities.studentLoans]
      },
      {
        label: "Internet",
        backgroundColor: "#6D7BA6",
        stack: "2",
        data: [necessities.internet]
      },
      {
        label: "Cell",
        backgroundColor: "#94A2CD",
        stack: "2",
        data: [necessities.cell]
      },
      {
        label: "TV",
        backgroundColor: "#BAC8F3",
        stack: "2",
        data: [necessities.tv]
      }
    ]
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

export default NecessitiesExpensesBar;

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
