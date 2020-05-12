import React from "react";
import CalcButton from "./CalcButton";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return <CalcButton innerSymbol="+"></CalcButton>;
};

export default App;
