import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import path_logo from "../../assets/path_logo.svg";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import styled from "styled-components";
import MobileMenu from "../mobile/MobileMenu";

const MobileHeaderNoAuth = () => {
  const location = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    history.push("/");
  };
  return (
    <MHWrapper className="mobile-header">
      {location.pathname === "/" && (
        <NavLink to="/login">
          <Icon className="login-icon" type="login" />
        </NavLink>
      )}
      {location.pathname === "/login" && (
        <NavLink to="/">
          <Icon className="login-icon" type="left-circle" />
        </NavLink>
      )}
      {location.pathname === "/register" && (
        <NavLink to="/">
          <Icon className="login-icon" type="left-circle" />
        </NavLink>
      )}
      {location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/register" && (
        <Icon onClick={handleLogout} className="login-icon" type="logout" />
      )}
      <div className="mobile-logo">
        <img className="logo" src={path_logo} alt="logo" />
      </div>
      <div className="mobile-menu">
        <MobileMenu />
      </div>
    </MHWrapper>
  );
};

export default MobileHeaderNoAuth;

const MHWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: inline-block;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 6px;
    border-bottom: 0.05px solid gray;
    position: relative;
  }
  .login-icon {
    height: auto;
    transform: scale(2.5);
    float: left;
    margin: 20px 0 0 20px;
    
  }
  .mobile-logo {
    display: inline-block;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    margin-top: -25px;

    .logo {
      /* display: inline-block;
      height: auto; */
      border-radius: 10px;
    }
  }
  .mobile-menu {
    float: right;
    margin: 10px 10px 0 0;
  }
`;
