import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Calculator from "./Calculator";
import RouteButtons from "./RouteButtons";
import History, { HistoryProps } from "./History";
import { postDataToHistInterface } from "../Interfaces/functions";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const [historyObj, setHistoryObj] = useState<Array<{ history: string }>>([
    { history: "No Content" },
  ]);
  function postDataToHist(obj: string): void {
    let newHistoryObj = [...historyObj];
    newHistoryObj.push({ history: obj });

    setHistoryObj(newHistoryObj);

    console.log(newHistoryObj);
  }
  return (
    <div className="row justify-content-center">
      <div className="col" style={{ padding: "0" }}>
        <div className="container bg-dark calcOuter">
          <BrowserRouter>
            <RouteButtons />
            <Switch>
              <Route path="/history">
                <History content={historyObj} />
              </Route>
              <Route path="/">
                <Calculator postDataToHist={postDataToHist} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
