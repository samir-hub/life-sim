import React from "react";
import styled from "styled-components";
import about_cover from "../assets/about_cover.png";
import AboutCard from "./AboutCard";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";

const { Footer } = Layout;

function About() {
  const screen = window.screen.width;

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
          guide.
          {screen < 600 && (
            <>
              <br></br>
              <br></br>
            </>
          )}{" "}
          We make it easy. You will be asked to answer a few questions and
          MyPath will create your financial profile. Your profile will let you
          view and edit your expected income and expenses.{" "}
          {screen < 600 && <br></br>}
          <br></br>
          To calculate your financial profile data, we take information from
          reliable resources like the U.S. Bureau of Labor Statistics and
          perform some statistical analysis. While these numbers are just
          estimates, we are constantly improving our analysis and methods, so
          they serve as a great guide to help you plan for the future.
        </p>
        <p className="about-text">
          <span className="about-span-second">The income data</span> is taken
          from{" "}
          <a
            href="https://www.theloanmajor.com/starting-salaries/"
            target="_blank"
            rel="noopener noreferrer"
          >
            theloanmajor.com
          </a>{" "}
          and the{" "}
          <a
            href="https://www.census.gov/programs-surveys/acs/data.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Census Bureau
          </a>
          . The statutory deduction tax rates were taken from the{" "}
          <a
            href="https://www.irs.gov/taxtopics/tc751"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS
          </a>
          . {screen < 600 && <br></br>}
          <br></br>
          <span className="about-span-second">The expenses data</span> comes
          from{" "}
          <a
            href="https://smartasset.com/mortgage/what-is-the-cost-of-living-in-new-york-city"
            target="_blank"
            rel="noopener noreferrer"
          >
            smartasset.com
          </a>{" "}
          and{" "}
          <a
            href="https://www.cnbc.com/2019/03/07/heres-the-share-of-income-that-goes-to-rent-in-cities-across-the-us.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            cnbc.com
          </a>
          . The data to estimate student loan payment comes from{" "}
          <a
            href="https://www.usnews.com/education/best-graduate-schools/top-business-schools/articles/mba-salary-jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. New and World Report
          </a>
          ,{" "}
          <a
            href="https://www.sofi.com/learn/content/average-graduate-student-loan-debt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoFi.com
          </a>{" "}
          and{" "}
          <a
            href="https://smartasset.com/student-loans/student-loan-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            smartasset.com
          </a>
          . {screen < 600 && <br></br>}
          <br></br>
          <span className="about-span-second">Samir Lilienfeld</span> is the
          creator of MyPath. He is a Full Stack Web Developer who specializes in
          crafting responsive UI, building single page applications, developing
          Web APIs, and managing teams in a professional environment using Agile
          methodology. Moreover, he holds a Bachelor's of Science degree from
          the University of Texas at Austin 🤘🏼.
        </p>
        <AboutCard />
      </div>
      <Footer className="footer">
        <div className="sm-icons">
          <a
            href="https://github.com/samir-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              style={{ color: "#211F1F" }}
              className="icon github"
              type="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/samir-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              style={{ color: "#0e76a8" }}
              className="icon linkedin"
              type="linkedin"
            />
          </a>
          <a
            href="https://twitter.com/SamirLilienfeld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              style={{ color: "#00acee" }}
              className="icon twitter"
              type="twitter"
            />
          </a>
        </div>
        <div>
          <h5>
            Illustrations from{" "}
            <a
              href="https://iconscout.com/illustration-pack/startup-56"
              target="_blank"
              rel="noopener noreferrer"
            >
              iconscout
            </a>
            . Icons from{" "}
            <a
              href="https://iconscout.com/contributors/jemismali/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jemis Mali
            </a>
            ,{" "}
            <a
              href="https://iconscout.com/contributors/plastic-donut/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plastic Donut
            </a>
            ,{" "}
            <a
              href="https://iconscout.com/contributors/baitisstudio/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baiti Studio
            </a>
            ,{" "}
            <a
              href="https://iconscout.com/contributors/pocike/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpár - Etele Méder
            </a>
            , and{" "}
            <a
              href="https://iconscout.com/contributors/devendra-karkar/icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devendra Karkar
            </a>
            .
          </h5>
          <h4>Created by Samir Lilienfeld</h4>
        </div>
      </Footer>
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
  .footer {
    @media only screen and (max-width: 600px) {
        padding: 20px; 
      }
  }
  .sm-icons {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 0 30px 0;
    @media only screen and (max-width: 600px) {
        width: 90%;
        justify-content: space-between;
      }
    .icon {
      font-size: 60px;
      padding: 10px;
    }
  }
`;
