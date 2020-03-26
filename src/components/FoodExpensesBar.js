/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FoodExpensesBar = () => {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const expenses = {
    food: {
      groceries: state.isFetching
        ? 100
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].groceries,
      restaurant: state.isFetching
        ? 100
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].restaurant
    }
  };

  const data = {
    datasets: [
      {
        label: "Groceries",
        backgroundColor: "#F35B59",
        stack: "2",
        data: [expenses.food.groceries]
      },
      {
        label: "Restaurants",
        backgroundColor: "#FF8E8C",
        stack: "2",
        data: [expenses.food.restaurant]
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

export default FoodExpensesBar;

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
