import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
//import styled from 'styled-components';
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";

const { Header } = Layout;

const Navigation = () => {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState();

  let token = localStorage.getItem("token");

  useEffect(() => {
    setLoggedIn(token);
  }, [token]);

  console.log(location.pathname);

  return (
    <Layout className="layout">
      <Header style={{ background: "#fff" }}>
        <div className="logo" />

        {loggedIn ? (
          <div style={{
            lineHeight: "64px",
            display: "flex",
            justifyContent: "center", 
            alignItems: 'center'
          }}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              selectedKeys={[location.pathname]}
              style={{
                lineHeight: "64px",
                display: "flex",
                justifyContent: "flex-start", 
                width: '90%'
              }}
            >
              <Menu.Item key="/">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="/about">
                <NavLink to="/about">About</NavLink>
              </Menu.Item>
              <Menu.Item key="/contact">
                <NavLink to="/contact">Contact</NavLink>
              </Menu.Item>
              <Menu.Item key="/entryform">
                <NavLink to="/entryform">Get Started</NavLink>
              </Menu.Item>
              <Menu.Item key="/dashboard">
                <NavLink to="/dashboard">My Dashboard</NavLink>
              </Menu.Item>
           
            </Menu>
            <Button
                type="primary"
                shape="round"
                icon="logout"
                size={"medium"}
                style={{ height: '50px', leftMargin: '300px' }}
              >
                Logout
              </Button>
          </div>
        ) : (
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
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
            <Menu.Item key="/about">
              <NavLink to="/about">About</NavLink>
            </Menu.Item>
            <Menu.Item key="/contact">
              <NavLink to="/contact">Contact</NavLink>
            </Menu.Item>
          </Menu>
        )}
      </Header>
    </Layout>
  );
};

export default Navigation;
