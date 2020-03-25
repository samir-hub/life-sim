import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { formatDrawerValues } from "../utils/formatDrawerValues";

function ExpensesDrawerForm(props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);

  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting
    };
  });

  const groceriesPrice =
    471.34 *
    (state.isFetching
      ? 1
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1]
          .groceriesindex / 100);

  const formattedGroceries = parseFloat(groceriesPrice.toFixed(2));

  const restaurantPrice =
    48.56 *
    (state.isFetching
      ? 1
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1]
          .restaurantpriceindex / 100);

  const formattedRestaurant = parseFloat(restaurantPrice.toFixed(2));

  const [expenses, setExpenses] = useState({
    rent: state.isFetching
      ? 1000
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].avgrent,
    utilities: 100.0,
    groceries: formattedGroceries,
    restaurant: formattedRestaurant,
    premiums: 50.0,
    medExpenses: 20.0,
    carPayment: 300.0,
    insurance: 150.0,
    gas: 100.0,
    carMaintenance: 20.0,
    internet: 62.77,
    cell: 114.0,
    tv: 50.0,
    studentLoans: state.isFetching
      ? 200
      : (state.userInfo.details[state.userInfo.details.length - 1] &&
          state.userInfo.details[state.userInfo.details.length - 1]
            .education === "Community College") ||
        state.userInfo.details[state.userInfo.details.length - 1].education ===
          "No College"
      ? 0.0
      : 271.0,
    clothing: 30.0,
    entertainment: 50.0,
    pOther: 0.0
  });

  const handleEdit = e => {
    e.preventDefault();
    setDisabledInput(!disabledInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      setExpenses(formatDrawerValues(values));
    });
    // setIsLoading(true);
    // const clientID = process.env.REACT_APP_CLIENT_ID;
    // const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    // props.form.validateFields((err, values) => {
    //   if (!err) {
    //     axios
    //       .post(
    //         "https://samirlilienfeld-mypath.herokuapp.com/login",
    //         `grant_type=password&username=${values.username}&password=${values.password}`,
    //         {
    //           headers: {
    //             // btoa is converting our client id/client secret into base64
    //             Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
    //             "Content-Type": "application/x-www-form-urlencoded"
    //           }
    //         }
    //       )
    //       .then(res => {
    //         setIsLoading(false);
    //         localStorage.setItem("token", res.data.access_token);
    //         localStorage.setItem("username", values.username);
    //         //   props.setLoginToken(true);
    //         //   props.history.push("/");
    //         //   props.history.push("/");
    //       })
    //       .then(() => {
    //         axiosWithAuth()
    //           .get("/users/getuserinfo")
    //           .then(res => {
    //             localStorage.setItem("userid", res.data.userid);
    //             //   props.setLoginToken(true);
    //             history.push(`/entryform`);
    //           })
    //           .catch(err => console.dir(err));
    //       })
    //       .catch(err => console.dir(err));
    //   }
    // });
  };
  const { getFieldDecorator } = props.form;

  const validateMessages = {
    types: {
      number: "Not a valid number!"
    }
  };

  console.log(expenses);

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
          validatemessages={validateMessages}
          style={{ width: "300px", margin: "0 auto" }}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-item-div">
            <h3 className="form-item-title">Housing</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Rent</p>
                <Form.Item>
                  {getFieldDecorator("rent")(
                    <Input
                      type="number"
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.rent}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Utilities</p>
                <Form.Item>
                  {getFieldDecorator("utilities")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.utilities}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Food</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Groceries</p>
                <Form.Item>
                  {getFieldDecorator("groceries")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.groceries}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Restaurants</p>
                <Form.Item>
                  {getFieldDecorator("restaurant")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.restaurant}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Medical</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Premium</p>
                <Form.Item>
                  {getFieldDecorator("premiums")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.premiums}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Med. Expenses</p>
                <Form.Item>
                  {getFieldDecorator("medExpenses")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.medExpenses}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Necessities</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <div className="form-item-each">
                  <p className="form-item-label">Cell</p>
                  <Form.Item>
                    {getFieldDecorator("cell")(
                      <Input
                        disabled={disabledInput}
                        prefix={
                          <Icon
                            type="dollar"
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        }
                        placeholder={expenses.cell}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
              <div className="form-item-each">
                <div className="form-item-each">
                  <p className="form-item-label">Internet</p>
                  <Form.Item>
                    {getFieldDecorator("internet")(
                      <Input
                        disabled={disabledInput}
                        prefix={
                          <Icon
                            type="dollar"
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        }
                        placeholder={expenses.internet}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
              <div className="form-item-each">
                <div className="form-item-each">
                  <p className="form-item-label">TV</p>
                  <Form.Item>
                    {getFieldDecorator("tv")(
                      <Input
                        disabled={disabledInput}
                        prefix={
                          <Icon
                            type="dollar"
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        }
                        placeholder={expenses.tv}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
              <div className="form-item-each">
                <div className="form-item-each">
                  <p className="form-item-label">Student Loans</p>
                  <Form.Item>
                    {getFieldDecorator("studentLoans")(
                      <Input
                        disabled={disabledInput}
                        prefix={
                          <Icon
                            type="dollar"
                            style={{ color: "rgba(0,0,0,.45)" }}
                          />
                        }
                        placeholder={expenses.studentLoans}
                      />
                    )}
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Transport</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Car Payment</p>
                <Form.Item>
                  {getFieldDecorator("carPayment")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.carPayment}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Insurance</p>
                <Form.Item>
                  {getFieldDecorator("insurance")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.insurance}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Gas</p>
                <Form.Item>
                  {getFieldDecorator("gas")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.gas}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Car Maintenance</p>
                <Form.Item>
                  {getFieldDecorator("carMaintenance")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.carMaintenance}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-item-div">
            <h3 className="form-item-title">Personal</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Clothing</p>
                <Form.Item>
                  {getFieldDecorator("clothing")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.clothing}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Entertainment</p>
                <Form.Item>
                  {getFieldDecorator("entertainment")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.entertainment}
                    />
                  )}
                </Form.Item>
              </div>
              <div className="form-item-each">
                <p className="form-item-label">Other</p>
                <Form.Item>
                  {getFieldDecorator("pOther")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={expenses.pOther}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-item-div buttons">
            <Form.Item>
              <Button
                loading={isLoading}
                type="primary"
                onClick={handleEdit}
                className="login-form-button"
              >
                Edit
              </Button>
              <Button
                loading={isLoading}
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
        flex-wrap: wrap;
        .form-item-each {
          width: 150px;
          .ant-input {
            font-size: 20px;
          }
        }
      }
      .form-item-title {
        margin-right: 10px;
        margin-top: 5px;
      }
    }
    .buttons {
      width: 300px;
    }
  }
`;
