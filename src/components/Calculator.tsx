import React from "react";
import CalcButton from "./CalcButton";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Calculator: React.SFC<{}> = () => {
  return (
    <div className="container bg-dark calcOuter">
      <Screen />
      <Buttons />
    </div>
  );
};

export default Calculator;
