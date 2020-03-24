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

function ExpensesDrawerForm(props) {
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
            "https://samirlilienfeld-mypath.herokuapp.com/login",
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
          <p className="login-card-text">
            Transitioning into adulthood can be challenging. The biggest
            obstacle is often financial planning.
          </p>
        </StyledDiv>
        <Form
          style={{ width: "300px", margin: "0 auto" }}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-item-div">
            <h3 className="form-item-title">Housing</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Rent</p>
              <Form.Item>
               <Input placeholder="Username" />
              </Form.Item>
              <p className="form-item-label">Utilities</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Food</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Groceries</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Restaurant</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Medical</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Premium</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Med. Expenses</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Necessities</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Cell</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Internet</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
              <p className="form-item-label">TV</p>
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
              <p className="form-item-label">Student Loans</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Transport</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Car Payment</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Insurance</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
              <p className="form-item-label">Gas</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Car Maintenance</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Personal</h3>
            <div className="form-item-inner">
              <p className="form-item-label">Clothing</p>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <p className="form-item-label">Entertainment</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
              <p className="form-item-label">Other</p>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(<Input type="password" placeholder="Password" />)}
              </Form.Item>
            </div>
          </div>
          <div className="form-item-div">
            <Form.Item>
              <Button
                loading={isLoading}
                style={{ width: "285px" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Edit
              </Button>
              <Button
                loading={isLoading}
                style={{ width: "285px" }}
                type="secondary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </WrapperDiv>
  );
}

const WrappedExpensesForm = Form.create({ name: "expenses_form" })(
  ExpensesDrawerForm
);

export default WrappedExpensesForm;

const StyledDiv = styled.div`
  height: 100px;
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
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .form-item-div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .form-item-inner {
        display: flex;
        align-content: center;
      }
      .form-item-title {
        margin-right: 10px;
        margin-top: 5px;
      }
    }
  }
`;
