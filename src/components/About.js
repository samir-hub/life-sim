import React from "react";
import styled from "styled-components";
import about_cover from "../assets/about_cover.png";
import AboutCard from "./AboutCard";

function About() {
  return (
      <AboutWrapper>
        <HeroWrapper>
          <img
            className="about-cover"
            alt="mypath-logo"
            src={about_cover}
          ></img>
        </HeroWrapper>
        <div className="about-content">
          <p className="about-text">
            <span className="about-span">MyPath is </span>eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p className="about-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
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
  .about-cover {
    max-width: 10%;
  }
`;

const AboutWrapper = styled.div`
  .about-content {
    margin: 20px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    .about-span {
        color: #f38704;
        font-size: 40px; 
    }
    .about-text {
      width: 30%;
      text-align: left; 
      font-weight: bold; 
      font-size: 16px;  
    }
  }
`;
