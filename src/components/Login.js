import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Form from "antd/es/form";
import "antd/es/form/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Input from "antd/es/input";
import "antd/es/input/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";

function Login(props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post(
            "http://localhost:2019/login",
            `grant_type=password&username=${values.username}&password=${values.password}`,
            {
              headers: {
                // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(res => {
            setIsLoading(false);
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("username", values.username);
            //   props.setLoginToken(true);
            //   props.history.push("/");
            //   props.history.push("/");
          })
          .then(() => {
            axiosWithAuth()
              .get("/users/getuserinfo")
              .then(res => {
                localStorage.setItem("userid", res.data.userid);
                //   props.setLoginToken(true);
                history.push(`/entryform`);
              })
              .catch(err => console.dir(err));
          })
          .catch(err => console.dir(err));
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <WrapperDiv>
      <Card className="login-card">
        <StyledDiv>
          <h1 className="login-card-title">MyPath</h1>
          <p className="login-card-text">
            Transitioning into adulthood can be challenging. The biggest
            obstacle is often financial planning. With MyPath, you can plan for
            a successful financial future by entering just a few data points.
            Login below or create an account to get started!
          </p>
        </StyledDiv>
        <Form
          style={{ width: "300px", margin: "0 auto" }}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              loading={isLoading}
              style={{ width: "285px" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <NavLink to="/register">register now!</NavLink>
          </Form.Item>
        </Form>
      </Card>
    </WrapperDiv>
  );
}

const WrappedLogin = Form.create({ name: "login_form" })(Login);

export default WrappedLogin;

const StyledDiv = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .login-card-title {
    font-family: "Libre Baskerville", serif;
    font-size: 40px;
    color: #f38704;
  }
  @media only screen and (max-width: 600px) {
    .login-card-title {
      margin-bottom: 0;
    }
  }
  .login-card-text {
    width: 80%;
    font-size: 17px;
  }
  @media only screen and (max-width: 600px) {
    .login-card-text {
      font-size: 15px;
    }
  }
`;

const WrapperDiv = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .login-card {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    .login-card {
      width: 90%;
      height: 80vh;
    }
  }
  .login-form {
    width: 100%;
  }
`;
