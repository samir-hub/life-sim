import React, { useEffect, useState } from "react";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";
import people_working from "../people_working.png";
import grad_cap from "../grad_cap.svg";
import book from "../book.svg";
import tax from "../tax.svg";
import city from "../city.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions";
import { entriesIntToString } from "../utils/entriesIntToString";

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState({ collapsed: false });

  const onCollapse = collapsed => {
    console.log(collapsed);
    setIsCollapsed({ collapsed });
  };
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData
    };
  });

  let string = entriesIntToString(state.formattedEntryData);

  const dispatch = useDispatch();
  let username = "User 1";

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  return (
    <div className="dashboard">
      {/* <HeaderWrapper className="dashboard-header">
        <StyledHeading>My Dashboard</StyledHeading>
      </HeaderWrapper> */}
      <Sider theme="light">
        <Card
          hoverable={true}
          style={{ width: 200, cursor: "auto" }}
          // cover={<img alt="People working" src={people_working} />}
          // actions={[
          //   <Icon type="setting" key="setting" />,
          //   <Icon type="edit" key="edit" />,
          //   <Icon type="ellipsis" key="ellipsis" />
          // ]}
        >
          {/* <Meta
            avatar={
              <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }

            //title={username}
            //description="You Selected:"
          /> */}
          <StyledDiv key={string.user}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "20px"
              }}
            >
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="graduation cap"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <p style={{ margin: "0px", fontSize: "20px" }}>{username}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="graduation cap"
                src={grad_cap}
              />
              <p style={{ margin: "0px" }}>{string.education}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="book"
                src={book}
              />
              <p style={{ margin: "0px" }}>{string.major}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="ataxes"
                src={tax}
              />
              <p style={{ margin: "0px" }}>{string.state}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="city"
                src={city}
              />
              <p style={{ margin: "0px" }}>{string.city}</p>
            </div>
            {/* <div style={{ display:'flex', alignItems: 'center'}}><img style={{ height:'30px', marginRight: '10px'  }} alt='graduation cap' src={grad_cap}/><p style={{ margin:'0px' }}>{string.col}</p></div> */}
          </StyledDiv>
        </Card>
        <Menu
          style={{ height: "60vh" }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
           <Menu.Item
            className="dashboard-menu-items"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: '30px 0'
            }}
            key="1"
          >
            <Icon type="rocket" />
            <span>Post-Graduation</span>
          </Menu.Item>
          <Menu.Item
            className="dashboard-menu-items"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: '30px 0'
            }}
            key="2"
          >
            <Icon type="dollar" />
            <span>Income</span>
          </Menu.Item>
          <Menu.Item
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: '30px 0'
            }}
            key="3"
          >
            <Icon type="wallet" />
            <span>Expenses</span>
          </Menu.Item>
          <Menu.Item
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center", 
              padding: '30px 0'
            }}
            key="4"
          >
            <Icon type="profile" />
            <span>Budget</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default Dashboard;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
`;

const StyledHeading = styled.h1`
  margin-left: 100px;
`;
