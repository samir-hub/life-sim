import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from "./components/Dashboard";
import EntryForm from "./components/EntryForm";
import Home from "./components/Home";
import About from "./components/About";
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
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={WrappedRegister}/>
      <PrivateRoute path="/entryform" component={EntryForm} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
