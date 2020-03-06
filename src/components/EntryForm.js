import React, { useState } from "react";
import styled from "styled-components";
import Select from "antd/es/select";
import "antd/es/select/style/css";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postFormattedEntry } from "../actions";
import { entriesStringToInt } from "../utils/entriesStringToInt";
import man_planning from "../man_planning.png";
import cities from '../data/cities';

const { Option } = Select;

function EntryForm() {
  const history = useHistory();

  const [userEntry, setUserEntry] = useState({
    education: "",
    major: "",
    state: "",
    city: "",
    col: ""
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    setUserEntry({
      ...userEntry,
      [e.target.name]: e.target.value
    });
  };

  const handlePostEntry = e => {
    e.preventDefault();
    dispatch(postFormattedEntry(entriesStringToInt(userEntry)));
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
      <FormWrapper>
        <form onSubmit={handlePostEntry} className="userentry-form">
          <div className="entryform-select-div">
            <select
              name="education"
              onChange={handleChange}
              value={userEntry.education}
              className="entryform-select"
            >
              <option>Select Your Education Level</option>
              <option>No College</option>
              <option>Community College</option>
              <option>In-State College</option>
              <option>Out-of-State College</option>
            </select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Your Education Level"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >

                      <Option key={1} value={"No College"}>
                      No College
                      </Option>
                      <Option key={1} value={"No College"}>
                      No College
                      </Option>
                      <Option key={1} value={"No College"}>
                      No College
                      </Option>
                      <Option key={1} value={"No College"}>
                      No College
                      </Option>
                      <Option key={1} value={"No College"}>
                      No College
                      </Option>
   
              </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <select
              name="major"
              onChange={handleChange}
              value={userEntry.major}
              className="entryform-select"
            >
              <option>Select Your Major</option>
              <option>Arts and Humanities</option>
              <option>Business</option>
              <option>Education</option>
              <option>Music</option>
              <option>Engineering</option>
              <option>Nursing</option>
              <option>Medicine</option>
              <option>Social Sciences</option>
              <option>Hard Sciences</option>
            </select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a team"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <select
              name="state"
              onChange={handleChange}
              value={userEntry.state}
              className="entryform-select"
            >
              <option>State Income Tax?</option>
              <option>No State Income Tax</option>
              <option>State Income Tax</option>
            </select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a team"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <select
              name="city"
              onChange={handleChange}
              value={userEntry.city}
              className="entryform-select"
            >
              <option>City Size</option>
              <option>Small City</option>
              <option>Medium City</option>
              <option>Large City</option>
              <option>Very Large City</option>
              <option>Immense City</option>
              {/* <option>NYC/SF/Seattle/DC/Oakland/Boston/LA</option> */}
            </select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a team"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            <Icon type="question-circle" />
          </div>

          <div className="entryform-select-div">
            <select
              name="col"
              onChange={handleChange}
              value={userEntry.col}
              className="entryform-select"
            >
              <option>Cost of Living</option>
              <option>Low Cost of Living</option>
              <option>Medium Cost of Living</option>
              <option>High Cost of Living</option>
              <option>Very High Cost of Living</option>
            </select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a team"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {teamsAndIds &&
                  teamsAndIds.map(teams => {
                    return (
                      <Option key={teams.id} value={teams.id}>
                        {teams.name}
                      </Option>
                    );
                  })}
              </Select>
            <Icon type="question-circle" />
          </div>

          <Button
              //onClick={}
              type="primary"
              shape="square"
              //icon="logout"
              size={"default"}
              style={{  }}
            >
              Submit
            </Button>
        </form>
      </FormWrapper>
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
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 70vh;
  .userentry-form {
    display: flex;
    flex-direction: column;
  }
  .entryform-select {
    margin: 30px;
    width: 70%;
  }
  .entryform-select-div {
    width: 100%;
  }
`;
