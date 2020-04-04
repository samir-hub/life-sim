import React from "react";
import styled from "styled-components";
import woman_goal from "../assets/woman_goal.png";

function PostGraduation({setActive}) {
  return (
    <ComponentWrapper>
      <div className="pg-text">
        <h3 className="postgraduation-text">
          <span className="postgraduation-lorem">Congratulations,</span> you are
          well on your way to a successful start into adulthood. This is your
          Dashboard. Check out your projected <span className="pg-span" onClick={()=> {setActive("2")}}>Income</span> and <span className="pg-span" onClick={()=> {setActive("3")}}>Expenses</span>.
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
  padding: 0 40px; 
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    min-width: 375px; 
    justify-content: space-around; 
    max-height: 600px; 
    padding-right: 10px; 
    padding: 0 10px 0 0; 
  }
  .pg-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 600px) {
      height: 40%; 
      justify-content: flex-start; 
      align-items: center;

    }
    .postgraduation-lorem {
      color: #f38704;
    }
    .pg-span {
      color: #1890FF; 
      cursor: pointer; 
    }
    .postgraduation-text {
      font-size: 2rem;
      width: 80%;
      @media only screen and (max-width: 600px) {
        width: 80%; 
        font-size: 1.3rem;
        margin-top: 20px; 
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
