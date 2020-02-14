import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postEntry } from "../actions";

function EntryForm() {
  const [userEntry, setUserEntry] = useState({
    education: "",
    major: "",
    state: "",
    city: "",
    col: ""
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    setUserEntry({
      ...userEntry,
      [e.target.name]: e.target.value
    });
  };

  const handlePostEntry = e => {
    e.preventDefault();
    dispatch(postEntry(userEntry));
  };

  console.log("user entry in entry form", userEntry);

  return (
    <div>
      <h1>Enter Your Info: </h1>

      <form onSubmit={handlePostEntry} className="userentry-form">

        <select name="education" onChange={handleChange} value={userEntry.education}>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>

        <select name="major" onChange={handleChange} value={userEntry.major}>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>

        <select name="state" onChange={handleChange} value={userEntry.state}>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>
        <select name="city" onChange={handleChange} value={userEntry.city}>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>

        <select name="col" onChange={handleChange} value={userEntry.col}>
          <option>No College</option>
          <option>Community College</option>
          <option>In-State College</option>
          <option>Out-of-State College</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default EntryForm;
