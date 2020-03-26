import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
// import Button from "antd/es/button";
// import "antd/es/button/style/css";
import Typography from "antd/es/typography";
import "antd/es/typography/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExpensesPie from "./ExpensesPie";
import HousingExpensesBar from "./HousingExpensesBar";
import FoodExpensesBar from "./FoodExpensesBar";
import MedicalExpensesBar from "./MedicalExpensesBar";
import TransportationExpensesBar from "./TransportationExpensesBar";
import NecessitiesExpensesBar from "./NecessitiesExpensesBar";
import PersonalExpensesBar from "./PersonalExpensesBar";
import housing from "../assets/housing.svg";
import food from "../assets/food.svg";
import medical from "../assets/medical.svg";
import transportation from "../assets/transportation.svg";
import necessities from "../assets/necessities.svg";
import personal from "../assets/personal.svg";
import payment from "../assets/payment.svg";
import ExpensesDrawer from "./ExpensesDrawer";

const { Paragraph } = Typography;

function Expenses() {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting,
      isEditing: state.isEditing
    };
  });


  const expenses = {
    housing: {
      rent: state.isFetching
        ? 1000
        : state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1].rent,
      utilities: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].utilities
    },
    food: {
      groceries: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].groceries,
      restaurant: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].restaurant
    },
    medical: {
      premiums: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].premiums,
      medExpenses: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].medExpenses
    },
    transportation: {
      carPayment: state.isFetching
      ? 300
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].carPayment,
      insurance: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].insurance,
      gas: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].gas,
      carMaintenance: state.isFetching
      ? 20
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].carMaintenance
    },
    necessities: {
      internet: state.isFetching
      ? 62.77
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].internet,
      cell: state.isFetching
      ? 114
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].cell,
      tv: state.isFetching
      ? 50
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].tv,
      studentLoans: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].studentLoans
    },
    personal: {
      clothing: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].clothing,
      entertainment: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].entertainment,
      other: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].pOther
    }
  };

  const content = (
    <div className="content">
      <Paragraph
        style={{
          textAlign: "left",
          fontSize: "15px"
        }}
      >
        A chart is worth a thousand words! The pie chart below shows your
        estimated expenses broken down by category. The bar charts further break
        down each category. You can hover or tap on each slice/section to see
        the numbers for all charts.
      </Paragraph>
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
            marginTop: 16
          }}
        >
          {extraContent}
        </div>
      </Row>
    );
  };

  console.log(expenses)

  return (
    <StyledDiv>
      <PageHeader
        title={<img alt="payment" src={payment} className="income-icon" />}
        className="site-page-header"
        extra={[
          <React.Fragment key="1">
            <h3
              className="income-h3"
              key="2"
              style={{ margin: "0px", width: "100%" }}
            >
              {` Est. Net Monthly Income: $`}
              {state.isFetching ? (
                <p>fetching</p>
              ) : (
                state.userInfo.details[state.userInfo.details.length - 1] &&
                (
                  (state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor /
                    12) *
                  0.85
                )
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </h3>
            <h3
              className="income-h3 expenses"
              key="1"
              style={{ margin: "0px", width: "100%" }}
            >
              {` Est. Monthly Expenses: $`}
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
            </h3>
            <ExpensesDrawer />
          </React.Fragment>
        ]}
      >
        <Content>{content}</Content>
      </PageHeader>
      <ExpensesDiv>
        <ExpensesPie />
        <Card className="expenses-card">
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Housing</h4>
              <img className="expenses-icon" alt="housing" src={housing} />
            </div>
            <HousingExpensesBar />
          </div>
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Food</h4>
              <img className="expenses-icon" alt="food" src={food} />
            </div>
            <FoodExpensesBar />
          </div>
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Medical</h4>
              <img className="expenses-icon" alt="medical" src={medical} />
            </div>
            <MedicalExpensesBar />
          </div>
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Transport</h4>
              <img
                className="expenses-icon"
                alt="transportation"
                src={transportation}
              />
            </div>
            <TransportationExpensesBar />
          </div>
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Necessities</h4>
              <img
                className="expenses-icon"
                alt="necessities"
                src={necessities}
              />
            </div>
            <NecessitiesExpensesBar />
          </div>
          <div className="expenses-card-div">
            <div className="expenses-card-inner">
              <h4>Personal</h4>
              <img className="expenses-icon" alt="personal" src={personal} />
            </div>
            <PersonalExpensesBar />
          </div>
        </Card>
      </ExpensesDiv>
    </StyledDiv>
  );
}

export default Expenses;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .income-h3 {
    margin: 0;
    width: 100%;
    color: #009039;
    @media only screen and (max-width: 600px) {
      width: 60%;
      font-size: 12px;
      text-align: right;
    }
  }
  .expenses {
    color: #c35355;
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
    margin-bottom: 20px;
    border: 1px solid #e8e8e8;
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
`;

const ExpensesDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 600px) {
      padding: 15px 0;
    }
  }
  .expenses-card {
    .expenses-card-div {
      width: 600px;
      display: flex;
      justify-content: flex-start;
      .expenses-card-inner {
        width: 70px;
      }
    }

    .expenses-icon {
      height: 40px;
    }
  }
`;
