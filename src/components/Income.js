import React from "react";
import PageHeader from "antd/es/page-header";
import "antd/es/page-header/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Tag from "antd/es/tag";
import "antd/es/tag/style/css";
import Typography from "antd/es/typography";
import "antd/es/typography/style/css";
import Row from "antd/es/row";
import "antd/es/row/style/css";
import styled from "styled-components";

const { Paragraph } = Typography;

function Income() {
  const IconLink = ({ src, text }) => (
    <a
      href="/"
      style={{
        marginRight: 16,
        display: "flex",
        alignItems: "center"
      }}
    >
      <img
        style={{
          marginRight: 8
        }}
        src={src}
        alt="start"
      />
      {text}
    </a>
  );

  const content = (
    <div className="content">
      <Paragraph
        style={{
          textAlign: "left"
        }}
      >
        Ant Design interprets the color system into two levels: a system-level
        color system and a product-level color system.
      </Paragraph>
      <Paragraph
        style={{
          textAlign: "left"
        }}
      >
        Ant Design&#x27;s design team preferred to design with the HSB color
        model, which makes it easier for designers to have a clear psychological
        expectation of color when adjusting colors, as well as facilitate
        communication in teams.
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
  return (
    <StyledDiv>
      <PageHeader
        title="Title"
        className="site-page-header"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>
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
