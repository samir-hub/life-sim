/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const ExpensesPie = ({
  housing,
  food,
  medical,
  transportation,
  necessities,
  personal,
}) => {
  const data = {
    datasets: [
      {
        data: [
          housing.rent + housing.utilities,
          parseFloat((food.groceries + food.restaurant).toFixed(2)),
          medical.premiums + medical.medExpenses,
          transportation.carMaintenance +
            transportation.carPayment +
            transportation.gas +
            transportation.insurance,
          necessities.cell +
            necessities.internet +
            necessities.studentLoans +
            necessities.tv,
          personal.clothing + personal.entertainment + personal.other,
        ],
        backgroundColor: [
          "#F38704",
          "#F35B59",
          "#C95086",
          "#865794",
          "#475580",
          "#2F4858",
        ],
        hoverBackgroundColor: [
          "#FF9411",
          "#FF6866",
          "#D65D93",
          "#9364A1",
          "#54628D",
          "#3C5565",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "Housing",
      "Food",
      "Medical",
      "Transport",
      "Other Necessities",
      "Personal Expenses",
    ],
  };
  const options = {
    cutoutPercentage: 50,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
        fontSize: 15,
      },
    },
    tooltips: {
      mode: "label",
      callbacks: {
        label: function (tooltipItem, data) {
          var item = tooltipItem.index;
          return (
            data.labels[item] +
            ": $" +
            data.datasets[0].data[item]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            ""
          );
        },
      },
      yAlign: "below"
    },
  };

  // const reducer = (acc, current) => {
  //   return acc + current;
  // };

  // const expensesTotal =
  //   Object.values(housing).reduce(reducer) +
  //   Object.values(food).reduce(reducer) +
  //   Object.values(medical).reduce(reducer) +
  //   Object.values(transportation).reduce(reducer) +
  //   Object.values(necessities).reduce(reducer) +
  //   Object.values(personal).reduce(reducer);

  const mobileOptions = {
    responsive: false,
    cutoutPercentage: 50,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
        fontSize: 15,
      },
    },
    tooltips: {
      mode: "label",
      callbacks: {
        label: function (tooltipItem, data) {
          var item = tooltipItem.index;
          return (
            data.labels[item] +
            ": $" +
            data.datasets[0].data[item]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            ""
          );
        },
      },
    },
  };

  return (
    <WrapperDiv>
      <div className="desktop">
        <Pie height={450} width={450} data={data} options={options} />
        {/* <div className="pie-total">
          <h1 className="pie-total-number">
            $
            {expensesTotal
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div> */}
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
    position: relative;
    .pie-total {
      width: 200px;
      height: 100px;
      position: absolute;
      top: 43%;
      margin-top: -50px;
      left: 50%;
      margin-left: -100px;
      .pie-total-number {
        color: #c35355;
        font-size: 40px;
        margin: 0;
        height: 100px;
      }
    }
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
