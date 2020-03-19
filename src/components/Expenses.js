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
import payment from "../payment.svg";

const { Paragraph } = Typography;

function Expenses() {
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
        future. <strong>Gross Monthly Income</strong> refers to the estimated monthly income <strong>before</strong> any taxes or any other deductions are taken out. <strong>Net Monthly Income</strong> refers to the estimated monthly income <strong>after</strong> all taxes and other deductions are taken out. A <strong>Biweekly Pay Stub</strong> is a detailed view of your income and deductions for a two week period. Most people get paid every two weeks. 
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

  console.log("state in Expenses", state.userInfo);
  
  return (
    <StyledDiv>
      <PageHeader
        title={
          <img
            style={{ height: "50px", marginRight: "10px" }}
            alt="wallet"
            src={payment}
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
                ((
                  state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor / 12
                ).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </h3>
            <h3 key="2" style={{ margin: "0px", width: "100%" }}>
              {` Est. Net Monthly Income: $`}
              {state.isFetching ? (
                <p>fetching</p>
              ) : (
                state.userInfo.details[state.userInfo.details.length - 1] &&
                ((
                  (state.userInfo.details[state.userInfo.details.length - 1]
                    .avgmajor /
                    12) *
                  0.85
                ).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              )}
            </h3>
          </React.Fragment>
        ]}
      >
        <Content>{content}</Content>
      </PageHeader>
      <Card className="income-card" hoverable={true}>
        
      </Card>
    </StyledDiv>
  );
}

export default Expenses;

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
    margin-bottom: 10px;
    height: 85vh;
    width: 45%;
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
