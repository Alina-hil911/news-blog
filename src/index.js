import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Topbar from "./components/Topbar";
import { CurrentUserProvider } from "./contexts/currentUser";
const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar></Topbar>
        <Routes></Routes>
      </Router>
    </CurrentUserProvider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
