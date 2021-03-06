import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import path_logo from "../assets/path_logo.svg";
import styled from "styled-components";

const { Header } = Layout;

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState();

  let token = localStorage.getItem("token");

  useEffect(() => {
    setLoggedIn(token);
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    localStorage.removeItem("lastLogin");
    history.push("/");
  };

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <NavWrapper className="navigation">
      <Layout className="layout">
        <Header
          style={{
            background: "#fff",
            display: "flex",
            paddingLeft: "5px",
            paddingRight: "5px"
          }}
        >
          <LogoDiv>
            <img className="logo" alt="logo" src={path_logo} />
          </LogoDiv>

          {loggedIn ? (
            <div
              style={{
                lineHeight: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderBottom: "1px solid #e8e8e8",
                height: "66px"
              }}
            >
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["/"]}
                selectedKeys={[location.pathname]}
                style={{
                  lineHeight: "64px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "90%"
                }}
              >
                <Menu.Item key="/entryform">
                  <NavLink to="/entryform">Get Started</NavLink>
                </Menu.Item>
                <Menu.Item key="/dashboard">
                  <NavLink to="/dashboard">My Dashboard</NavLink>
                </Menu.Item>
                <Menu.Item key="/about">
                  <NavLink to="/about">About</NavLink>
                </Menu.Item>
                {/* <Menu.Item key="/contact">
                  <NavLink to="/contact">Contact</NavLink>
                </Menu.Item> */}
              </Menu>
              <Button
                onClick={handleLogout}
                type="primary"
                shape="round"
                icon="logout"
                size={"large"}
                style={{ height: "50px", leftMargin: "300px" }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div
              style={{
                lineHeight: "64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                borderBottom: "1px solid #e8e8e8",
                height: "66px"
              }}
            >
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={["/"]}
                selectedKeys={[location.pathname]}
                style={{
                  lineHeight: "64px",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "90%"
                }}
              >
                <Menu.Item key="/">
                  <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="/about">
                  <NavLink to="/about">About</NavLink>
                </Menu.Item>
                {/* <Menu.Item key="/contact">
                  <NavLink to="/contact">Contact</NavLink>
                </Menu.Item> */}
              </Menu>
              <Button
                onClick={handleRegister}
                ghost={true}
                type="primary"
                shape="round"
                icon="user-add"
                size={"large"}
                style={{ height: "50px", leftMargin: "300px" }}
              >
                Register
              </Button>
            </div>
          )}
        </Header>
      </Layout>
    </NavWrapper>
  );
};

export default Navigation;

const LogoDiv = styled.div`
  min-width: 50px; 
  .logo {
    height: 50px;
    border-radius: 10px;
  }
`;

const NavWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
