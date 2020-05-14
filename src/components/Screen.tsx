import React from "react";

export interface ScreenProps {}

export interface ScreenState {}

class Screen extends React.Component<ScreenProps, ScreenState> {
  state = {};
  render() {
    return (
      <div className="row ">
        <div className="col screen">
          <div className="emptyScreen"></div>
          <div>999,999,999</div>
        </div>
      </div>
    );
  }
}

export default Screen;
