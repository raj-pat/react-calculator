import React from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { onButtonClickInterface } from "../Interfaces/functions";

let onButtonClick: onButtonClickInterface = (innerSymbol, type) => {
  console.log(innerSymbol);
};

const Calculator: React.SFC<{}> = () => {
  return (
    <div className="container bg-dark calcOuter">
      <Screen screenOutput={0} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
};

export default Calculator;
