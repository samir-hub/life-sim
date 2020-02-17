import React from "react";
import { NavLink, useLocation } from "react-router-dom";
//import styled from 'styled-components';
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
//import { findByLabelText } from "@testing-library/react";

const { Header } = Layout;

const Navigation = () => {
const location = useLocation();

console.log(location.pathname)

  return (
    <Layout className="layout">
      <Header style={{ background: "#fff" }}>
        <div className="logo" />

        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}
          style={{
            lineHeight: "64px",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <Menu.Item key="/">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/entryform">
            <NavLink to="/entryform">Get Started</NavLink>
          </Menu.Item>
          <Menu.Item key="/dashboard">
            <NavLink to="/dashboard">My Dashboard</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navigation;
