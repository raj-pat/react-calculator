import React, { useState, useEffect } from "react";
import { onButtonClickInterface } from "../Interfaces/functions";

export interface CalcButtonProps {
  innerSymbol: string;
  type: string;
  onButtonClick: onButtonClickInterface;
}

const CalcButton: React.SFC<CalcButtonProps> = (props) => {
  
  return (
    <div className={getClasses()}>
      <button
        className="btn btn-secondary calcBtn"
        style={getStyleObject()}
        onClick={onClickHandler}
      >
        {props.innerSymbol}
      </button>
    </div>
  );

  function onClickHandler() {
    props.onButtonClick(props.innerSymbol, props.type);
  }
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
