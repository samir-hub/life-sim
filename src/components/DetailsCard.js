import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";

function DetailsCard({ userInfo }) {
  console.log(userInfo);
  return (
    <StyledDiv>
      <Card></Card>
    </StyledDiv>
  );
}

export default DetailsCard;

const StyledDiv = styled.div``;
