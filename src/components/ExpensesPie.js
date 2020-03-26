/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ExpensesPie = () => {
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
          state.userInfo.details[state.userInfo.details.length - 1].rent,
      utilities: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].utilities
    },
    food: {
      groceries: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].groceries,
      restaurant: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].restaurant
    },
    medical: {
      premiums: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].premiums,
      medExpenses: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].medExpenses
    },
    transportation: {
      carPayment: state.isFetching
      ? 300
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].carPayment,
      insurance: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].insurance,
      gas: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].gas,
      carMaintenance: state.isFetching
      ? 20
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].carMaintenance
    },
    necessities: {
      internet: state.isFetching
      ? 62.77
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].internet,
      cell: state.isFetching
      ? 114
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].cell,
      tv: state.isFetching
      ? 50
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].tv,
      studentLoans: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].studentLoans
    },
    personal: {
      clothing: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].clothing,
      entertainment: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].entertainment,
      other: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].pOther
    }
  };

  const data = {
    datasets: [
      {
        data: [
          expenses.housing.rent + expenses.housing.utilities,
          parseFloat(
            (expenses.food.groceries + expenses.food.restaurant).toFixed(2)
          ),
          expenses.medical.premiums + expenses.medical.medExpenses,
          expenses.transportation.carMaintenance +
            expenses.transportation.carPayment +
            expenses.transportation.gas +
            expenses.transportation.insurance,
          expenses.necessities.cell +
            expenses.necessities.internet +
            expenses.necessities.studentLoans +
            expenses.necessities.tv,
          expenses.personal.clothing +
            expenses.personal.entertainment +
            expenses.personal.other
        ],
        backgroundColor: [
          "#F38704",
          "#F35B59",
          "#C95086",
          "#865794",
          "#475580",
          "#2F4858"
        ],
        hoverBackgroundColor: [
          "#FF9411",
          "#FF6866",
          "#D65D93",
          "#9364A1",
          "#54628D",
          "#3C5565"
        ]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Housing",
      "Food",
      "Medical",
      "Transport",
      "Other Necessities",
      "Personal Expenses"
    ]
  };
  const options = {
    cutoutPercentage: 50,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
        fontSize: 15
      }
    }
  };

  const mobileOptions = {
    responsive: false, 
    cutoutPercentage: 50,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
        fontSize: 15
      }
    }
  };

  return (
    <WrapperDiv>
      <div className="desktop">
        <Pie height={450} width={450} data={data} options={options} />
      </div>
      <div className="mobile">
        <Pie height={300} width={300} data={data} options={mobileOptions} />
      </div>
    </WrapperDiv>
  );
};

export default ExpensesPie;

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
    canvas {
      margin: 0 auto; 
    }
  }
`;
