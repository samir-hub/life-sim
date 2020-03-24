import React from "react";
import woman_goal from "../woman_goal.png";
import styled from "styled-components";

function PostGraduation() {
  return (
    <ComponentWrapper>
      <div className="pg-text">
        <h3 className="postgraduation-text">
          <span className="postgraduation-lorem">Congratulations,</span> you are
          well on your way to a successful start into adulthood. This is your
          dashboard. Use the sider to navigate and plan your future!
        </h3>
      </div>
      <div className="pg-image">
        <img
          className="postgraduation-image"
          alt="woman reaching her goals"
          src={woman_goal}
        />
      </div>
    </ComponentWrapper>
  );
}

export default PostGraduation;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    min-width: 375px; 
    justify-content: space-evenly; 
    height: 80vh; 
    padding-right: 10px; 
  }
  .pg-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 600px) {
      height: 40%; 
      justify-content: flex-start; 

    }
    .postgraduation-lorem {
      color: #f38704;
    }
    .postgraduation-text {
      font-size: 2rem;
      width: 70%;
      @media only screen and (max-width: 600px) {
        font-size: 1.3rem;
      }
    }
  }
  .pg-image {
    .postgraduation-image {
      height: 500px;
      @media only screen and (max-width: 600px) {
        height: 250px;
      }
    }
  }
`;
