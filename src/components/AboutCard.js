import React from "react";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import samir from "../assets/samir.jpg";

const { Meta } = Card;

function AboutCard() {
  return (
    <Card
      className="about-card"
      style={{ width: 300, minHeight: 482 }}
      cover={<img alt="example" src={samir} />}
      actions={[
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/samir-hub"
        >
          <Icon type="github" key="github" />
        </a>,
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/samir-hub/"
        >
          <Icon type="linkedin" key="linkedin" />
        </a>,
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/samirlilienfeld"
        >
          <Icon type="twitter" key="twitter" />
        </a>
      ]}
    >
      <Meta
        title="Samir Lilienfeld"
        description="Samir Lilienfeld is the creator of MyPath. He specializes in React and building RESTful APIs."
      />
    </Card>
  );
}

export default AboutCard;
