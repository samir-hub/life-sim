import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions";

function Dashboard() {
  const state = useSelector(state => {
    return {
      formattedEntryData: state.formattedEntryData
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  console.log('State in Dashboard', state);
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      {state.formattedEntryData.length > 0 &&
        state.formattedEntryData.map(entry => {
          return (
            <div key={entry.user}>
              <p>Education Code: {entry.education}</p>
              <p>College Major Code: {entry.major}</p>
              <p>State Code: {entry.state}</p>
              <p>City Code: {entry.city}</p>
              <p>Cost of Living Code: {entry.col}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Dashboard;
