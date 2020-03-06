import React, { useEffect, useState } from "react";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import "antd/es/avatar/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";
import grad_cap from "../grad_cap.svg";
import book from "../book.svg";
import tax from "../tax.svg";
import city from "../city.svg";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions";
//import { entriesIntToString } from "../utils/entriesIntToString";
import PostGraduation from "./PostGraduation";


const { Content, Sider } = Layout;

function Dashboard() {
  // const [isCollapsed, setIsCollapsed] = useState({ collapsed: false });
  const [active, setActive] = useState("1");

  // const onCollapse = collapsed => {
  //   console.log(collapsed);
  //   setIsCollapsed({ collapsed });
  // };
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData,
      userInfo: state.userInfo,
      isFetching: state.isFetching
    };
  });

  //let string = entriesIntToString(state.formattedEntryData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  console.log(state.isFetching)

  return  (
    <Layout
      style={{ backgroundColor: "white", marginTop: "2px" }}
      className="dashboard"
    >

      <Sider theme="light">
        <Card
          hoverable={true}
          style={{ width: 200, cursor: "auto" }}
        >
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
              <p style={{ margin: "0px", width: '100%' }}>{state.isFetching ? (<h1>fetching</h1>) : state.userInfo.details[state.userInfo.details.length-1].education}</p>
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
              <p style={{ margin: "0px", width: '100%' }}>{state.isFetching ? (<h1>fetching</h1>) : state.userInfo.details[state.userInfo.details.length-1].major}</p>
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
              <p style={{ margin: "0px", width: '100%' }}>{state.isFetching ? (<h1>fetching</h1>) : state.userInfo.details[state.userInfo.details.length-1].colindex}</p>
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
              <p style={{ margin: "0px", width: '100%' }}>{state.isFetching ? (<h1>fetching</h1>) : state.userInfo.details[state.userInfo.details.length-1].city}</p>
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
          onClick={()=> setActive("1")}
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
          onClick={() => setActive("2")}
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
          onClick={() =>setActive("3")}
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
          onClick={() => setActive("4")}
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
        {active === "1" ? <PostGraduation /> : active ==="2" ? <h1>income</h1> : active ==="3" ? <h1>expenses</h1> : active ==="4" ? <h1>budget</h1> : <h1>not</h1>}
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

// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 80px;
// `;

// const StyledHeading = styled.h1`
//   margin-left: 100px;
// `;

// const DashboardWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 80px;
// `;