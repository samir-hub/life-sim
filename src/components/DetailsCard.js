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
  setShowBadge
}) {

  const handleClick = (detail) => {
    setItemsToCompare([...itemsToCompare, detail]);
    if (itemsToCompare.length === 1) {
      setIsVisible(true);
    }
  };

  const activateBadge = (id) => {
    setShowBadge({ cardId: id, badgeNumber: itemsToCompare.length + 1 });
  };
console.log(showBadge)
  return (
    <StyledDiv>
      <Card onClick={() => activateBadge(detail.detailsid)} className="card">
        <Meta avatar={<Avatar src={showBadge.badgeNumber === 1 && showBadge.cardId === detail.detailsid ? one_badge : (showBadge.badgeNumber === 2 && showBadge.cardId === detail.detailsid) ? two_badge : avatar} />} />
        <div className="dc-card-content">
          <div className="dc-card-text">
            <h1 className="dc-text" style={{ marginTop: "10px" }}>
              {detail.education}
            </h1>
            <h1 className="dc-text">{detail.major}</h1>
            <h1 className="dc-text">{detail.city}</h1>
          </div>
          <Button onClick={() => handleClick(detail)} size="large">
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
  .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin: 20px 0;
    .dc-card-content {
      display: flex;
      align-items: center;
      .dc-card-text {
        width: 80%;
        .dc-text {
          text-align: left;
          width: 80%;
        }
      }
    }
  }
  .card:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.22);
  }
`;
