import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import girl_rocket from "../assets/girl_rocket.png"; 

function Summary({setActive}) {
  const state = useSelector((state) => {
    return {
      userInfo: state.userInfo,
      isFetching: state.isFetching,
    };
  });

  const expenses = {
    housing: {
      rent:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].rent
        ),
      utilities:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].utilities
        ),
    },
    food: {
      groceries:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].groceries
        ),
      restaurant:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].restaurant
        ),
    },
    medical: {
      premiums:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].premiums
        ),
      medExpenses:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].medExpenses
        ),
    },
    transportation: {
      carPayment:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].carPayment
        ),
      insurance:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].insurance
        ),
      gas:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].gas
        ),
      carMaintenance:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1]
            .carMaintenance
        ),
    },
    necessities: {
      studentLoans:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].studentLoans
        ),
      cell:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].cell
        ),
      internet:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].internet
        ),

      tv:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].tv
        ),
    },
    personal: {
      entertainment:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1]
            .entertainment
        ),
      clothing:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].clothing
        ),
      other:
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].pOther
        ),
    },
  };

  const disposableIncome =
    state.userInfo.details[state.userInfo.details.length - 1] &&
    Math.floor(
      (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
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
      <h3 style={{
            color: "white"
          }}>Available Money After All Expenses:</h3>
      {disposableIncome >= 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ margin: 0, padding: 0, color: "white", fontSize: '40px' }}>
            $
            {disposableIncome
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ margin: 0, padding: 0, color: "white", fontSize: '40px' }}>
            $
            {disposableIncome
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
        <Card style={{ width: "30%", background: "#009039", borderRadius: '10px', boxShadow: '10px 10px 19px -14px rgba(0,0,0,0.75)', borderColor: '#009039' }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ color: "white", margin: 0 }}>Income</h2>
            <h2 style={{ color: "white", margin: 0 }}>
              $
              {state.userInfo.details[state.userInfo.details.length - 1] &&
                Math.floor(
                  (state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor /
                    12) *
                    0.85
                )
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h2>
          </div>
        </Card>
        <Card style={{ width: "30%", background: "#c35355", borderRadius: '10px', boxShadow: '10px 10px 19px -14px rgba(0,0,0,0.75)', borderColor: '#c35355' }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                .toFixed(2)
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
      <PageHeader style={{ background: "#2F4858", borderRadius: "5px" }} className="site-page-header">
        <Content>{content}</Content>
      </PageHeader>
      <div className="summary-content">
          <h1>Are the numbers what you expected? You can keep playing with the data by editing your <span className="pg-span" onClick={()=> {setActive("2")}}>Income</span> and/or <span className="pg-span" onClick={()=> {setActive("3")}}>Expenses</span> or by entering brand-new data.</h1>
          <div className="summary-image-wrapper">
          <img className="summary-image" alt="girl and rocket" src={girl_rocket}/>
          </div>
      </div>
    </StyledDiv>
  );
}

export default Summary;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      height: 100px;
      overflow-y: scroll;
    }
  }
  .ant-page-header-heading-extra {
    @media only screen and (max-width: 600px) {
      padding: 0;
    }
  }

  .summary-image-wrapper {
    min-width: 400px; 
    .summary-image {
      height: 400px;
      @media only screen and (max-width: 600px) {
        height: 250px;
      }
    }
  } 
`;
