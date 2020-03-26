import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalFeed from "./pages/GlobalFeed";
import Article from "./pages/Article";
import Auth from "./pages/Auth";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed}></Route>
      <Route path="/articles/:slug" component={Article}></Route>
      <Route path="/login" component={Auth}></Route>
    </Switch>
  );
};
