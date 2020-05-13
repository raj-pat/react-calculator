import React from "react";

export interface CalcButtonProps {
  innerSymbol: string;
  type: string;
}

const CalcButton: React.SFC<CalcButtonProps> = (props) => {
  //btn inside
  //isSymbol or isDigit
  return (
    <button className={getClasses()} style={getStyleObject()}>
      {props.innerSymbol}
    </button>
  );
  function getClasses() {
    if (
      props.innerSymbol === "0" ||
      props.innerSymbol === "." ||
      props.innerSymbol === "="
    ) {
      let col: string;
      if (props.innerSymbol === "0") {
        col = "-6";
      } else {
        col = "-3";
      }
      return "calcBtn btn m-1 col" + col;
    } else {
      return "calcBtn btn m-1 col";
    }
  }
  function getStyleObject() {
    let color: string;
    if (props.type === "function") {
      return {
        backgroundColor: "darkgrey",
      };
    } else if (props.type === "math") {
      return {
        backgroundColor: "orange",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "grey",
        color: "white",
      };
    }
  }
};

export default CalcButton;
