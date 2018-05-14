import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,
         Route,
         Switch } from "react-router-dom";

import App from "../containers/App";
import MainNav from "../containers/MainNav";
import Login from "../containers/Login";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <MainNav />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/my-runs" component={App} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default Root;