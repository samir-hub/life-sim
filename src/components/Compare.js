import React, { useState } from "react";
import styled from "styled-components";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import DetailsCard from "./DetailsCard";
import path_logo from "../assets/path_logo.svg";

function Compare({ userInfo }) {
  const [itemsToCompare, setItemsToCompare] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const handleOk = (e) => {
    setIsVisible(false);
    setItemsToCompare([]);
  };

  console.log(itemsToCompare);

  return (
    <StyledDiv>
      <Modal
        closable={false}
        footer={<Button onClick={handleOk}>Okay</Button>}
        maskClosable={false}
        title="Comparison"
        visible={isVisible}
        onOk={handleOk}
      >
        <h1>{itemsToCompare[0] && itemsToCompare[0].education}</h1>
        <h1>{itemsToCompare[1] && itemsToCompare[1].education}</h1>
      </Modal>
      <div className="compare-cards-wrapper">
        {userInfo.details.map((detail) => {
          return (
            <DetailsCard
              key={detail.detailsid}
              detail={detail}
              avatar={path_logo}
              itemsToCompare={itemsToCompare}
              setItemsToCompare={setItemsToCompare}
              setIsVisible={setIsVisible}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
}

export default Compare;

const StyledDiv = styled.div`
  .compare-cards-wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
