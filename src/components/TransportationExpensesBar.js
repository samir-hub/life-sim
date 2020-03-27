/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";

const TransportationExpensesBar = ({ transportation }) => {
  const data = {
    datasets: [
      {
        label: "Car Payment",
        backgroundColor: "#865794",
        stack: "2",
        data: [transportation.carPayment]
      },
      {
        label: "Insurance",
        backgroundColor: "#AC7DBA",
        stack: "2",
        data: [transportation.insurance]
      },
      {
        label: "Gas",
        backgroundColor: "#D3A4E1",
        stack: "2",
        data: [transportation.gas]
      },
      {
        label: "Car Maintenance",
        backgroundColor: "#F9CAFF",
        stack: "2",
        data: [transportation.carMaintenance]
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

export default TransportationExpensesBar;

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
