import React, { useState } from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import styled from "styled-components";

const { Meta } = Card;

function DetailsCard({ detail, avatar, itemsToCompare, setItemsToCompare }) {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (detail) => {
    setItemsToCompare([...itemsToCompare, detail])
  }

  const handleOk = (e) => {
    setIsVisible(false); 
  }

  const handleCancel = (e) => {
    setIsVisible(false); 
  }


  //console.log(itemsToCompare)

  return (
    <StyledDiv>
      <Card className="card">
        <Meta avatar={<Avatar src={avatar} />} />
        <div className="dc-card-content">
          <div className="dc-card-text">
            <h1 className="dc-text" style={{ marginTop: "10px" }}>
              {detail.education}
            </h1>
            <h1 className="dc-text">{detail.major}</h1>
            <h1 className="dc-text">{detail.city}</h1>
          </div>
          <Button onClick={() => handleClick(detail)} size="large">Select to Compare</Button>
        </div>
      </Card>
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
