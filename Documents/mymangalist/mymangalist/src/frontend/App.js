import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
        <Route path ="/dashboard">
        <Dashboard/>
      </Route>
      </Route>
    </Switch>
  );
}

export default App;
