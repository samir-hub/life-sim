import React from "react";
// import Card from "antd/es/card";
// import "antd/es/card/style/css";
// import Avatar from "antd/es/avatar";
// import "antd/es/avatar/style/css";
// import Button from "antd/es/button";
// import "antd/es/button/style/css";
import styled from "styled-components";
import { HorizontalBar } from "react-chartjs-2";
import one_badge from "../assets/one_badge.svg";
import two_badge from "../assets/two_badge.svg";

function ModalComparison({ firstChoice, secondChoice }) {
  const data = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#a88add",
        stack: "1",
        data: [
          firstChoice && Math.floor((firstChoice.avgmajor / 12) * 0.85),
          Math.floor(secondChoice && (secondChoice.avgmajor / 12) * 0.85),
        ],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const expensesData = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Housing",
        backgroundColor: "#a88add",
        stack: "1",
        data: [
          firstChoice && firstChoice.rent + firstChoice.utilities,
          secondChoice && secondChoice.rent + secondChoice.utilities,
        ],
      },
      {
        label: "Food",
        backgroundColor: "#0cc2aa",
        stack: "1",
        data: [
          firstChoice && firstChoice.groceries + firstChoice.restaurant,
          secondChoice && secondChoice.groceries + secondChoice.restaurant,
        ],
      },
      {
        label: "Medical",
        backgroundColor: "#0cc2aa",
        stack: "1",
        data: [
          firstChoice && firstChoice.premiums + firstChoice.medExpenses,
          secondChoice && secondChoice.premiums + secondChoice.medExpenses,
        ],
      },
      {
        label: "Transport",
        backgroundColor: "#0cc2aa",
        stack: "1",
        data: [
          firstChoice &&
            firstChoice.carPayment +
              firstChoice.insurance +
              firstChoice.gas +
              firstChoice.carMaintenance,
          secondChoice &&
            secondChoice.carPayment +
              secondChoice.insurance +
              secondChoice.gas +
              secondChoice.carMaintenance,
        ],
      },
      {
        label: "Necessities",
        backgroundColor: "#0cc2aa",
        stack: "1",
        data: [
          firstChoice &&
            firstChoice.studentLoans +
              firstChoice.internet +
              firstChoice.cell +
              firstChoice.tv,
          secondChoice &&
            secondChoice.studentLoans +
              secondChoice.internet +
              secondChoice.cell +
              secondChoice.tv,
        ],
      },
      {
        label: "Personal",
        backgroundColor: "#0cc2aa",
        stack: "1",
        data: [
          firstChoice &&
            firstChoice.clothing +
              firstChoice.entertainment +
              firstChoice.pOther,
          secondChoice &&
            secondChoice.clothing +
              secondChoice.entertainment +
              secondChoice.pOther,
        ],
      },
    ],
  };

  const expensesOptions = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const disData = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Disposable Income",
        backgroundColor: "#a88add",
        stack: "1",
        data: [250, -300],
      },
    ],
  };

  const disOptions = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  console.log(firstChoice);
  return (
    <StyledDiv>
      <div className="mc-div">
        <h1 className="mc-title">Net Monthly Income</h1>
        <HorizontalBar height={150} width={500} data={data} options={options} />
      </div>
      <div className="mc-div">
        <h1 className="mc-title">Monthly Expenses</h1>
        <HorizontalBar
          height={150}
          width={500}
          data={expensesData}
          options={expensesOptions}
        />
      </div>
      <div className="mc-div">
        <h1 className="mc-title">Monthly Disposable Income</h1>
        <HorizontalBar
          height={150}
          width={500}
          data={disData}
          options={disOptions}
        />
      </div>
    </StyledDiv>
  );
}

export default ModalComparison;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .mc-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .mc-title {
      margin: 0;
    }
  }
`;
