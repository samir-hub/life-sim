import React from "react";
import styled from "styled-components";
import DetailsCard from "./DetailsCard";

function Compare({ userInfo }) {

    console.log(userInfo)
  return (
    <StyledDiv>
      <div className="compare-cards-wrapper">
          {userInfo.details.map(detail => {
              return <DetailsCard key={detail.detailsid} education={detail.education}/>
          })}
      </div>
    </StyledDiv>
  );
}

export default Compare;

const StyledDiv = styled.div``;
