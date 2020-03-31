import React from "react";
import styled from "styled-components";
import about_cover from "../assets/about_cover.png";

function About() {
  return (
    <div className="about">
      <HeroWrapper>
        <img className="about-cover" alt="mypath-logo" src={about_cover}></img>
      </HeroWrapper>
    </div>
  );
}

export default About;

const HeroWrapper = styled.div`
  background: #f38704;
  width: 100%;
  height: 40vh;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-cover {
    max-width: 30%;
  }
`;
