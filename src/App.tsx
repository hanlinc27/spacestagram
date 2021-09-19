import * as React from "react";
import { SWRConfig } from "swr";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

const defaultFetcher = (
  input: RequestInfo,
  init?: RequestInit
): Promise<unknown> =>
  fetch(input, init)
    .then((res) => res.json())
    .then(({ payload }) => payload);

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
