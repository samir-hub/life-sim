/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useSelector } from "react-redux";
//import PieLegend from './PieLegend';

const MoodPie = () => {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const expenses = {
    housing: {
      rent: state.isFetching
        ? 1000
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].avgrent,
      utilities: 100
    },
    food: {
      groceries: 471.34,
      restaurant: 48.56
    },
    medical: {
      premium: null,
      medExpenses: null
    },
    transportation: {
      carPayment: null,
      insurance: null,
      gas: null,
      carMaintenance: null
    },
    necessities: {
      internet: 62.77,
      cell: 114,
      tv: 50,
      studentLoans: null
    },
    personal: {
      clothing: null,
      entertainment: null,
      other: null
    }
  };

  const data = {
    datasets: [
      {
        data: [
          state.isFetching
            ? 1000
            : state.userInfo.details[state.userInfo.details.length - 1] &&
              state.userInfo.details[state.userInfo.details.length - 1].avgrent,
          20,
          30
        ],
        backgroundColor: [
          "#00917A",
          "#53BBC9",
          "#FCD783",
          "#F2812E",
          "#F47979"
        ],
        hoverBackgroundColor: [
          "#00917A",
          "#53BBC9",
          "#FCD783",
          "#F2812E",
          "#F47979"
        ]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Housing",
      "Food",
      "Medical",
      "Transportation",
      "Other Necessities",
      "Personal Expenses"
    ]
  };
  const options = {
    cutoutPercentage: 20,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true
      }
    }
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
