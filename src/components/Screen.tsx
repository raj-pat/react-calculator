import React from "react";

export interface ScreenProps {

  screenOutput: string

}

export interface ScreenState {}

class Screen extends React.Component<ScreenProps, ScreenState> {
  state = {};
  render() {
    return (
      <div className="row ">
        <div className="col screen">
          <div className="emptyScreen"></div>
          <div>{this.props.screenOutput}</div>
        </div>
      </div>
    );
  }
}

export default Screen;
