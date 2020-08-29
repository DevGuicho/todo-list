import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Boards from "../containers/Boards";
import Layout from "../components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Boards} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
