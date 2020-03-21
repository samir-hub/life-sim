/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
//import styled from "styled-components";
import { useSelector } from "react-redux";
//import PieLegend from './PieLegend';

const NecessitiesExpensesBar = () => {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const groceriesPrice =
    471.34 *
    (state.isFetching
      ? 1
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1]
          .groceriesindex / 100);

  const formattedGroceries = parseFloat(groceriesPrice.toFixed(2));

  const restaurantPrice =
    48.56 *
    (state.isFetching
      ? 1
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1]
          .restaurantpriceindex / 100);

  const formattedRestaurant = parseFloat(restaurantPrice.toFixed(2));

  const expenses = {
    housing: {
      rent: state.isFetching
        ? 1000
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].avgrent,
      utilities: 100.0
    },
    food: {
      groceries: formattedGroceries,
      restaurant: formattedRestaurant
    },
    medical: {
      premiums: 50.0,
      medExpenses: 20.0
    },
    transportation: {
      carPayment: 300.0,
      insurance: 150.0,
      gas: 100.0,
      carMaintenance: 20.0
    },
    necessities: {
      internet: 62.77,
      cell: 114.0,
      tv: 50.0,
      studentLoans: state.isFetching
        ? 200
        : (state.userInfo.details[state.userInfo.details.length - 1] &&
            state.userInfo.details[state.userInfo.details.length - 1]
              .education === "Community College") ||
          state.userInfo.details[state.userInfo.details.length - 1]
            .education === "No College"
        ? 0.0
        : 271.0
    },
    personal: {
      clothing: 30.0,
      entertainment: 50.0,
      other: 0.0
    }
  };

  const data = {
    labels: ["Necessities"],
    datasets: [
      {
        label: "Student Loans",
        backgroundColor: "#475580",
        stack: "2",
        data: [expenses.necessities.studentLoans]
      },
      {
        label: "Internet",
        backgroundColor: "#6D7BA6",
        stack: "2",
        data: [expenses.necessities.internet]
      },
      {
        label: "Cell",
        backgroundColor: "#94A2CD",
        stack: "2",
        data: [expenses.necessities.cell]
      },
      {
        label: "TV",
        backgroundColor: "#BAC8F3",
        stack: "2",
        data: [expenses.necessities.tv]
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
    }
  };

  console.log(expenses);

  return (
    <div>
      <HorizontalBar height={110} width={300} data={data} options={options} />
    </div>
  );
};

export default NecessitiesExpensesBar;
