import React from "react";
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

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios
          .post(
            "http://localhost:2019/login",
            `grant_type=password&username=${values.username}&password=${values.password}`,
            {
              headers: {
                // btoa is converting our client id/client secret into base64
           
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }
          )
          .then(res => {
            console.log(res.data);
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
    <Card style={{ width: "500px" }}>
      <StyledDiv>
        <h1 className="login-card-title">LifeSim</h1>
        <p className="login-card-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </StyledDiv>
      <Form
        style={{ width: "300px", margin: "0 auto" }}
        onSubmit={handleSubmit}
        className="login-form"
      >
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            style={{ width: "100%" }}
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
    font-size: 40px;
  }
  .login-card-text {
    width: 80%;  
    font-size: 17px;
  }
`;
