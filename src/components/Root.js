import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router,
         Route,
         Redirect,
         Switch } from "react-router-dom";

import App from "./App";
import MainNav from "../containers/MainNav";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <MainNav />
      <Router>
        <Switch>
          <Route exact path="/" render={ () => ( <Redirect to="/my-runs" /> ) }/>
          <Route exact path="/my-runs" component={App} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default Root;