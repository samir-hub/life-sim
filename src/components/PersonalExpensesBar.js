/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PersonalExpensesBar = () => {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const expenses = {
    personal: {
      clothing: state.isFetching
        ? 0
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].clothing,
      entertainment: state.isFetching
        ? 0
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1]
            .entertainment,
      other: state.isFetching
        ? 0
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].pOther
    }
  };

  const data = {
    datasets: [
      {
        label: "Entertainment",
        backgroundColor: "#2F4858",
        stack: "2",
        data: [expenses.personal.entertainment]
      },
      {
        label: "Clothing",
        backgroundColor: "#556E7E",
        stack: "2",
        data: [expenses.personal.clothing]
      },
      {
        label: "Other",
        backgroundColor: "#7C95A5",
        stack: "2",
        data: [expenses.personal.other]
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

export default PersonalExpensesBar;

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
