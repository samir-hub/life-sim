import React, { useState } from "react";
import styled from "styled-components";
import Select from "antd/es/select";
import "antd/es/select/style/css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postFormattedEntry } from "../actions";
import { entriesStringToInt } from "../utils/entriesStringToInt";
import man_planning from "../man_planning.png";

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
        <select
          name="education"
          onChange={handleChange}
          value={userEntry.education}
        >
          <option>Select Your Education Level</option>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>

        <select name="major" onChange={handleChange} value={userEntry.major}>
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

        <select name="state" onChange={handleChange} value={userEntry.state}>
          <option>State Income Tax?</option>
          <option>No State Income Tax</option>
          <option>State Income Tax</option>
        </select>
        <select name="city" onChange={handleChange} value={userEntry.city}>
          <option>City Size</option>
          <option>Small City</option>
          <option>Medium City</option>
          <option>Large City</option>
          <option>Very Large City</option>
          <option>Immense City</option>
          <option>NYC/SF/Honolulu/Seattle/DC/Oakland/Boston/LA</option>
        </select>

        <select name="col" onChange={handleChange} value={userEntry.col}>
          <option>Cost of Living</option>
          <option>Low Cost of Living</option>
          <option>Medium Cost of Living</option>
          <option>High Cost of Living</option>
          <option>Very High Cost of Living</option>
        </select>

        <button>Submit</button>
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
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;