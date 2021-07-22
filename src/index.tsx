import "./index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChapterFive from "./pages/ChapterFive";
import ChapterFour from "./pages/ChapterFour";
import ChapterOne from "./pages/ChapterOne";
import ChapterThree from "./pages/ChapterThree";
import ChapterTwo from "./pages/ChapterTwo";
import End from "./pages/End";
import Home from "./pages/Home";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/1">
          <ChapterOne />
        </Route>
        <Route exact path="/2">
          <ChapterTwo />
        </Route>
        <Route exact path="/3">
          <ChapterThree />
        </Route>
        <Route exact path="/4">
          <ChapterFour />
        </Route>
        <Route exact path="/5">
          <ChapterFive />
        </Route>
        <Route exact path="/end">
          <End />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
