import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import styled from "styled-components";

const { Meta } = Card;

function DetailsCard({ education, major, city, avatar }) {
  return (
    <StyledDiv>
      <Card className="card">
        <Meta avatar={<Avatar src={avatar} />} />
        <p style={{marginTop: "10px"}}>{education}</p>
        <p>{major}</p>
        <p>{city}</p>
      </Card>
    </StyledDiv>
  );
}

export default DetailsCard;

const StyledDiv = styled.div`
  width: 40%;
  .card {
    margin: 20px 0;
  }
`;
