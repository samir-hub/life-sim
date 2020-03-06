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
import PostGraduation from "./PostGraduation";

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
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo
    };
  });

  //let string = entriesIntToString(state.formattedEntryData);

  const dispatch = useDispatch();
  let username = "Samir";

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  console.log('state in Dashboard', state)

  return (
    <Layout
      style={{ backgroundColor: "white", marginTop: "2px" }}
      className="dashboard"
    >
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
          {state.userInfo && state.userInfo.details && <StyledDiv key={1}>
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
              <p style={{ margin: "0px", fontSize: "25px" }}>{state.userInfo.username}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px"
              }}
            >
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="graduation cap"
                src={grad_cap}
              />
              <p style={{ margin: "0px", width: '100%' }}>{state.userInfo.details[state.userInfo.details.length-1].education}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px"
              }}
            >
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="book"
                src={book}
              />
              <p style={{ margin: "0px", width: '100%' }}>{state.userInfo.details[state.userInfo.details.length-1].major}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px"
              }}
            >
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="taxes"
                src={tax}
              />
              <p style={{ margin: "0px", width: '100%' }}>{state.userInfo.details[state.userInfo.details.length-1].colindex}</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                style={{ height: "30px", marginRight: "10px" }}
                alt="city"
                src={city}
              />
              <p style={{ margin: "0px", width: '100%' }}>{state.userInfo.details[state.userInfo.details.length-1].city}</p>
            </div>
            {/* <div style={{ display:'flex', alignItems: 'center'}}><img style={{ height:'30px', marginRight: '10px'  }} alt='graduation cap' src={grad_cap}/><p style={{ margin:'0px' }}>{string.col}</p></div> */}
          </StyledDiv>}
        </Card>
        <Menu
          style={{ height: "56vh" }}
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
              padding: "30px 0"
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
              padding: "30px 0"
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
              padding: "30px 0"
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
              padding: "30px 0"
            }}
            key="4"
          >
            <Icon type="profile" />
            <span>Budget</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ margin: "0 16px" }}>
        <PostGraduation />
      </Content>
    </Layout>
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

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
`;
