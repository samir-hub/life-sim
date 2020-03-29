import React, { useState } from "react";
import Drawer from "antd/es/drawer";
import "antd/es/drawer/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import styled from "styled-components";
import WrappedIncomeForm from "./IncomeDrawerForm";

function IncomeDrawer() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  let screen = window.screen.width;

  return (
    <DrawerWrapper>
      <Button type="primary" onClick={showDrawer}>
        View Details
      </Button>
      <Drawer
        title="Income"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={screen < 600 ? "75%" : "35%"}
      >
        <WrappedIncomeForm onClose={onClose}/>
      </Drawer>
    </DrawerWrapper>
  );
}

export default IncomeDrawer;

const DrawerWrapper = styled.div`
  margin-top: 10px;
  float: right; 
`;
