import React from "react";
import CalcButton from "./CalcButton";
import { onButtonClickInterface } from "../Interfaces/functions";

export interface ButtonsProps {
  onButtonClick: onButtonClickInterface;
}

const Buttons: React.SFC<ButtonsProps> = (props) => {
  return (
    <div className="row">
      <div className="col" style={{ padding: "0" }}>
        <div className="container btnContainer">
          <div className="row btnRow ">
            <CalcButton
              innerSymbol="AC"
              type="function"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="+/-"
              type="function"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="%"
              type="function"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="÷"
              type="math"
              onButtonClick={props.onButtonClick}
            />
          </div>
          <div className="row btnRow ">
            <CalcButton
              innerSymbol="7"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="8"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="9"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="x"
              type="math"
              onButtonClick={props.onButtonClick}
            />
          </div>
          <div className="row btnRow ">
            <CalcButton
              innerSymbol="4"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="5"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="6"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="-"
              type="math"
              onButtonClick={props.onButtonClick}
            />
          </div>
          <div className="row btnRow ">
            <CalcButton
              innerSymbol="1"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="2"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="3"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="+"
              type="math"
              onButtonClick={props.onButtonClick}
            />
          </div>
          <div className="row btnRow ">
            <CalcButton
              innerSymbol="0"
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            {/* <CalcButton innerSymbol="2" type="digit" /> */}
            <CalcButton
              innerSymbol="."
              type="digit"
              onButtonClick={props.onButtonClick}
            />
            <CalcButton
              innerSymbol="="
              type="math"
              onButtonClick={props.onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
