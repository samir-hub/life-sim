import React, { useEffect, useState } from "react";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import Tooltip from "antd/es/tooltip";
import "antd/es/tooltip/style/css";
import Empty from "antd/es/empty";
import "antd/es/empty/style/css";
import styled from "styled-components";
import grad_cap from "../assets/grad_cap.svg";
import book from "../assets/book.svg";
import tax from "../assets/tax.svg";
import city from "../assets/city.svg";
import user from "../assets/user.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntryById } from "../actions";
import { fetchEntry } from "../actions";
import PostGraduation from "./PostGraduation";
import Income from "./Income";
import Expenses from "./Expenses";
import Summary from "./Summary";
import Compare from "./Compare";
import DemoModal from "./DemoModal";
import NoDataModal from "./NoDataModal";
import { dashDesktop } from "../data/demos";
import { dashMobile } from "../data/demos";
import useRemoveToken from "../hooks/useRemoveToken";

const { Content, Sider } = Layout;

function Dashboard() {
  const [active, setActive] = useState("1");
  const [isCollapsed, setIsCollapsed] = useState(true);
  // const [data, setData] = useState()
  const date = Date.now();
  useRemoveToken(date);

  const state = useSelector((state) => {
    return {
      currentDetails: state.currentDetails,
      userInfo: state.userInfo,
      isFetchingById: state.isFetchingById,
      isPosting: state.isPosting,
      isEditing: state.isEditing,
    };
  });

  let currentDetailId = localStorage.getItem('currentDetailId');

  let screen = window.screen.width;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntryById(currentDetailId));
    dispatch(fetchEntry());
  }, [dispatch, state.isPosting, state.isEditing, currentDetailId]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Layout
      style={{ backgroundColor: "white", marginTop: "2px" }}
      className="dashboard"
    >
      {state.userInfo &&
        state.userInfo.details &&
        !state.userInfo.details.length && <NoDataModal />}
      {screen > 600 ? (
        <DemoModal
          loStoName={"DashDemo"}
          title={"Dashboard"}
          text={dashDesktop}
        />
      ) : (
        <DemoModal
          loStoName={"DashDemo"}
          title={"Dashboard"}
          text={dashMobile}
        />
      )}
      <Sider
        style={{ transition: "width 3s" }}
        onCollapse={handleCollapse}
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        collapsed={screen < 600 ? !isCollapsed : false}
      >
        {state.isFetchingById ? (
          <Empty
            style={{
              minHeight: "315px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          />
        ) : (
          <StyledCard>
            <Card hoverable={true} style={{ width: 200, cursor: "auto" }}>
              {state.currentDetails && (
                <StyledDiv key={1}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img
                        style={{ height: "30px", marginRight: "10px" }}
                        alt="user outline"
                        src={user}
                      />
                    </div>
                    <p
                      className="dashboard-username"
                      style={{ margin: "0px", fontSize: "25px" }}
                    >
                      {state.currentDetails.user.username}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img
                        style={{ height: "30px", marginRight: "10px" }}
                        alt="graduation cap"
                        src={grad_cap}
                      />
                    </div>
                    <h1 style={{ margin: "0px", width: "100%" }}>
                      {state.currentDetails &&
                        state.currentDetails.education}
                    </h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img
                        style={{ height: "30px", marginRight: "10px" }}
                        alt="book"
                        src={book}
                      />
                    </div>
                    <h1 style={{ margin: "0px", width: "100%" }}>
                      {state.currentDetails &&
                        (state.currentDetails.major === ""
                          ? "H.S. Diploma"
                          : state.currentDetails.major)}
                    </h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img
                        style={{ height: "30px", marginRight: "10px" }}
                        alt="taxes"
                        src={tax}
                      />
                    </div>
                    <h1 style={{ margin: "0px", width: "100%" }}>
                      {state.currentDetails &&
                        state.currentDetails.colindex}
                    </h1>
                    <Tooltip
                      title={
                        "This is the cost of living index. It is a measure of overall affordability. More expensive cities have higher values. The highest possible value is 100."
                      }
                      placement="top"
                    >
                      <Icon type="question-circle" />
                    </Tooltip>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className="icon-wrapper">
                      <img
                        style={{ height: "30px", marginRight: "10px" }}
                        alt="city"
                        src={city}
                      />
                    </div>
                    <h1 style={{ margin: "0px", width: "100%" }}>
                      {state.currentDetails &&
                        state.currentDetails.city}
                    </h1>
                  </div>
                </StyledDiv>
              )}
            </Card>
          </StyledCard>
        )}
        <Menu
          style={{ height: "49vh" }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          selectedKeys={[active]}
        >
          <Menu.Item
            onClick={() => {
              setActive("1");
              setIsCollapsed(!isCollapsed);
            }}
            className="dashboard-menu-items"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "30px 0",
            }}
            key="1"
          >
            <Icon type="rocket" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setActive("2");
              setIsCollapsed(!isCollapsed);
            }}
            className="dashboard-menu-items"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "30px 0",
            }}
            key="2"
          >
            <Icon type="dollar" />
            <span>Income</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setActive("3");
              setIsCollapsed(!isCollapsed);
            }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "30px 0",
            }}
            key="3"
          >
            <Icon type="wallet" />
            <span>Expenses</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setActive("4");
              setIsCollapsed(!isCollapsed);
            }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "30px 0",
            }}
            key="4"
          >
            <Icon type="profile" />
            <span>Summary</span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              setActive("5");
              setIsCollapsed(!isCollapsed);
            }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "30px 0",
            }}
            key="5"
          >
            <Icon type="bar-chart" />
            <span>Compare</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ margin: "0 5px", minWidth: "350px" }}>
        {active === "1" ? (
          <PostGraduation setActive={setActive} />
        ) : active === "2" ? (
          <Income />
        ) : active === "3" ? (
          <Expenses />
        ) : active === "4" ? (
          <Summary setActive={setActive} />
        ) : active === "5" ? (
          <Compare userInfo={state.userInfo} setActive={setActive} />
        ) : (
          <h1>not</h1>
        )}
      </Content>
    </Layout>
  );
}

export default Dashboard;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .dashboard-username {
    text-transform: capitalize;
  }
  .icon-wrapper {
    min-height: 30px;
    min-width: 30px;
    margin-right: 10px;
  }
`;

const StyledCard = styled.div`
  .ant-card {
    .ant-card-body {
      padding: 10px 24px;
    }
  }
`;
