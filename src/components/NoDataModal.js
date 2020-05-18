import React from "react";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";

import { useHistory } from "react-router-dom";

function NoDataModal() {

    const history = useHistory();

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
      title="Oops"
      visible={true}
      closable={false}
      maskClosable={false}
      onOk={() => history.push('/entryform')}
    >
      <p
        style={{
          margin: "0",
        }}
      >
        Hello
       
      </p>
    </Modal>
  );
}

export default NoDataModal;
