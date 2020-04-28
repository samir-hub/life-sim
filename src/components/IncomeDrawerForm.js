import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
//import { formatDrawerValues } from "../utils/formatDrawerValues";
import { putDetails } from "../actions";
import useIsDemo from "../hooks/useIsDemo";

function IncomeDrawerForm(props) {
  const [disabledInput, setDisabledInput] = useState(true);
  const isDemo = useIsDemo();
  const state = useSelector((state) => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching,
    };
  });

  const income = {
    avgmajor:
      state.userInfo.details[state.userInfo.details.length - 1] &&
      Math.floor(
        state.userInfo.details[state.userInfo.details.length - 1].avgmajor
      ),
  };

  let screen = window.screen.width;

  const handleEdit = (e) => {
    e.preventDefault();
    setDisabledInput(!disabledInput);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClose();
    setDisabledInput(!disabledInput);
    let detailsId =
      state.userInfo.details[state.userInfo.details.length - 1] &&
      state.userInfo.details[state.userInfo.details.length - 1].detailsid;
    props.form.validateFields((err, values) => {
      for (let item in values) {
        if (
          values[item] === "0" ||
          values[item] === "0.0" ||
          values[item] === "0.00"
        ) {
          values[item] = 0.1;
        }
      }
      dispatch(putDetails(detailsId, values));
    });
  };
  const { getFieldDecorator } = props.form;

  const validateMessages = {
    types: {
      number: "Not a valid number!",
    },
  };

  return (
    <WrapperDiv>
      <Card className="login-card">
        <StyledDiv>
          <p className="login-card-text">
            You can view and edit your gross yearly income below.
          </p>
        </StyledDiv>
        <Form
          validatemessages={validateMessages}
          style={{ width: screen > 600 ? "300px" : "150px", margin: "0 auto" }}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-item-div">
            <h3 className="form-item-title">Income</h3>
            <div className="form-item-inner">
              <div className="form-item-each">
                <p className="form-item-label">Gross Yearly Income</p>
                <Form.Item>
                  {getFieldDecorator("avgmajor")(
                    <Input
                      disabled={disabledInput}
                      prefix={
                        <Icon
                          type="dollar"
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      }
                      placeholder={income.avgmajor}
                    />
                  )}
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="form-item-each">
            <Form.Item>
              <Button
                disabled={isDemo}
                type="secondary"
                onClick={handleEdit}
                className="login-form-button"
              >
                Edit
              </Button>
              <Button
                disabled={isDemo}
                type="primary"
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

const WrappedIncomeForm = Form.create({ name: "income_form" })(
  IncomeDrawerForm
);

export default WrappedIncomeForm;

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
      width: 100%;
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
      @media only screen and (max-width: 600px) {
        width: 150px;
      }
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
    .ant-form-item-control {
      width: 100%;
      display: flex;
      justify-content: space-around;
      @media only screen and (max-width: 600px) {
        width: 150px;
      }
      .login-form-button {
        margin: 0 10px;
        width: 100px;
        @media only screen and (max-width: 600px) {
          width: 150px;
        }
      }
    }
  }
`;
