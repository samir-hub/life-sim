import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Dropdown from "antd/es/dropdown";
import "antd/es/dropdown/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";

function MobileMenu() {
  const [loggedIn, setLoggedIn] = useState();

  let token = localStorage.getItem("token");

  useEffect(() => {
    setLoggedIn(token);
  }, [token]);

  const menu = loggedIn ? (
    <Menu>
      <Menu.Item key="1">
        {/* <Icon type="home" /> */}
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        {/* <Icon type="info-circle" /> */}
        <NavLink to="/about">About</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        {/* <Icon type="message" /> */}
        <NavLink to="/contact">Contact</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        {/* <Icon type="star" /> */}
        <NavLink to="/entryform">Get Started</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        {/* <Icon type="user" /> */}
        <NavLink to="/dashboard">My Dashboard</NavLink>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key="1">
        {/* <Icon type="home" /> */}
        Home
      </Menu.Item>
      <Menu.Item key="2">
        {/* <Icon type="info-circle" /> */}
        About
      </Menu.Item>
      <Menu.Item key="3">
        {/* <Icon type="message" /> */}
        Contact
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
