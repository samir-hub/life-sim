import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
// import Button from "antd/es/button";
// import "antd/es/button/style/css";
import Typography from "antd/es/typography";
import "antd/es/typography/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
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
    </StyledDiv>
  );
}

export default Income;

const StyledDiv = styled.div`
  .ant-page-header {
    margin-top: 13px;
    border: 1px solid #e8e8e8;
  }
`;
