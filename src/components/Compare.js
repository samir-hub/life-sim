import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import DetailsCard from "./DetailsCard";
import ModalComparison from "./ModalComparison";
import path_logo from "../assets/path_logo.svg";
import girl_looking from "../assets/girl_looking.png";

function Compare({ userInfo, setActive }) {
  const [itemsToCompare, setItemsToCompare] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showBadge, setShowBadge] = useState({
    firstCardId: null,
    secondCardId: null,
    firstClick: false,
    secondClick: false,
  });
  const history = useHistory();

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

  const handleClick = (item) => {
    if (item === "4") {
      history.push("/entryform");
    } else {
      setActive(`${item}`);
    }
  };

  const screen = window.screen.width;

  return (
    <StyledDiv>
      <Modal
        style={{ top: 10 }}
        closable={false}
        footer={
          <Button type="primary" size="large" onClick={handleOk}>
            Okay
          </Button>
        }
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
      {screen >= 600 ? (
        <div className="summary-content">
          <div className="summary-left-content">
            <h1 className="summary-text">Explore More Options And Compare</h1>
            <Button>Explore</Button>
          </div>
          <div className="summary-image-wrapper">
            <img
              className="summary-image"
              alt="girl and rocket"
              src={girl_looking}
            />
          </div>
        </div>
      ) : (
        <div className="summary-content-mobile">
          <h1 className="summary-text">
            Are the numbers what you expected? Go back, try a different path,
            and see how it will affect the result!
          </h1>
          <Button
            size={"large"}
            ghost={true}
            style={{ marginBottom: "10px", width: "80%" }}
            type="primary"
            onClick={() => handleClick("2")}
          >
            Edit Income
          </Button>
          <Button
            size={"large"}
            ghost={true}
            style={{ marginBottom: "10px", width: "80%" }}
            type="primary"
            onClick={() => handleClick("3")}
          >
            Edit Expenses
          </Button>
          <Button
            size={"large"}
            style={{ width: "80%" }}
            type="primary"
            onClick={() => handleClick("4")}
          >
            Enter New Data
          </Button>
        </div>
      )}
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

  .summary-content-mobile {
    display: flex;
    margin-top: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    .summary-text-div {
      width: 100%;
    }
  }
  .summary-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .summary-left-content {
      display: flex; 
      flex-direction: column;
      justify-items: space-around;
      .summary-text {
      width: 100%;
      text-align: left;
      font-size: 2rem;
      margin-bottom: 40px; 
    }
    }
  
    .summary-span {
      color: #1890ff;
      cursor: pointer;
    }
    .summary-image-wrapper {
      min-width: 400px;
      @media only screen and (max-width: 600px) {
        display: none;
      }
      .summary-image {
        height: 400px;
        @media only screen and (max-width: 600px) {
          height: 250px;
        }
      }
    }
  }
`;
