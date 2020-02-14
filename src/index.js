import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"

import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"

import thunk from "redux-thunk"

import "./index.css"
import App from "./App"

import reducer from "./reducers/"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
serviceWorker.unregister();
