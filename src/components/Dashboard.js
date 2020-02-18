import React, { useEffect } from "react";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions";
import { entriesIntToString } from "../utils/entriesIntToString";

const { Meta } = Card;

function Dashboard() {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData
    };
  });

  let string = entriesIntToString(state.formattedEntryData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>

      <div key={string.user}>
        <p>Education Code: {string.education}</p>
        <p>College Major Code: {string.major}</p>
        <p>State Code: {string.state}</p>
        <p>City Code: {string.city}</p>
        <p>Cost of Living Code: {string.col}</p>
      </div>
    </div>
  );
}

export default Dashboard;
