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
    labels: ["", ""],
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
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          label += "$";
          label += (Math.round(tooltipItem.xLabel * 100) / 100)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return label;
        },
      },
      yAlign: "above",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  const expensesData = {
    labels: ["", ""],
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
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          label += "$";
          label += (Math.round(tooltipItem.xLabel * 100) / 100)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return label;
        },
      },
      yAlign: "right",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  const disData = {
    labels: ["", ""],
    datasets: [
      {
        label: "Disposable Income",
        backgroundColor: "#865794",
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
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          label += "$";
          label += (Math.round(tooltipItem.xLabel * 100) / 100)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return label;
        },
      },
      yAlign: "right",
      titleFontSize: 0,
      titleSpacing: 0,
      titleMarginBottom: 0,
    },
    hover: { mode: null },
  };

  return (
    <StyledDiv>
      <h1 className="mc-title">Monthly Net Income</h1>
      <div className="expenses-card-div">
        <div className="expenses-card-inner">
          <img
            className="mc-graph-badge mc-graph-badge1"
            src={one_badge}
            alt="one badge"
          />
          <img
            className="mc-graph-badge mc-graph-badge2"
            src={two_badge}
            alt="two badge"
          />
        </div>
        <HorizontalBar height={260} width={400} data={data} options={options} />
      </div>
      <h1 className="mc-title">Monthly Expenses</h1>
      <div className="expenses-card-div">
        <div className="expenses-card-inner">
          <img
            className="mc-graph-badge mc-graph-badge1"
            src={one_badge}
            alt="one badge"
          />
          <img
            className="mc-graph-badge mc-graph-badge2"
            src={two_badge}
            alt="two badge"
          />
        </div>
        <HorizontalBar
          height={260}
          width={400}
          data={expensesData}
          options={expensesOptions}
        />
      </div>
      <h1 className="mc-title">Monthly Disposable Income</h1>
      <div className="expenses-card-div">
        <div className="expenses-card-inner">
          <img
            className="mc-graph-badge mc-graph-badge1"
            src={one_badge}
            alt="one badge"
          />
          <img
            className="mc-graph-badge mc-graph-badge2"
            src={two_badge}
            alt="two badge"
          />
        </div>
        <HorizontalBar
          height={260}
          width={400}
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
  .expenses-card-div {
    width: 400px;
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    @media only screen and (max-width: 600px) {
      width: 300px;
    }
    .expenses-card-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;
      @media only screen and (max-width: 600px) {
        justify-content: center;
        margin-bottom: 0px;
      }
      .mc-graph-badge {
        height: 50px;
        margin: 30px 0;
        @media only screen and (max-width: 600px) {
          height: 40px;
          margin: 0;
        }
      }
      .mc-graph-badge1 {
        @media only screen and (max-width: 600px) {
          height: 40px;
          margin: 0;
          margin-bottom: 20px;
        }
      }
      .mc-graph-badge2 {
        @media only screen and (max-width: 600px) {
          height: 40px;
          margin: 0;
          margin-top: 15px;
          margin-bottom: 20px;
        }
      }
    }
  }
  .mc-title {
    margin: 0;
    text-align: center;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
  }
`;
