import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";

function DetailsCard({ education }) {

  return (
    <StyledDiv>
        <Card>
          <h1>{education}</h1>
        </Card>
    </StyledDiv>
  );
}

export default DetailsCard;

const StyledDiv = styled.div``;
