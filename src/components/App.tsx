import React from "react";

import Calculator from "./Calculator";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <div className="row justify-content-center">
      <div className="col self-align-center m-5 calcOuter">
        
        <Calculator />
      </div>
    </div>
  );
};

export default App;
