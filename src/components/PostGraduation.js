import React from "react";
import woman_goal from "../woman_goal.png";
import styled from "styled-components";

function PostGraduation() {
  return (
    <ComponentWrapper>
      <ImageWrapper>
        <img className='postgraduation-image' alt="woman reaching her goals" src={woman_goal} />
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
