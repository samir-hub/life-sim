import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import styled from "styled-components";
import about_cover from "../assets/about_cover.png";
import samir from "../assets/samir.jpg";
import AboutCard from "./AboutCard";

const { Meta } = Card;

function About() {
  return (
    <AboutWrapper>
      <HeroWrapper>
        <img className="about-cover" alt="mypath-logo" src={about_cover}></img>
      </HeroWrapper>
      <div className="about-content">
        <div className="about-content-left">
          <div className="about-paragraphs">
            <p className="about-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p className="about-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <AboutCard/>
          </div>
        </div>
      
      </div>
    </AboutWrapper>
  );
}

export default About;

const HeroWrapper = styled.div`
  background: #f38704;
  width: 100%;
  height: 25vh;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  .about-cover {
    max-width: 15%;
  }
`;

const AboutWrapper = styled.div`
  .about-heading {
    font-size: 2rem;
    text-align: left;
    margin: 0; 
  }
  .about-content {
    display: flex;
    justify-content: space-between;
    align-content: center;  
  }
  .about-content-left {
    display: flex;
    flex-direction: column;
    justify-items: center; 
    width: 100%;
    margin: 20px;
    .about-text {
      text-align: left;
      width: 30%; 
    }
    .about-card {
    }
    .about-paragraphs {
        display: flex; 
        justify-content: space-evenly; 
    }
  }
`;
