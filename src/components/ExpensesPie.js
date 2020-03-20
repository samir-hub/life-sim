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

  const groceriesPrice = 471.34 * (state.isFetching
    ? 1
    : state.userInfo.details[state.userInfo.details.length - 1] &&
     (state.userInfo.details[state.userInfo.details.length - 1].groceriesindex/100))

  const formattedGroceries = parseFloat(groceriesPrice.toFixed(2)) 

  const restaurantPrice = 48.56 * (state.isFetching
    ? 1
    : state.userInfo.details[state.userInfo.details.length - 1] &&
     (state.userInfo.details[state.userInfo.details.length - 1].restaurantpriceindex/100))

  const formattedRestaurant = parseFloat(restaurantPrice.toFixed(2)) 

  const expenses = {
    housing: {
      rent: state.isFetching
        ? 1000
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].avgrent,
      utilities: 100.00
    },
    food: {
      groceries: formattedGroceries,
      restaurant: formattedRestaurant
    },
    medical: {
      premiums: 50.00,
      medExpenses: 20.00
    },
    transportation: {
      carPayment: 300.00,
      insurance: 150.00,
      gas: 100.00,
      carMaintenance: 20.00
    },
    necessities: {
      internet: 62.77,
      cell: 114.00,
      tv: 50.00,
      studentLoans: state.isFetching
        ? 200
        : (state.userInfo.details[state.userInfo.details.length - 1] &&
            state.userInfo.details[state.userInfo.details.length - 1]
              .education === "Community College") ||
          state.userInfo.details[state.userInfo.details.length - 1]
            .education === "No College"
        ? 0.00
        : 271.00
    },
    personal: {
      clothing: 30.00,
      entertainment: 50.00,
      other: 0.00
    }
  };

  const data = {
    datasets: [
      {
        data: [
          expenses.housing.rent + expenses.housing.utilities,
          parseFloat((expenses.food.groceries + expenses.food.restaurant).toFixed(2)),
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
    cutoutPercentage: 50,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true
      }
    }
  };

  console.log(expenses);

  return (
    <div>
      <h1>Expenses</h1>
      <Pie height={400} width={400} data={data} options={options} />
      {/* <PieLegend totalMoods={totalMoods} /> */}
    </div>
  );
};


export default MoodPie;
