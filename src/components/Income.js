import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
import Typography from "antd/es/typography";
import "antd/es/typography/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Table from "antd/es/table";
import "antd/es/table/style/css";
import IncomeDrawer from "./IncomeDrawer";
import DemoModal from "./DemoModal";
import { useSelector } from "react-redux";
import styled from "styled-components";
import wallet from "../assets/wallet.svg";
import { income } from "../data/demos";

const { Paragraph } = Typography;

function Income() {
  const state = useSelector((state) => {
    return {
      userInfo: state.userInfo,
      isFetching: state.isFetching,
    };
  });

  const getYearlyIncome = () => {
    if (
      state.userInfo.details[state.userInfo.details.length - 1].education ===
      "Associate's Degree"
    ) {
      return (
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
            1.26
        )
      );
    } else {
      return (
        state.userInfo.details[state.userInfo.details.length - 1] &&
        Math.floor(
          state.userInfo.details[state.userInfo.details.length - 1].avgmajor /
            1.26
        )
      );
    }
  };

  const content = (
    <div className="content">
      <Paragraph
        style={{
          textAlign: "left",
          fontSize: "15px",
        }}
      >
        Your estimated yearly income is{" "}
        <span className="income-yearly">
          {" $"}
          {state.userInfo.details[state.userInfo.details.length - 1] &&
            getYearlyIncome()
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        . Many different factors will determine the actual amount. We use your
        information and some statistical analysis to calculate these estimates.{" "}
        <strong>Gross Monthly Income</strong> refers to the estimated monthly
        income <strong>before</strong> any taxes or any other deductions are
        taken out. <strong>Net Monthly Income</strong> refers to the estimated
        monthly income <strong>after</strong> all taxes and other deductions are
        taken out. A <strong>Biweekly Pay Stub</strong> is a detailed view of
        your income and deductions for a two week period. Most people get paid
        every two weeks.
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
      rate: (getYearlyIncome() / 1920).toFixed(2),
      hours: 80,
      total: (getYearlyIncome() / 24)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    {
      key: "2",
      earnings: "PTO",
      rate: (getYearlyIncome() / 1920).toFixed(2),
      hours: 0,
      total: 0,
    },
    {
      key: "3",
      earnings: "Overtime",
      rate: ((getYearlyIncome() / 1920) * 1.5).toFixed(2),
      hours: 0,
      total: 0,
    },
    {
      key: "4",
      earnings: "",
      rate: "Gross Pay",
      hours: "",
      total: (getYearlyIncome() / 24)
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
      total: -((getYearlyIncome() / 24) * 0.1).toFixed(2),
    },
    {
      key: "2",
      statutory: "Social Security Tax",
      hours: "",
      total: -((getYearlyIncome() / 24) * 0.062).toFixed(2),
    },
    {
      key: "3",
      statutory: "Medicare Tax",
      hours: "",
      total: -((getYearlyIncome() / 24) * 0.009).toFixed(2),
    },
    {
      key: "4",
      statutory: "Net Pay",
      hours: "",
      total: (
        getYearlyIncome() / 24 -
        (getYearlyIncome() / 24) * 0.1 -
        (getYearlyIncome() / 24) * 0.062 -
        (getYearlyIncome() / 24) * 0.009
      )
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
  ];

  return (
    <StyledDiv>
      <DemoModal loStoName={"IncomeDemo"} title={"Income"} text={income} />
      <PageHeader
        title={<img className="income-icon" alt="wallet" src={wallet} />}
        className="site-page-header"
        extra={[
          <React.Fragment key="1">
            <h3
              className="income-h3"
              key="1"
              style={{ margin: "0px", width: "100%" }}
            >
              {` Est. Gross Monthly Income: $`}
              {state.userInfo.details[state.userInfo.details.length - 1] &&
                (getYearlyIncome() / 12)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <h3
              className="income-h3"
              key="2"
              style={{ margin: "0px", width: "100%" }}
            >
              {` Est. Net Monthly Income: $`}
              {state.userInfo.details[state.userInfo.details.length - 1] &&
                ((getYearlyIncome() / 12) * 0.85)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h3>
            <IncomeDrawer />
          </React.Fragment>,
        ]}
      >
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

export default Income;

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
