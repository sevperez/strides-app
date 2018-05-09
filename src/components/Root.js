import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,
         Route,
         Redirect,
         Switch } from "react-router-dom";

import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={ () => ( <Redirect to="/my-runs" /> ) }/>
        <Route exact path="/my-runs/:sort/:reverse" component={App} />
        <Route exact path="/my-runs/:sort" component={App} />
        <Route exact path="/my-runs" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;