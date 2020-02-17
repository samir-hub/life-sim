import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EntryForm from "./components/EntryForm";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import WrappedRegister from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/register" component={WrappedRegister}/>
      <Route path="/entryform/:userid" component={EntryForm} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
