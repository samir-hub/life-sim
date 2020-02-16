import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import { findByLabelText } from "@testing-library/react";

const { Header } = Layout;

const Navigation = () => {
  return (
    <Layout className="layout">
      <Header style={{background: '#fff'}}>
        <div className="logo" />
        
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px", display: 'flex', justifyContent: 'flex-start'}}
        >
    
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/entryform">Get Started</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/dashboard">My Dashboard</NavLink>
          </Menu.Item>
    
        </Menu>
   
      </Header>
    </Layout>
  );
};

export default Navigation;

