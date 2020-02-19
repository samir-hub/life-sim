import React, { useEffect } from "react";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
//import Avatar from "antd/es/avatar";
import "antd/es/avatar/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import styled from "styled-components";
import people_working from "../people_working.png";
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
  let username = "User 1";

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <HeaderWrapper className="dashboard-header">
        <StyledHeading>My Dashboard</StyledHeading>
      </HeaderWrapper>
      <Card
        hoverable={true}
        style={{ width: 300, marginLeft: "50px", cursor: 'auto' }}
        cover={<img alt="People working" src={people_working} />}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          // }
          title={username}
          //description="You Selected:"
        />
        <StyledDiv key={string.user}>
          <p>Education Code: {string.education}</p>
          <p>College Major Code: {string.major}</p>
          <p>State Code: {string.state}</p>
          <p>City Code: {string.city}</p>
          <p>Cost of Living Code: {string.col}</p>
        </StyledDiv>
      </Card>
    </div>
  );
}

export default Dashboard;

const StyledDiv = styled.div`
  padding-top: 20px;
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
