import React from "react";
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
          .post("http://localhost:2019/createnewuser", {
            username: values.username,
            password: values.password,
            primaryemail: values.primaryemail
          })
          .then(res => console.log(res))
          .catch(err => console.error(err));
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Card style={{ width: "500px" }}>
      <StyledDiv>
        <h1 className="register-card-title">Create an Account</h1>
      </StyledDiv>
      <Form
        style={{ width: "300px", margin: "0 auto" }}
        onSubmit={handleSubmit}
        className="register-form"
      >
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("primaryemail", {
            rules: [{ required: true, message: "Please input your E-mail" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your password" }]
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

const WrappedRegister = Form.create({ name: "register_form" })(Register);

export default WrappedRegister;

const StyledDiv = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .register-card-title {
    font-size: 40px;
  }
`;
