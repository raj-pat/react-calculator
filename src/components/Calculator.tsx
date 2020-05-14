import React, { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { onButtonClickInterface } from "../Interfaces/functions";

const Calculator: React.SFC<{}> = () => {
  let [output, setOutput] = useState("0");
  const [isFloat, setIsFloat] = useState(false);
  const [previous, setPrevious] = useState(0)
  let onButtonClick: onButtonClickInterface = (innerSymbol, type) => {
    if (output.length === 10) {
      return;
    }
    switch (type) {
      case "digit":
        if (innerSymbol === ".") {
          if (isFloat) break;
          else setIsFloat(true);
        }
        if (output === "0") {
          setOutput(innerSymbol);
        } else {
          setOutput(output.toString() + innerSymbol);
        }
      case "math":
        
    }
  };

  return (
    <div className="container bg-dark calcOuter">
      <Screen screenOutput={output} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
};

export default Calculator;
