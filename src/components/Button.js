import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from ".././contexts/ColorContext";

export default class Button extends Component {
  renderButton = val => (
    <button className={`ui button ${val}`}>
      <LanguageContext.Consumer>
        {value => (value === "english" ? "Submit" : "Voorleggen")}
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    return (
      <ColorContext.Consumer>
        {val => this.renderButton(val)}
      </ColorContext.Consumer>
    );
  }
}
