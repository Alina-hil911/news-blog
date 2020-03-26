import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalFeed from "./pages/GlobalFeed";
import Article from "./pages/Article";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed}></Route>
      <Route exact path="/articles/:slug" component={Article}></Route>
    </Switch>
  );
};
