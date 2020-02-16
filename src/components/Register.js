import React, { useEffect } from "react";
//import { NavLink } from "react-router-dom";
import axios from "axios";
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

function Register(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        axios
          .post("http://localhost:2019/users/user", {
            username: values.username,
            primaryemail: values.email,
            password: values.password
          })
          .then(res => console.error(res))
          .catch(err => console.error(err));
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Card style={{ width: "500px" }}>
      <StyledDiv>
        <h1 className="login-card-title">Create an Account</h1>
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
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

const WrappedLogin = Form.create({ name: "login_form" })(Register);

export default WrappedLogin;

const StyledDiv = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .login-card-title {
    font-size: 40px;
  }
`;
