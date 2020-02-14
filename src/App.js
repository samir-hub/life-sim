import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EntryForm from "./components/EntryForm";

function App() {
  return (
    <div className="App">
      <Route path="/entryform" component={EntryForm} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
