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
import Table from "antd/es/table";
import "antd/es/table/style/css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import wallet from "../wallet.svg";

const { Paragraph } = Typography;

function Income() {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const content = (
    <div className="content">
      <Paragraph
        style={{
          textAlign: "left"
        }}
      >
        Many different factors will determine your income. We use your
        information to calculate an estimate that will help you plan for the
        future. Many different factors will determine your income. We use your
        information to calculate an estimate that will help you plan for the
        future.
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

  const columns = [
    {
      title: 'Earnings',
      dataIndex: 'earnings',
      key: 'earnings',
    },
    {
      title: 'rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'hours',
      dataIndex: 'hours',
      key: 'hours',
    },
    {
      title: 'total',
      dataIndex: 'total',
      key: 'total',
    },
  ];
  
  const data = [
    {
      key: '1',
      earnings: 'Regular',
      rate: (state.userInfo.details[state.userInfo.details.length - 1]
      .avgmajor / 1920).toFixed(2),
      hours: 80,
      total: (state.userInfo.details[state.userInfo.details.length - 1]
        .avgmajor / 24).toFixed(2)

    },
    {
      key: '2',
      earnings: 'PTO',
      rate: (state.userInfo.details[state.userInfo.details.length - 1]
      .avgmajor / 1920).toFixed(2),
      hours: 0,
      total: 0
    
    },
    {
      key: '3',
      earnings: 'Overtime',
      rate: (state.userInfo.details[state.userInfo.details.length - 1]
      .avgmajor / 1920 * 1.5).toFixed(2),
      hours: 0,
      total: 0

    },
  ];

  console.log("state in Income", state.userInfo);
  
  return (
    <StyledDiv>
      <PageHeader
        title={
          <img
            style={{ height: "50px", marginRight: "10px" }}
            alt="wallet"
            src={wallet}
          />
        }
        className="site-page-header"
        extra={[
          <React.Fragment key="1">
            <h3 key="1" style={{ margin: "0px", width: "100%" }}>
              {` Est. Gross Monthly Income: $`}
              {state.isFetching ? (
                <p>fetching</p>
              ) : (
                state.userInfo.details[state.userInfo.details.length - 1] &&
                (
                  state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor / 12
                ).toFixed(2)
              )}
            </h3>
            <h3 key="2" style={{ margin: "0px", width: "100%" }}>
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
                ).toFixed(2)
              )}
            </h3>
            <h3 key="3" style={{ margin: "0px", width: "100%" }}>
              {` Est. Net Bi-Weekly Check: $`}
              {state.isFetching ? (
                <p>fetching</p>
              ) : (
                state.userInfo.details[state.userInfo.details.length - 1] &&
                (
                  (state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor /
                    24) *
                  0.85
                ).toFixed(2)
              )}
            </h3>
          </React.Fragment>
        ]}
      >
        <Content>{content}</Content>
      </PageHeader>
      <Card className="income-card" hoverable={true}>
        {/* <div className="income-earnings">
          <h1 className="income-earnings-title">Earnings</h1>
          <h3 className="income-earnings-subtitle">rate</h3>
          <h3 className="income-earnings-subtitle">hours</h3>
          <h3 className="income-earnings-subtitle">total</h3>
        </div>
        <div className="income-earnings">
          <p className="second-row-title">Regular</p>
          <p className="income-earnings-subtitle second-row">
            {state.isFetching ? (
              <p>fetching</p>
            ) : (
              state.userInfo.details[state.userInfo.details.length - 1] &&
              (
                state.userInfo.details[state.userInfo.details.length - 1]
                  .avgmajor / 1920
              ).toFixed(2)
            )}
          </p>
          <p className="income-earnings-subtitle second-row">80.0</p>
          <p className="income-earnings-subtitle second-row">
            {state.isFetching ? (
              <p>fetching</p>
            ) : (
              state.userInfo.details[state.userInfo.details.length - 1] &&
              (
                state.userInfo.details[state.userInfo.details.length - 1]
                  .avgmajor / 24
              ).toFixed(2)
            )}
          </p>
        </div> */}
        <Table pagination={false} columns={columns} dataSource={data} />
      </Card>
    </StyledDiv>
  );
}

export default Income;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-page-header {
    margin-top: 13px;
    border: 1px solid #e8e8e8;
  }
  .income-card {
    margin-top: 10px;
    height: 63vh;
    width: 45%;
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
