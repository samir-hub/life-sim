import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post("http://localhost:2019/createnewuser", {
            username: values.username,
            password: values.password,
            primaryemail: values.primaryemail
          })
          .then(res => {
            setIsLoading(false);
            history.push("/");
          })
          .catch(err => console.error(err));
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <DivWrapper>
      <Card className="register-card">
        <StyledDiv>
          <Icon type="user" style={{ color: '#f38704', fontSize: "40px" }} />
          <h2 className="register-card-title">Create Your Account</h2>
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
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("primaryemail", {
              rules: [{ required: true, message: "Please input your E-mail" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-mail"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your password" }]
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
    </DivWrapper>
  );
}

const WrappedRegister = Form.create({ name: "register_form" })(Register);

export default WrappedRegister;

const StyledDiv = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center; 
  @media only screen and (max-width: 600px) {
    height: 150px;
  }
  .register-card-title {
    font-size: 40px;
    margin: 0; 
    color: #2F4858;
  }
  @media only screen and (max-width: 600px) {
    .register-card-title {
      font-size: 25px;
    }
  }
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
  .register-card {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    .register-card {
      width: 90%;
      height: 80vh;
    }
  }
`;
