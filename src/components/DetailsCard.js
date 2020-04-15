import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import styled from "styled-components";

const { Meta } = Card;

function DetailsCard({ education, major, city, avatar }) {
  return (
    <StyledDiv>
      <Card className="card">
        <Meta avatar={<Avatar src={avatar} />} />
        <div className="dc-card-content">
          <div className="dc-card-text">
            <h1 className="dc-text" style={{ marginTop: "10px" }}>
              {education}
            </h1>
            <h1 className="dc-text">{major}</h1>
            <h1 className="dc-text">{city}</h1>
          </div>
          <Button>Compare</Button>
        </div>
      </Card>
    </StyledDiv>
  );
}

export default DetailsCard;

const StyledDiv = styled.div`
  width: 40%;
  .card {
    margin: 20px 0;
    .dc-card-content {
      display: flex;
      align-items: center; 
      .dc-card-text {
        width: 80%;
        .dc-text {
          text-align: left;
          width: 80%;
        }
      }
    }
  }
`;
