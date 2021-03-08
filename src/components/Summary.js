import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import girl_rocket from "../assets/girl_rocket.png";
import DemoModal from "./DemoModal";
import { summary } from "../data/demos";

function Summary({ setActive }) {
  const history = useHistory();
  const state = useSelector((state) => {
    return {
      currentDetails: state.currentDetails,
    };
  });

  const handleClick = (item) => {
    if (item === "4") {
      history.push("/entryform");
    } else {
      setActive(`${item}`);
    }
  };

  const screen = window.screen.width;

  const expenses = {
    housing: {
      rent:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.rent
        ),
      utilities:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.utilities
        ),
    },
    food: {
      groceries:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.groceries
        ),
      restaurant:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.restaurant
        ),
    },
    medical: {
      premiums:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.premiums
        ),
      medExpenses:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.medExpenses
        ),
    },
    transportation: {
      carPayment:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.carPayment
        ),
      insurance:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.insurance
        ),
      gas:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.gas
        ),
      carMaintenance:
        state.currentDetails &&
        Math.floor(
          state.currentDetails
            .carMaintenance
        ),
    },
    necessities: {
      studentLoans:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.studentLoans
        ),
      cell:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.cell
        ),
      internet:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.internet
        ),

      tv:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.tv
        ),
    },
    personal: {
      entertainment:
        state.currentDetails &&
        Math.floor(
          state.currentDetails
            .entertainment
        ),
      clothing:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.clothing
        ),
      other:
        state.currentDetails &&
        Math.floor(
          state.currentDetails.pOther
        ),
    },
  };

  const disposableIncome =
    state.currentDetails &&
    Math.floor(
      (state.currentDetails.avgmajor /
        12) *
        0.85
    ) -
      (expenses.housing.rent +
        expenses.housing.utilities +
        expenses.food.groceries +
        expenses.food.restaurant +
        expenses.medical.medExpenses +
        expenses.medical.premiums +
        expenses.transportation.carMaintenance +
        expenses.transportation.carPayment +
        expenses.transportation.gas +
        expenses.transportation.insurance +
        expenses.necessities.cell +
        expenses.necessities.internet +
        expenses.necessities.studentLoans +
        expenses.necessities.tv +
        expenses.personal.clothing +
        expenses.personal.entertainment +
        expenses.personal.other);

  const content = (
    <div className="content">
      <h3 className="content-h3">Monthly Income After Expenses:</h3>
      {disposableIncome >= 0 ? (
        <div className="content-disposable-div">
          <h1 className="content-disposable-h1">
            $
            {disposableIncome
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      ) : (
        <div className="content-disposable-div">
          <h1 className="content-disposable-h1" style={{}}>
            $
            {disposableIncome
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      )}
      <div className="summary-card-div">
        <Card
          style={{
            width: screen < 600 ? "100%" : "30%",
            background: "#009039",
            borderRadius: "10px",
            boxShadow: "10px 10px 19px -14px rgba(0,0,0,0.75)",
            borderColor: "#009039",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "white", margin: 0 }}>Income</h2>
            <h2 style={{ color: "white", margin: 0 }}>
              $
              {state.currentDetails &&
                Math.floor(
                  (state.currentDetails
                    .avgmajor /
                    12) *
                    0.85
                )
                  .toFixed(0)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h2>
          </div>
        </Card>
        <Card
          style={{
            width: screen < 600 ? "100%" : "30%",
            background: "#c35355",
            borderRadius: "10px",
            boxShadow: "10px 10px 19px -14px rgba(0,0,0,0.75)",
            borderColor: "#c35355",
            marginTop: screen < 600 ? "5px" : "0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: "white", margin: 0 }}>Expenses</h2>
            <h2 style={{ color: "white", margin: 0 }}>
              $
              {(
                expenses.housing.rent +
                expenses.housing.utilities +
                expenses.food.groceries +
                expenses.food.restaurant +
                expenses.medical.medExpenses +
                expenses.medical.premiums +
                expenses.transportation.carMaintenance +
                expenses.transportation.carPayment +
                expenses.transportation.gas +
                expenses.transportation.insurance +
                expenses.necessities.cell +
                expenses.necessities.internet +
                expenses.necessities.studentLoans +
                expenses.necessities.tv +
                expenses.personal.clothing +
                expenses.personal.entertainment +
                expenses.personal.other
              )
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h2>
          </div>
        </Card>
      </div>
    </div>
  );

  const Content = ({ children, extraContent }) => {
    return (
      <Row className="content">
        <div className="main" style={{ flex: 1 }}>
          {children}
        </div>
        <div
          className="extra"
          style={{
            marginLeft: 80,
            marginTop: 16,
          }}
        >
          {extraContent}
        </div>
      </Row>
    );
  };

  return (
    <StyledDiv>
      <PageHeader
        style={{ background: "#414756", borderRadius: "5px" }}
        className="site-page-header"
      >
        <Content>{content}</Content>
      </PageHeader>
      {screen >= 600 ? (
        <div className="summary-content">
          <h1 className="summary-text">
            Are the numbers what you expected? You can choose a different path
            by editing your{" "}
            <span
              className="summary-span"
              onClick={() => {
                setActive("2");
              }}
            >
              Income
            </span>{" "}
            and/or{" "}
            <span
              className="summary-span"
              onClick={() => {
                setActive("3");
              }}
            >
              Expenses
            </span>{" "}
            or by <NavLink to="/entryform">entering brand-new data</NavLink>.
          </h1>
          <div className="summary-image-wrapper">
            <img
              className="summary-image"
              alt="girl and rocket"
              src={girl_rocket}
            />
          </div>
        </div>
      ) : (
        <div className="summary-content-mobile">
          <h1 className="summary-text">
            Are the numbers what you expected? Go back, try a different path,
            and see how it will affect the result!
          </h1>
          <Button
            size={"large"}
            ghost={true}
            style={{ marginBottom: "10px", width: "80%" }}
            type="primary"
            onClick={() => handleClick("2")}
          >
            Edit Income
          </Button>
          <Button
            size={"large"}
            ghost={true}
            style={{ marginBottom: "10px", width: "80%" }}
            type="primary"
            onClick={() => handleClick("3")}
          >
            Edit Expenses
          </Button>
          <Button
            size={"large"}
            style={{ width: "80%" }}
            type="primary"
            onClick={() => handleClick("4")}
          >
            Enter New Data
          </Button>
        </div>
      )}
      <DemoModal loStoName={"SummaryDemo"} title={"Summary"} text={summary} />
    </StyledDiv>
  );
}

export default Summary;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    min-width: 375px;
  }
  .content {
    .content-h3 {
      color: white;
      @media only screen and (max-width: 600px) {
        font-size: 15px;
      }
    }
    .content-disposable-div {
      display: flex;
      align-items: center;
      justify-content: center;
      .content-disposable-h1 {
        margin: 0;
        padding: 0;
        color: white;
        font-size: 40px;
        @media only screen and (max-width: 600px) {
          font-size: 20px;
        }
      }
    }
    .summary-card-div {
      display: flex;
      justify-content: space-evenly;
      margin-top: 10px;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
  }
  .income-yearly {
    font-weight: bold;
  }
  .income-h3 {
    margin: 0;
    width: 100%;
    @media only screen and (max-width: 600px) {
      width: 60%;
      font-size: 12px;
      text-align: right;
    }
  }
  .income-icon {
    height: 50px;
    margin-right: 10px;
    @media only screen and (max-width: 600px) {
      height: 40px;
    }
  }
  .ant-page-header {
    margin-top: 13px;
    border: 1px solid #e8e8e8;
    width: 100%;
    @media only screen and (max-width: 600px) {
      padding-left: 30px;
    }
  }
  .ant-page-header-heading {
    @media only screen and (max-width: 600px) {
      display: flex;
      align-content: center;
    }
  }
  .ant-page-header-content {
    @media only screen and (max-width: 600px) {
    }
  }
  .ant-page-header-heading-extra {
    @media only screen and (max-width: 600px) {
      padding: 0;
    }
  }
  .summary-content-mobile {
    display: flex;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    .summary-text-div {
      width: 100%;
    }
  }
  .summary-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .summary-text {
      width: 40%;
      text-align: left;
      font-size: 2rem;
    }
    .summary-span {
      color: #1890ff;
      cursor: pointer;
    }
    .summary-image-wrapper {
      min-width: 400px;
      @media only screen and (max-width: 600px) {
        display: none;
      }
      .summary-image {
        height: 400px;
        @media only screen and (max-width: 600px) {
          height: 250px;
        }
      }
    }
  }
`;
