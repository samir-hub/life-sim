import React from "react";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Dropdown from "antd/es/dropdown";
import "antd/es/dropdown/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";

function MobileMenu() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="components-dropdown-demo-dropdown-button">
      <Dropdown overlay={menu}>
        <Button>
          <Icon type="menu" />
        </Button>
      </Dropdown>
    </div>
  );
}

export default MobileMenu;
