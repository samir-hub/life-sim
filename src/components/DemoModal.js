import React, { useState } from "react";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import { Link } from "react-router-dom";

function DemoModal({ loStoName, title, text }) {
  const showModal = localStorage.getItem(`${loStoName}`) === null;
  const [isVisible, setIsVisible] = useState(showModal);
  const isDemo = window.localStorage.getItem("username") === "demo";
  const screen = window.screen.width;

  return isDemo ? (
    <Modal
      centered
      style={{
        background: "white",
        maxWidth: "95%",
        border: "0.05px solid gray",
        padding: "0",

        borderRadius: "5px",
      }}
      title={title}
      visible={isVisible}
      closable={false}
      maskClosable={false}
      cancelText="Don't show this again"
      onOk={() => setIsVisible(false)}
      onCancel={() => {
        window.localStorage.setItem(`${loStoName}`, "false");
        setIsVisible(false);
      }}
    >
      <p
        style={{
          margin: "0",
        }}
      >
        {text}
        {title === "Dashboard" && screen < 600 && (
          <React.Fragment>
            <span> </span> <Icon type="bars"></Icon>
            <span> .</span>
          </React.Fragment>
        )}
        {title === "Dashboard" && (
          <strong>
            {" "}
            The numbers may not be accurate in the demo. For accurate data,
            enter new information in the{" "}
            <Link to="/entryform">Get Started</Link> page or{" "}
            <Link to="/register"> create an account</Link>.
          </strong>
        )}
      </p>
    </Modal>
  ) : null;
}

export default DemoModal;
