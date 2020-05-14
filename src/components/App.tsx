import React from "react";

import Calculator from "./Calculator";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <div className="row justify-content-center">
      <div className="col" style={{padding: '0'}}>
        
        <Calculator />
      </div>
    </div>
  );
};

export default App;
