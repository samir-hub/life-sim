import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntry } from "../actions";
import { entriesIntToString } from '../utils/entriesIntToString';

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

  console.log('State in Dashboard', state);
  console.log(string)
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

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
