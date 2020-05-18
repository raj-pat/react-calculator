import React, { useState } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { onButtonClickInterface } from "../Interfaces/functions";
import Route from "./RouteButtons";

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
      let { output, isFloat, previous, currMath, resetScreenNext } = newState;

      switch (type) {
        case "digit":
          if (newState.output.length === Calculator.operandLimit) {
            if (!resetScreenNext) return;
          }
          if (innerSymbol === ".") {
            if (newState.isFloat) break;
            else newState.isFloat = true;
          }

          if (
            newState.output === "0" ||
            newState.output === "-0" ||
            newState.resetScreenNext
          ) {
            if (newState.resetScreenNext) {
              newState.resetScreenNext = false;
            }

            newState.output =
              newState.output === "-0" ? "-" + innerSymbol : innerSymbol;
          } else {
            newState.output = newState.output.toString() + innerSymbol;
          }

          break;
        case "function":
          switch (innerSymbol) {
            case "AC":
              newState = {
                output: "0",
                isFloat: false,
                previous: "",
                currMath: "",
                resetScreenNext: false,
              };
              break;

            case "+/-":
              if (newState.output[0] === "-") {
                newState.output = newState.output.slice(1);
              } else {
                newState.output = "-" + newState.output;
              }
              break;
            case "%":
              this.onButtonClick("%", "math");
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
      <React.Fragment>
        <Screen screenOutput={this.state.output} />
        <Buttons onButtonClick={this.onButtonClick} />
      </React.Fragment>
    );
  }
}

const compute = (operand1: string, math: string, operand2: string): string => {
  let result;
  switch (math) {
    case "":
      return operand2;
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      return result.toString();
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      return result.toString();
    case "=":
      return operand2;
    case "%":
      result = parseFloat(operand2) / 100;
      return result.toString().slice(-9);
    case "÷":
      result = parseFloat(operand1) / parseFloat(operand2);
      return result.toString().slice(0, 10);
    case "x":
      result = parseFloat(operand1) * parseFloat(operand2);
      let resultLength = result.toString().length;
      if (resultLength > 6) {
        result = result / 10 ** (resultLength - 1);
        result =
          result.toString().slice(0, 5) + "e" + (resultLength - 1).toString();
      }
      return result.toString();
  }

  return "";
};

export default Calculator;
