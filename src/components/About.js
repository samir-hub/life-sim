import React from "react";
import styled from "styled-components";
import about_cover from "../assets/about_cover.png";
import AboutCard from "./AboutCard";

function About() {
  return (
    <AboutWrapper>
      <HeroWrapper>
        <img className="about-cover" alt="mypath-logo" src={about_cover}></img>
      </HeroWrapper>
      <div className="about-content">
        <p className="about-text">
          <span className="about-span">MyPath </span>is dedicated to helping
          high school students and young adults plan for the future. Money
          management is a complicated issue and you should consult a
          professional before making any decisions, but MyPath is a useful
          guide. We make it easy. You will be asked to answer a few questions
          and MyPath will create your financial profile. Your profile will let
          you view and edit your expected income and expenses. <br></br>
          To calculate your financial profile data, we take information from
          reliable resources like the U.S. Bureau of Labor Statistics and
          perform some statistical analysis. While these numbers are just
          estimates, we are constantly improving our analysis and methods, so
          they serve as a great guide to help you plan for the future.
        </p>
        <p className="about-text">
          <span className="about-span-second">The income data</span> is taken
          from theloanmajor.com and the U.S. Census Bureau. The statutory
          deduction tax rates were taken from the IRS. <br></br>
          <span className="about-span-second">The expenses data</span> comes
          from smartasset.com and cnbc.com. The data to estimate student loan
          payment comes from U.S. New and World Report, SoFi.com and
          smartasset.com. <br></br>
          <span className="about-span-second">Samir Lilienfeld</span> is the
          creator of MyPath. He is a Full Stack Web Developer who specializes in
          crafting responsive UI, building single page applications, developing
          Web APIs, and managing teams in a professional environment using Agile
          methodology. Moreover, he holds a Bachelor's of Science degree from
          the University of Texas at Austin 🤘🏼.
        </p>
        <AboutCard />
      </div>
    </AboutWrapper>
  );
}

export default About;

const HeroWrapper = styled.div`
  background: #f38704;
  width: 100%;
  height: 20vh;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    margin-top: 0;
    }
  .about-cover {
    max-width: 10%;
    @media only screen and (max-width: 600px) {
      max-width: 30%;
    }
  }
`;

const AboutWrapper = styled.div`
@media only screen and (max-width: 600px) {
     margin-top: -6px; 
    }
  .about-content {
    margin: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 600px) {
      flex-direction: column; 
    }
    .about-span {
      color: #f38704;
      font-size: 40px;
    }
    .about-span-second {
      color: #f38704;
    }
    .about-text {
      width: 30%;
      text-align: left;
      font-weight: bold;
      font-size: 16px;
      @media only screen and (max-width: 600px) {
      width: 90%;
    }
    }
  }
`;
