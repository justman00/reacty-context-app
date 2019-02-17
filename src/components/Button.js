import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {val => (
          <button className={`ui button ${val.color}`}>
            {val.language === "english" ? "Submit" : "Voorleggen"}
          </button>
        )}
      </LanguageContext.Consumer>
    );
  }
}
