import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english", "primary")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch", "red")}
        />
      </div>
    );
  }
}