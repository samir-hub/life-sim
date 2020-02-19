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
import grad_cap from '../grad_cap.svg'
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
      <Sider
        theme="light"
        collapsible
        collapsed={isCollapsed.collapsed}
        onCollapse={onCollapse}
      >
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
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={username}
            //description="You Selected:"
          />
          <StyledDiv key={string.user}>
            <img style={{ height:'30px' }} alt='graduation cap' src={grad_cap}/><p>{string.education}</p>
            <img style={{ height:'30px' }} alt='graduation cap' src={grad_cap}/><p>{string.major}</p>
            <img style={{ height:'30px' }} alt='graduation cap' src={grad_cap}/><p>{string.state}</p>
            <img style={{ height:'30px' }} alt='graduation cap' src={grad_cap}/><p>{string.city}</p>
            <img style={{ height:'30px' }} alt='graduation cap' src={grad_cap}/><p>{string.col}</p>
          </StyledDiv>
        </Card>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default Dashboard;

const StyledDiv = styled.div`
  padding-top: 20px;
  display: flex;
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
