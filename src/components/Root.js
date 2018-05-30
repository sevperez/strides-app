import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,
         Route,
         Switch } from "react-router-dom";

import App from "../containers/App";
import MainNav from "../containers/MainNav";
import Footer from "./Footer";
import Login from "../containers/Login";

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="page-wrapper">
      <div className="wrapper">
        <MainNav />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/my-runs" component={App} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  </Provider>
);

export default Root;