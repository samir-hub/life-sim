import React, { useState } from "react";
import styled from "styled-components";
import Select from "antd/es/select";
import "antd/es/select/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postFormattedEntry } from "../actions";
//import { entriesStringToInt } from "../utils/entriesStringToInt";
import man_planning from "../man_planning.png";
import cities from "../data/cities";

const { Option } = Select;

function EntryForm() {

  const id = localStorage.getItem('userid')

  const history = useHistory();

  const [userEntry, setUserEntry] = useState({
    education: "",
    major: "",
    city: "",
    colindex: "",
    rentindex: "",
    colplusrentindex: "",
    groceriesindex: "",
    restaurantpriceindex: "",
    localpurchasingpowerindex: ""
  });

  function onChangeOne(value) {
    setUserEntry({
      ...userEntry,
      education: value
    });
  }

  function onChangeTwo(value) {
    setUserEntry({
      ...userEntry,
      major: value
    });
  }

  function onChangeThree(value) {
    let result = cities.filter(city => city.city === value);
    setUserEntry({
      ...userEntry,
      city: value,
      colindex: result[0].colindex,
      rentindex: result[0].rentindex,
      colplusrentindex: result[0].colplusrentindex,
      groceriesindex: result[0].groceriesindex,
      restaurantpriceindex: result[0].restaurantpriceindex,
      localpurchasingpowerindex: result[0].localpurchasingpowerindex
    });
  }

  const dispatch = useDispatch();

  const handlePostEntry = e => {
    e.preventDefault();
    dispatch(postFormattedEntry(id, userEntry));
    history.push("/dashboard");
  };
  
  return (
    <ComponentWrapper>
      <ImageWrapper>
        <img
          className="entryform-image"
          alt="man planning"
          src={man_planning}
        />
      </ImageWrapper>
      <Card className="entryform-card">
        <form onSubmit={handlePostEntry} className="userentry-form">
          <div className="entryform-select-div">
            <Select
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="Select Your Education Level"
              optionFilterProp="children"
              onChange={onChangeOne}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key={1} value={"No College"}>
                No College
              </Option>
              <Option key={2} value={"Community College"}>
                Community College
              </Option>
              <Option key={3} value={"In-State College"}>
                In-State College
              </Option>
              <Option key={4} value={"Out-of-State College"}>
                Out-of-State College
              </Option>
            </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <Select
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="Select Your Major"
              optionFilterProp="children"
              onChange={onChangeTwo}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option key={1} value={"Arts and Humanities"}>
                Arts and Humanities
              </Option>
              <Option key={2} value={"Business"}>
                Business
              </Option>
              <Option key={1} value={"Education"}>
                Education
              </Option>
              <Option key={1} value={"Music"}>
                Music
              </Option>
              <Option key={1} value={"Engineering"}>
                Engineering
              </Option>
              <Option key={1} value={"Nursing"}>
                Nursing
              </Option>
              <Option key={1} value={"Medicine"}>
                Medicine
              </Option>
              <Option key={1} value={"Social Sciences"}>
                Social Sciences
              </Option>
              <Option key={1} value={"Hard Sciences"}>
                Hard Sciences
              </Option>
            </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <Select
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="Select Your City"
              optionFilterProp="children"
              onChange={onChangeThree}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {cities.map(city => {
                return (
                  <Option key={city.id} value={city.city}>
                    {city.city}
                  </Option>
                );
              })}
            </Select>
            <Icon type="question-circle" />
          </div>

          <Button
            //onClick={}
            type="primary"
            shape="round"
            //icon="logout"
            size={"default"}
            style={{}}
            htmlType="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </ComponentWrapper>
  );
}
export default EntryForm;

const ImageWrapper = styled.div`
  .entryform-image {
    height: 680px;
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  .entryform-card {
    /* width: 40%;
  height: 70vh; */
    display: flex;
    flex-direction: column;
    align-content: space-evenly;

    .userentry-form {
      display: flex;
      flex-direction: column;
    }
    .entryform-select {
      width: 70%;
      margin: 50px;
    }
    .entryform-select-div {
      width: 100%;
    }
  }
`;


