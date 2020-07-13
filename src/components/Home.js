import React from "react";
import { useHistory } from "react-router-dom";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import guy_crossing_arms from "../assets/guy_crossing_arms.png";
import WrappedLogin from "./Login";
import styled from "styled-components";
import AppleModal from "./mobile/AppleModal";
import useRemoveToken from "../hooks/useRemoveToken";

function Home() {
  const history = useHistory();
  const date = Date.now();
  useRemoveToken(date);
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <HomeWrapper>
      <AppleModal />
      <div className="home-login">
        <WrappedLogin />
      </div>
      <div className="image-wrapper">
        <img
          className="home-image"
          alt="Guy crossing arms"
          src={guy_crossing_arms}
        ></img>
      </div>
      <div className="home-mobile">
        <h2>Plan your future with MyPath!</h2>
        <Button
          onClick={handleClick}
          type="primary"
          shape="round"
          icon="rocket"
          size={"large"}
          style={{ height: "50px", width: "200px", marginTop: "10px" }}
        >
          Start
        </Button>
      </div>
    </HomeWrapper>
  );
}

export default Home;

const height = window.screen.height;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly; 
    padding: 10px;
    height: 80vh;
  }
  .home-login {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .image-wrapper {
    min-width: ${height * 0.9}px;
    .home-image {
      height: 90vh;
      @media only screen and (max-width: 600px) {
        height: 45vh;
        margin-top: 20px;
      }
    }
    @media only screen and (max-width: 600px) {
      min-width: ${height * 0.45}px;
    }
  }

  .home-mobile {
    display: none;
    @media only screen and (max-width: 600px) {
      display: block;
    }
  }
`;
