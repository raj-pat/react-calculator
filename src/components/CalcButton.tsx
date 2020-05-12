import React from "react";
export interface CalcButtonProps {
  innerSymbol: string;
}

const CalcButton: React.SFC<CalcButtonProps> = (props) => {
  return <button style={{ borderRadius: "25px" }}>{props.innerSymbol}</button>;
};

export default CalcButton;
