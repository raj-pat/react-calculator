import React from "react";

export interface CalcButtonProps {
  innerSymbol: string;
}

const CalcButton: React.SFC<CalcButtonProps> = (props) => {
  return (
    <button className="calcBtn btn btn-secondary m-1 ">
      {props.innerSymbol}
    </button>
  );
};

export default CalcButton;
