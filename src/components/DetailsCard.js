import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";

function DetailsCard({ education }) {
  return (
    <StyledDiv>
      <Card className="card">
        <h1>{education}</h1>
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
