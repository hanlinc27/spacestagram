import * as React from "react";
import { SWRConfig } from "swr";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

const defaultFetcher = async (
  input: RequestInfo,
  init: RequestInit,
) => {
  const result = await fetch(input, init);
  return result.json();
};

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: defaultFetcher,
      }}
    >
      <Router>
        <Route component={Home} />
      </Router>
    </SWRConfig>
  );
};

export default App;
