import React from "react";
import styled from "styled-components";
import DetailsCard from "./DetailsCard";
import path_logo from "../assets/path_logo.svg";

function Compare({ userInfo }) {
  console.log(userInfo);
  return (
    <StyledDiv>
      <div className="compare-cards-wrapper">
        {userInfo.details.map((detail) => {
          return (
            <DetailsCard key={detail.detailsid} detail={detail} avatar={path_logo}/>
          );
        })}
      </div>
    </StyledDiv>
  );
}

export default Compare;

const StyledDiv = styled.div`
  .compare-cards-wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
