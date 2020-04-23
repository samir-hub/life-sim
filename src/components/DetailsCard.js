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

function DetailsCard({
  detail,
  avatar,
  itemsToCompare,
  setItemsToCompare,
  setIsVisible,
  showBadge,
  setShowBadge,
}) {

  let screen = window.screen.width;

  const handleClick = (detail) => {
    setItemsToCompare([...itemsToCompare, detail]);
    if (itemsToCompare.length === 1) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };

  const activateBadge = (id) => {
    if (itemsToCompare.length === 0) {
      setShowBadge({
        firstCardId: itemsToCompare.length === 0 ? id : null,
        firstClick: itemsToCompare.length === 0 ? true : false,
      });
    } else {
      setShowBadge({
        ...showBadge,
        secondCardId: itemsToCompare.length === 1 ? id : null,
        secondClick: itemsToCompare.length === 1 ? true : false,
      });
    }
    setItemsToCompare([...itemsToCompare, detail]);
    if (itemsToCompare.length === 1) {
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };

  return (
    <StyledDiv>
      <Card onClick={() => activateBadge(detail.detailsid)} className="card">
        <Meta
          avatar={
            <Avatar
              style={{ borderRadius: "5px" }}
              src={
                showBadge.firstClick &&
                showBadge.firstCardId === detail.detailsid
                  ? one_badge
                  : showBadge.secondClick &&
                    showBadge.secondCardId === detail.detailsid
                  ? two_badge
                  : avatar
              }
            />
          }
        />
        <div className="dc-card-content">
          <div className="dc-card-text">
            <h1 className="dc-text" style={{ marginTop: "10px" }}>
              {detail.education}
            </h1>
            <h1 className="dc-text">{detail.major}</h1>
            <h1 className="dc-text">{detail.city}</h1>
          </div>
          <Button onClick={() => handleClick(detail)} size = {screen < 600 ? "small" : "large"} type = {screen < 600 ? "primary" : "default"}>
            Select to Compare
          </Button>
        </div>
      </Card>
    </StyledDiv>
  );
}

export default DetailsCard;

const StyledDiv = styled.div`
  width: 40%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin: 20px 0;
    cursor: pointer; 
    .dc-card-content {
      display: flex;
      align-items: center;
      .dc-card-text {
        width: 80%;
        .dc-text {
          text-align: left;
          width: 80%;
          @media only screen and (max-width: 600px) {
            font-size: 15px;
          }
        }
      }
    }
  }
  .card:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.22);
  }
`;
