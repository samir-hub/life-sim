import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Table from "antd/es/table";
import "antd/es/table/style/css";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Summary() {
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
      <h5>Available Money After All Expenses</h5>
      {disposableIncome > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>+ </span>
          <h1 style={{ margin: 0, padding: 0 }}>
            $
            {disposableIncome
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h1>
        </div>
      ) : null}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card style={{ width: "30%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Income</h2>
            <h2>
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
        <Card style={{ width: "30%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Expenses</h2>
            <h2>
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

  const columns = [
    {
      title: "Earnings",
      dataIndex: "earnings",
      key: "earnings",
    },
    {
      title: "rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "hours",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "total",
      dataIndex: "total",
      key: "total",
    },
  ];

  const data = [
    {
      key: "1",
      earnings: "Regular",
      rate: (
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
        1920
      ).toFixed(2),
      hours: 80,
      total: (
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor / 24
      )
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "2",
      earnings: "PTO",
      rate: (
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
        1920
      ).toFixed(2),
      hours: 0,
      total: 0,
    },
    {
      key: "3",
      earnings: "Overtime",
      rate: (
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          1920) *
        1.5
      ).toFixed(2),
      hours: 0,
      total: 0,
    },
    {
      key: "4",
      earnings: "",
      rate: "Gross Pay",
      hours: "",
      total: (
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor / 24
      )
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
  ];

  const deduColumns = [
    {
      title: "Deductions",
      dataIndex: "deductions",
      key: "deductions",
    },
    {
      title: "Statutory",
      dataIndex: "statutory",
      key: "statutory",
    },
    {
      title: "",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "",
      dataIndex: "total",
      key: "total",
    },
  ];

  const deduData = [
    {
      key: "1",
      statutory: "Federal Income Tax",
      hours: "",
      total: -(
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
        0.1
      ).toFixed(2),
    },
    {
      key: "2",
      statutory: "Social Security Tax",
      hours: "",
      total: -(
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
        0.062
      ).toFixed(2),
    },
    {
      key: "3",
      statutory: "Medicare Tax",
      hours: "",
      total: -(
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
        0.009
      ).toFixed(2),
    },
    {
      key: "4",
      statutory: "Net Pay",
      hours: "",
      total: (
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24 -
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
          0.1 -
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
          0.062 -
        (state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
          24) *
          0.009
      )
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
  ];

  return (
    <StyledDiv>
      <PageHeader className="site-page-header">
        <Content>{content}</Content>
      </PageHeader>
      <Card className="income-card" hoverable={true}>
        <h1>Biweekly Pay Stub:</h1>
        <div className="income-tables">
          <Table pagination={false} columns={columns} dataSource={data} />
          <Table
            pagination={false}
            columns={deduColumns}
            dataSource={deduData}
          />
        </div>
      </Card>
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
  .ant-card-body {
    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  }
  .income-card {
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    width: 45%;
    @media only screen and (max-width: 600px) {
      width: auto;
      border: none;
      box-shadow: none;
    }
    .ant-table-row:nth-child(4) {
      background: lightgray;
    }
    .income-earnings {
      display: flex;
      align-items: flex-end;
      border-bottom: 2px solid #e8e8e8;
      .income-earnings-title {
        width: 40%;
        margin-right: 100px;
        margin-bottom: 0;
        text-align: left;
      }
      .second-row-title {
        width: 40%;
        margin-right: 100px;
        margin-bottom: 0;
        text-align: left;
      }
      .income-earnings-subtitle {
        padding: 0 10px;
        margin-bottom: 0;
        text-align: right;
      }
      .second-row {
        text-align: right;
      }
    }
  }
`;
