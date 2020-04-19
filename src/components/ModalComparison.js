import React from "react";
// import Card from "antd/es/card";
// import "antd/es/card/style/css";
// import Avatar from "antd/es/avatar";
// import "antd/es/avatar/style/css";
// import Button from "antd/es/button";
// import "antd/es/button/style/css";
import styled from "styled-components";
import { HorizontalBar } from "react-chartjs-2";
// import one_badge from "../assets/one_badge.svg";
// import two_badge from "../assets/two_badge.svg";

function ModalComparison({ firstChoice, secondChoice }) {
  const firstDI =
    firstChoice &&
    Math.floor((firstChoice.avgmajor / 12) * 0.85) -
      (firstChoice.rent +
        firstChoice.utilities +
        firstChoice.groceries +
        firstChoice.restaurant +
        firstChoice.medExpenses +
        firstChoice.premiums +
        firstChoice.carMaintenance +
        firstChoice.carPayment +
        firstChoice.gas +
        firstChoice.insurance +
        firstChoice.cell +
        firstChoice.internet +
        firstChoice.studentLoans +
        firstChoice.tv +
        firstChoice.clothing +
        firstChoice.entertainment +
        firstChoice.pOther);

  const secondDI =
    secondChoice &&
    Math.floor((secondChoice.avgmajor / 12) * 0.85) -
      (secondChoice.rent +
        secondChoice.utilities +
        secondChoice.groceries +
        secondChoice.restaurant +
        secondChoice.medExpenses +
        secondChoice.premiums +
        secondChoice.carMaintenance +
        secondChoice.carPayment +
        secondChoice.gas +
        secondChoice.insurance +
        secondChoice.cell +
        secondChoice.internet +
        secondChoice.studentLoans +
        secondChoice.tv +
        secondChoice.clothing +
        secondChoice.entertainment +
        secondChoice.pOther);

  const data = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#F38704",
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
    tooltips: {
      yAlign: "above",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  const expensesData = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Housing",
        backgroundColor: "#F38704",
        stack: "1",
        data: [
          firstChoice && Math.round(firstChoice.rent + firstChoice.utilities),
          secondChoice &&
            Math.round(secondChoice.rent + secondChoice.utilities),
        ],
      },
      {
        label: "Food",
        backgroundColor: "#F35B59",
        stack: "1",
        data: [
          firstChoice &&
            Math.round(firstChoice.groceries + firstChoice.restaurant),
          secondChoice &&
            Math.round(secondChoice.groceries + secondChoice.restaurant),
        ],
      },
      {
        label: "Medical",
        backgroundColor: "#C95086",
        stack: "1",
        data: [
          firstChoice &&
            Math.round(firstChoice.premiums + firstChoice.medExpenses),
          secondChoice &&
            Math.round(secondChoice.premiums + secondChoice.medExpenses),
        ],
      },
      {
        label: "Transport",
        backgroundColor: "#865794",
        stack: "1",
        data: [
          firstChoice &&
            Math.round(
              firstChoice.carPayment +
                firstChoice.insurance +
                firstChoice.gas +
                firstChoice.carMaintenance
            ),
          secondChoice &&
            Math.round(
              secondChoice.carPayment +
                secondChoice.insurance +
                secondChoice.gas +
                secondChoice.carMaintenance
            ),
        ],
      },
      {
        label: "Necessities",
        backgroundColor: "#475580",
        stack: "1",
        data: [
          firstChoice &&
            Math.round(
              firstChoice.studentLoans +
                firstChoice.internet +
                firstChoice.cell +
                firstChoice.tv
            ),
          secondChoice &&
            Math.round(
              secondChoice.studentLoans +
                secondChoice.internet +
                secondChoice.cell +
                secondChoice.tv
            ),
        ],
      },
      {
        label: "Personal",
        backgroundColor: "#2F4858",
        stack: "1",
        data: [
          firstChoice &&
            Math.round(
              firstChoice.clothing +
                firstChoice.entertainment +
                firstChoice.pOther
            ),
          secondChoice &&
            Math.round(
              secondChoice.clothing +
                secondChoice.entertainment +
                secondChoice.pOther
            ),
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
    tooltips: {
      xAlign: "right",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  const disData = {
    labels: ["1", "2"],
    datasets: [
      {
        label: "Disposable Income",
        backgroundColor: "#F35B59",
        stack: "1",
        data: [Math.floor(firstDI), Math.floor(secondDI)],
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
    tooltips: {
      yAlign: "right",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  console.log(firstChoice);
  return (
    <StyledDiv>
      <div className="mc-div">
        <h1 className="mc-title">Net Monthly Income</h1>
        <HorizontalBar height={170} width={500} data={data} options={options} />
      </div>
      <div className="mc-div">
        <h1 className="mc-title">Monthly Expenses</h1>
        <HorizontalBar
          height={170}
          width={500}
          data={expensesData}
          options={expensesOptions}
        />
      </div>
      <div className="mc-div">
        <h1 className="mc-title">Monthly Disposable Income</h1>
        <HorizontalBar
          height={170}
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
