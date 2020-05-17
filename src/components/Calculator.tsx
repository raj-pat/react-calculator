import React, { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { onButtonClickInterface } from "../Interfaces/functions";

interface CalculatorStateInterface {
  output: string;
  isFloat: boolean;
  previous: string;
  currMath: string;
  resetScreenNext: boolean;
}

class Calculator extends React.Component<{}, CalculatorStateInterface> {
  static operandLimit: number = 10;

  constructor(props: any) {
    super(props);
    this.state = {
      output: "0",
      isFloat: false,
      previous: "",
      currMath: "",
      resetScreenNext: false,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(innerSymbol: string, type: string): void {
    this.setState((state, props) => {
      let newState = { ...state };

      if (newState.output.length === Calculator.operandLimit) {
        return;
      }

      switch (type) {
        case "digit":
          if (innerSymbol === ".") {
            if (newState.isFloat) break;
            else newState.isFloat = true;
          }

          if (newState.output === "0" || newState.resetScreenNext) {
            if (newState.resetScreenNext) {
              newState.resetScreenNext = false;
            }
            newState.output = innerSymbol;
          } else {
            newState.output = newState.output.toString() + innerSymbol;
          }

          break;
        case "math":
          const newOutput = compute(
            newState.previous,
            newState.currMath,
            newState.output
          );
          newState.previous = newOutput;
          newState.resetScreenNext = true;
          newState.currMath = innerSymbol;
          newState.output = newOutput;
          break;
        case "compute":
          newState.output = compute(
            newState.previous,
            newState.currMath,
            newState.output
          );
          break;
      }
      return newState;
    });
  }

  render() {
    return (
      <div className="container bg-dark calcOuter">
        <Screen screenOutput={this.state.output} />
        <Buttons onButtonClick={this.onButtonClick} />
      </div>
    );
  }

  // let onButtonClick: onButtonClickInterface = (innerSymbol, type) => {

  //

  //   switch (type) {
  //     case "digit":

  //       if (innerSymbol === ".") {
  //         if (isFloat) break;
  //         else isFloat = true;
  //       }

  //       if (newOutput === "0" || resetScreenNext) {
  //         if (resetScreenNext) {
  //           resetScreenNext = false;
  //         }
  //         setOutput(innerSymbol);
  //       } else {
  //         setOutput(output.toString() + innerSymbol);
  //       }
  //       break;
  //     case "compute":
  //       break;
  //     case "math":
  //       console.log(previous);
  //
  //       break;
  //   }
  // };
}

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
