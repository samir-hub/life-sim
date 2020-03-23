import React from "react";
import { useHistory } from "react-router-dom";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import guy_crossing_arms from "../guy_crossing_arms.png";
import WrappedLogin from "./Login";
import styled from "styled-components";

function Home() {
  // const [loggedIn, setLoggedIn] = useState();

  // let token = localStorage.getItem("token");

  // useEffect(() => {
  //   setLoggedIn(token);
  // }, [token]);
  const history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  return (
    <HomeWrapper>
      <div className="home-login">
        <WrappedLogin />
      </div>
      <img
        className="home-image"
        alt="Guy crossing arms"
        src={guy_crossing_arms}
      ></img>
      <div className="home-mobile">
        <h2>Plan out your future using MyPath. Let's get started!</h2>
        <Button
          onClick={handleClick}
          type="primary"
          shape="round"
          icon="rocket"
          size={"large"}
          style={{ height: "50px", width: "200px" }}
        >
          Start
        </Button>
      </div>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }
  .home-login {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .home-image {
    height: 90vh;
    @media only screen and (max-width: 600px) {
      height: 50vh;
      margin-top: 40px;
    }
  }
  .home-mobile {
    display: none; 
    @media only screen and (max-width: 600px) {
      display: block; 
    }
  }
`;
