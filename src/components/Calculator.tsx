import React, { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { onButtonClickInterface } from "../Interfaces/functions";

const Calculator: React.SFC<{}> = () => {
  const [output, setOutput] = useState("0");
  const [isFloat, setIsFloat] = useState(false);
  const [previous, setPrevious] = useState("");
  const [currMath, setCurrMath] = useState("");
  const [resetScreenNext, setResetScreenNext] = useState(false);
  const operandLimit = 10;

  let onButtonClick: onButtonClickInterface = (innerSymbol, type) => {
    if (output.length === operandLimit) {
      return;
    }

    switch (type) {
      case "digit":
        if (resetScreenNext) {
          setOutput("0");
          console.log(output);
          setResetScreenNext(false);
        }

        if (innerSymbol === ".") {
          if (isFloat) break;
          else setIsFloat(true);
        }

        if (output === "0") {
          setOutput(innerSymbol);
        } else {
          setOutput(output.toString() + innerSymbol);
        }
        break;
      case "compute":
        break;
      case "math":
        setOutput(compute(previous, currMath, output));
        setPrevious(output);
        setResetScreenNext(true);
        setCurrMath(innerSymbol);
        break;
    }
  };
  return (
    <div className="container bg-dark calcOuter">
      <Screen screenOutput={output} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
};

const compute = (operand1: string, math: string, operand2: string): string => {
  switch (math) {
    case "":
      return operand2;
    case "+":
      const result = parseFloat(operand1) + parseFloat(operand2);
      return result.toString();
  }
  return "";
};

export default Calculator;
