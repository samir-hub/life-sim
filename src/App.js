import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EntryForm from "./components/EntryForm";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import MobileHeaderNoAuth from './components/mobile/MobileHeaderNoAuth';
import WrappedRegister from "./components/Register";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MobileHeaderNoAuth/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={WrappedRegister}/>
      <Route path="/entryform" component={EntryForm} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
