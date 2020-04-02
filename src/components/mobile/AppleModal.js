import React, { useState } from "react";
import Modal from "antd/es/modal";
import "antd/es/modal/style/css";
import { IoIosShare } from "react-icons/io";

function AppleModal() {
  const showModal = localStorage.getItem("AppleNotification") === null;
  const [isVisible, setIsVisible] = useState(showModal);
  const userAgent = window.navigator.userAgent;
  const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
  const webkit = !!userAgent.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i);
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone ||
    document.referrer.includes("android-app://");

  return !isStandalone && iOS ? (
    <Modal
      centered
      style={{
        background: "white",
        maxWidth: "95%",
        border: "0.05px solid gray",
        padding: "0",

        borderRadius: "5px"
      }}
      title="Add MyPath to Your Home Screen"
      visible={isVisible}
      closable={false}
      maskClosable={false}
      cancelText="Don't show this again"
      onOk={() => setIsVisible(false)}
      onCancel={() => {
        window.localStorage.setItem("AppleNotification", "false");
        setIsVisible(false);
      }}
    >
      <p
        style={{
          margin: "0"
        }}
      >
        For a better experience,{" "}
        {!iOSSafari && <strong>open this page in Safari,</strong>} press the
        share button <IoIosShare color="#f38704" size={20} /> in the bottom
        navigation, scroll down, and select <strong>Add to Home Screen</strong>.
      </p>
    </Modal>
  ) : null;
}

export default AppleModal;
