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
import Tooltip from "antd/es/tooltip";
import "antd/es/tooltip/style/css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postFormattedEntry } from "../actions";
//import { entriesStringToInt } from "../utils/entriesStringToInt";
import man_planning from "../assets/man_planning.png";
import newCities from "../data/newCities";
import majors from "../data/majors";

const { Option } = Select;

function EntryForm() {
  const id = localStorage.getItem("userid");

  const history = useHistory();

  const [userEntry, setUserEntry] = useState({
    education: "",
    major: "",
    avgmajor: "",
    lowmajor: "",
    highmajor: "",
    city: "",
    colindex: "",
    rent: "",
    avgwage: "",
    rentindex: "",
    colplusrentindex: "",
    groceriesindex: "",
    restaurantpriceindex: "",
    groceries: "",
    restaurant: "",
    studentLoans: "",
    utilities: "",
    premiums: "",
    medExpenses: "",
    carPayment: "",
    insurance: "",
    gas: "",
    carMaintenance: "",
    internet: "",
    cell: "",
    tv: "",
    clothing: "",
    entertainment: "",
    pOther: ""
  });

  function onChangeOne(value) {
    let loansValue =
      value === "Community College" || value === "No College" ? 0.0 : 271.0;

    let noCollegeAvgMajor = value === "No College" ? 35256 : "";

    setUserEntry({
      ...userEntry,
      avgmajor: noCollegeAvgMajor,
      education: value,
      studentLoans: loansValue,
      utilities: 100.0,
      premiums: 50.0,
      medExpenses: 20.0,
      carPayment: 300.0,
      insurance: 150.0,
      gas: 100.0,
      carMaintenance: 20.0,
      internet: 62.77,
      cell: 114.0,
      tv: 50.0,
      clothing: 30.0,
      entertainment: 50.0,
      pOther: 0.0
    });
  }

  function onChangeThree(value) {
    let result = newCities.filter(city => city.city === value);

    let groceriesPrice = 471.34 * (result[0].groceriesindex / 100);
    let formattedGroceries = parseFloat(groceriesPrice.toFixed(2));

    let restaurantPrice = 48.56 * (result[0].restaurantpriceindex / 100);
    let formattedRestaurant = parseFloat(restaurantPrice.toFixed(2));

    setUserEntry({
      ...userEntry,
      city: value,
      colindex: result[0].colindex,
      rent: result[0].avgrent,
      avgwage: result[0].avgwage,
      rentindex: result[0].rentindex,
      colplusrentindex: result[0].colplusrentindex,
      groceriesindex: result[0].groceriesindex,
      restaurantpriceindex: result[0].restaurantpriceindex,
      groceries: formattedGroceries,
      restaurant: formattedRestaurant
    });
  }

  function onChangeFour(value) {
    let result = majors.filter(major => major.major === value);
    setUserEntry({
      ...userEntry,
      major: value,
      avgmajor: result[0].avgmajor,
      lowmajor: result[0].lowmajor,
      highmajor: result[0].highmajor
    });
  }

  const dispatch = useDispatch();

  const handlePostEntry = e => {
    e.preventDefault();
    dispatch(postFormattedEntry(id, userEntry));
    history.push("/dashboard");
  };

  const collegeText = (
    <span>
      Do you plan on attending college? If so, it is good to know that not all
      colleges are created equal. Not taking into account financial aid and
      scholarships, the list to the left is sorted by cost in ascending order.
      Although cost is important, attending the right college can be a great
      investment.
    </span>
  );
  const majorText = (
    <span>
      When choosing a major, think about your interests, values passions and
      abilities.
    </span>
  );
  const cityText = (
    <span>
      Cost of living varies by city. For example, average rent is usually higher
      in densely populated areas.
    </span>
  );

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
        <div className="entryform-mobile-div">
          <img
            className="entryform-mobile-image"
            src={man_planning}
            alt="man planning"
          ></img>
          <h3 className="entryform-mobile-text">
            Enter your information below to get started:
          </h3>
        </div>
        <form onSubmit={handlePostEntry} className="userentry-form">
          <div className="entryform-select-div">
            <Select
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="College Plans?"
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
            <Tooltip title={collegeText} placement="right">
              <Icon type="question-circle" />
            </Tooltip>
          </div>

          <div className="entryform-select-div">
            <Select
              disabled={userEntry.education === "No College" ? true : false}
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="What Major?"
              optionFilterProp="children"
              onChange={onChangeFour}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {majors.map(major => {
                let isCC = false;
                if (userEntry.education === "Community College") {
                  isCC = true;
                }
                return (
                  <Option
                    disabled={
                      isCC &&
                      (major.id === "4" ||
                        major.id === "5" ||
                        major.id === "9" ||
                        major.id === "11" ||
                        major.id === "15" ||
                        major.id === "16" ||
                        major.id === "21" ||
                        major.id === "26" ||
                        major.id === "36" ||
                        major.id === "41")
                        ? true
                        : false
                    }
                    key={major.id}
                    value={major.major}
                  >
                    {major.major}
                  </Option>
                );
              })}
            </Select>
            <Tooltip title={majorText} placement="right">
              <Icon type="question-circle" />
            </Tooltip>
          </div>

          <div className="entryform-select-div">
            <Select
              className="entryform-select"
              showSearch
              style={{ width: 300 }}
              placeholder="What City?"
              optionFilterProp="children"
              onChange={onChangeThree}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {newCities.map(city => {
                return (
                  <Option key={city.id} value={city.city}>
                    {city.city}
                  </Option>
                );
              })}
            </Select>
            <Tooltip title={cityText} placement="right">
              <Icon type="question-circle" />
            </Tooltip>
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
  .entryform-image {
    height: 680px;
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  .ant-select-selection__placeholder {
    color: #696969;
  }

  .entryform-card {
    /* width: 40%;
  height: 70vh; */
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    @media only screen and (max-width: 600px) {
      width: 90%;
      margin-top: 20px;
      height: 80vh;
    }
    .userentry-form {
      display: flex;
      flex-direction: column;
    }
    .entryform-select {
      width: 100%;
      margin: 50px;
    }
    .entryform-select-div {
      width: 100%;
      @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        height: 100px;
        /* .anticon-question-circle {
          display: none;
        } */
      }
    }
    .entryform-mobile-div {
      display: none;
      @media only screen and (max-width: 600px) {
        display: inline-block;
        width: 100%;
        margin-top: 15px;
      }
      .entryform-mobile-image {
        height: 100px;
        display: inline-block;
        margin-bottom: 10px;
      }
      .entryform-mobile-text {
        width: 180px;
        display: inline-block;
        font-size: 16px;
      }
    }
  }
`;
