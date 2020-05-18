import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Calculator from "./Calculator";
import RouteButtons from "./RouteButtons";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <div className="row justify-content-center">
      <div className="col" style={{ padding: "0" }}>
        <div className="container bg-dark calcOuter">
          <BrowserRouter>
            <RouteButtons />
            <Switch>
              <Route path="/history">
                <h1>history here</h1>
              </Route>
              <Route path="/">
                <Calculator />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
