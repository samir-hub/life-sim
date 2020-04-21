import React, { useState } from "react";
import styled from "styled-components";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import DetailsCard from "./DetailsCard";
import ModalComparison from "./ModalComparison";
import path_logo from "../assets/path_logo.svg";

function Compare({ userInfo }) {
  const [itemsToCompare, setItemsToCompare] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showBadge, setShowBadge] = useState({
    firstCardId: null,
    secondCardId: null,
    firstClick: false,
    secondClick: false,
  });

  const handleOk = (e) => {
    setIsVisible(false);
    setItemsToCompare([]);
    setShowBadge({
      firstCardId: null,
      secondCardId: null,
      firstClick: false,
      secondClick: false,
    });
  };

  return (
    <StyledDiv>
      <Modal
        closable={false}
        footer={<Button type="primary" size="large" onClick={handleOk}>Okay</Button>}
        maskClosable={false}
        visible={isVisible}
        onOk={handleOk}
      >
        <ModalComparison
          firstChoice={itemsToCompare[0]}
          secondChoice={itemsToCompare[1]}
        />
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
              showBadge={showBadge}
              setShowBadge={setShowBadge}
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
    @media only screen and (max-width: 600px) {
      flex-direction: column; 
    }
  }
`;
