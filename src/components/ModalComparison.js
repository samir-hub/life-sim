import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import styled from "styled-components";
import one_badge from "../assets/one_badge.svg";
import two_badge from "../assets/two_badge.svg";

const { Meta } = Card;

function ModalComparison({
  detail,
  avatar,
  itemsToCompare,
  setItemsToCompare,
  setIsVisible,
  showBadge,
  setShowBadge,
}) {
  return (
    <StyledDiv>
      <div className="mc-income">
        <h1>Income</h1>
      </div>
      <div className="mc-expenses">
        <h1>Expenses</h1>
      </div>
      <div className="mc-disposable-income">
        <h1>Disposable Income</h1>
      </div>
    </StyledDiv>
  );
}

export default ModalComparison;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;
