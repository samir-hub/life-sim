import React from "react";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

function NoDataModal() {
  const history = useHistory();

  const handleOk = () => {
    history.push("/entryform");
  };

  return (
    <Modal
      className="modal"
      centered
      style={{
        background: "white",
        maxWidth: "95%",
        border: "0.05px solid gray",
        padding: "0",

        borderRadius: "5px",
      }}
      title="Oops!"
      visible={true}
      closable={false}
      maskClosable={false}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Go Back
        </Button>,
      ]}
    >
      <StyledDiv>
        <p className="modal-text">
          Your Dashboard will be unavailable until you enter some data. Click
          below to go back and enter your information.
        </p>
      </StyledDiv>
    </Modal>
  );
}

export default NoDataModal;

const StyledDiv = styled.div`
  margin: 0;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
      font-size: 15px; 
    }
`;
