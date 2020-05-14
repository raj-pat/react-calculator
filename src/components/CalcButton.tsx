import React from "react";

export interface CalcButtonProps {
  innerSymbol: string;
  type: string;
}

const CalcButton: React.SFC<CalcButtonProps> = (props) => {
  //btn inside
  //isSymbol or isDigit
  return (
    <div className={getClasses()}>
      <button className="btn btn-secondary calcBtn" style={getStyleObject()}>
        {props.innerSymbol}
      </button>
    </div>
  );

  function getClasses() {
    if (
      props.innerSymbol === "0" ||
      props.innerSymbol === "." ||
      props.innerSymbol === "="
    )
      return "btnRow col" + (props.innerSymbol === "0" ? "-6" : "-3");
    else return "btnRow col-3";
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
      if (props.innerSymbol === "0") {
        return {
          backgroundColor: "grey",
          color: "white",
          width: "110%",
          borderRadius: "50px",
        };
      }
      return {
        backgroundColor: "grey",
        color: "white",
      };
    }
  }
};

export default CalcButton;
