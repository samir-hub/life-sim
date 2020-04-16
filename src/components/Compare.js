import React, { useState } from "react";
import styled from "styled-components";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import DetailsCard from "./DetailsCard";
import path_logo from "../assets/path_logo.svg";

function Compare({ userInfo }) {
  const [itemsToCompare, setItemsToCompare] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const handleOk = (e) => {
    setIsVisible(false);
    setItemsToCompare([])
  };

  const handleCancel = (e) => {
    setIsVisible(false);
  };

  console.log(itemsToCompare);

  return (
    <StyledDiv>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
