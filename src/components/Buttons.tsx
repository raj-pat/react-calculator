import React from "react";
import CalcButton from "./CalcButton";

export interface ButtonsProps {}

const Buttons: React.SFC<ButtonsProps> = () => {
  return (
    <div className="row">
      <div className="col" style={{padding:'0'}}>
        <div className="container btnContainer">
          <div className="row btnRow ">
            <CalcButton innerSymbol="AC" type="function" />
            <CalcButton innerSymbol="+/-" type="function" />
            <CalcButton innerSymbol="%" type="function" />
            <CalcButton innerSymbol="÷" type="math" />
          </div>
          <div className="row btnRow ">
            <CalcButton innerSymbol="7" type="digit" />
            <CalcButton innerSymbol="8" type="digit" />
            <CalcButton innerSymbol="9" type="digit" />
            <CalcButton innerSymbol="x" type="math" />
          </div>
          <div className="row btnRow ">
            <CalcButton innerSymbol="4" type="digit" />
            <CalcButton innerSymbol="5" type="digit" />
            <CalcButton innerSymbol="6" type="digit" />
            <CalcButton innerSymbol="-" type="math" />
          </div>
          <div className="row btnRow ">
            <CalcButton innerSymbol="1" type="digit" />
            <CalcButton innerSymbol="2" type="digit" />
            <CalcButton innerSymbol="3" type="digit" />
            <CalcButton innerSymbol="÷" type="math" />
          </div>
          <div className="row btnRow ">
            <CalcButton innerSymbol="0" type="digit" />
            {/* <CalcButton innerSymbol="2" type="digit" /> */}
            <CalcButton innerSymbol="." type="digit" />
            <CalcButton innerSymbol="=" type="math" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
