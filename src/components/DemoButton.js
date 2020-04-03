import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import styled from "styled-components";
import message from "antd/es/message";
import "antd/es/message/style/css";

function DemoButton() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const error = () => {
    message.error(`Invalid username or password. Please try again.`, 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

    axios
      .post(
        "https://samirlilienfeld-mypath.herokuapp.com/login",
        `grant_type=password&username=demo&password=password`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("username", "demo");
      })
      .then(() => {
        axiosWithAuth()
          .get("/users/getuserinfo")
          .then((res) => {
            localStorage.setItem("userid", res.data.userid);
            history.push(`/dashboard`);
          })
          .catch((err) => console.dir(err));
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data.error_description === `Bad credentials`) {
          setIsLoading(false);
          error();
        }
      });
  };

  return (
    <WrapperDiv>
      <Button
        loading={isLoading}
        style={{ width: "285px", background: "#F38704", borderColor: "#F38704" }}
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={handleSubmit}
      >
        Jump to Demo
      </Button>
    </WrapperDiv>
  );
}

export default DemoButton;

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
      min-height: 80vh;
    }
  }
  .login-form {
    width: 100%;
  }
`;
