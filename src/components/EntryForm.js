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
    <div
      style={{
        background: "#fff",
        padding: 24,
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>Enter Your Info: </h1>

      <form
        style={{ width: "20%" }}
        onSubmit={handlePostEntry}
        className="userentry-form"
      >
        <input
          placeholder="Education"
          name="education"
          type="text"
          value={userEntry.education}
          onChange={handleChange}
        />

        <input
          placeholder="Major"
          name="major"
          value={userEntry.major}
          onChange={handleChange}
        />

        <input
          placeholder="State Income Tax?"
          name="state"
          value={userEntry.state}
          onChange={handleChange}
        />

        <input
          placeholder="City Size"
          name="city"
          value={userEntry.city}
          onChange={handleChange}
        />

        <input
          placeholder="Cost of Living"
          name="col"
          value={userEntry.col}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
export default EntryForm;
