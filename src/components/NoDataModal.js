import React from "react";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";

import { useHistory } from "react-router-dom";

function NoDataModal() {
  const history = useHistory();

  const handleOk = () => {
    history.push("/entryform");
  };

  return (
    <Modal
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
      <p
        style={{
          margin: "0",
          fontSize: "20px",
        }}
      >
        Your Dashboard will be unavailable until you enter some data. Click
        below to go back and enter your information.
      </p>
    </Modal>
  );
}

export default NoDataModal;
