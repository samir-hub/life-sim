import React from "react";
import woman_goal from "../woman_goal.png";
import styled from "styled-components";

function PostGraduation() {
  return (
    <ComponentWrapper>
      <TextWrapper>
        {/* <h1 className="postgraduation-title">Congratulations!</h1> */}
        <h3 className="postgraduation-text"><span className="postgraduation-lorem">Congratulations,</span> you are well on your way to a successful start into adulthood. This is your dashboard. Use the sider to navigate and plan your future!</h3>
      </TextWrapper>
      <ImageWrapper>
        <img
          className="postgraduation-image"
          alt="woman reaching her goals"
          src={woman_goal}
        />
      </ImageWrapper>
    </ComponentWrapper>
  );
}

export default PostGraduation;

const ImageWrapper = styled.div`
  .postgraduation-image {
    height: 500px;
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .postgraduation-lorem{
    color: #F38704; 
  }
  .postgraduation-text{
    font-size: 2rem; 
    width: 70%; 
  }
`;
