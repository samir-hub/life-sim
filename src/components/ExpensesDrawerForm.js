import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
import { putDetails } from "../actions";

function ExpensesDrawerForm(props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);

  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
      isPosting: state.isPosting,
      isEditing: state.isEditing
    };
  });

  const expenses = {
    rent: state.isFetching
      ? 1000
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].rent,
    utilities: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].utilities,
    groceries: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].groceries,
    restaurant: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].restaurant,
    premiums: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].premiums,
    medExpenses: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].medExpenses,
    carPayment: state.isFetching
      ? 300
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].carPayment,
    insurance: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].insurance,
    gas: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].gas,
    carMaintenance: state.isFetching
      ? 20
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1]
          .carMaintenance,
    internet: state.isFetching
      ? 62.77
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].internet,
    cell: state.isFetching
      ? 114
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].cell,
    tv: state.isFetching
      ? 50
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].tv,
    studentLoans: state.isFetching
      ? 100
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].studentLoans,
    clothing: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].clothing,
    entertainment: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].entertainment,
    pOther: state.isFetching
      ? 0
      : state.userInfo.details[state.userInfo.details.length - 1] &&
        state.userInfo.details[state.userInfo.details.length - 1].pOther
  };

  const handleEdit = e => {
    e.preventDefault();
    setDisabledInput(!disabledInput);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    let detailsId =
      state.userInfo.details[state.userInfo.details.length - 1] &&
      state.userInfo.details[state.userInfo.details.length - 1].detailsid;
    props.form.validateFields((err, values) => {
      dispatch(putDetails(detailsId, values));
    });
  };
  const { getFieldDecorator } = props.form;

  const validateMessages = {
    types: {
      number: "Not a valid number!"
    }
  };

  console.log(expenses);
  console.log("isEditing", state.isEditing);

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
