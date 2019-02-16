import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english", "primary")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch", "red")}
          />
          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value={this.state.color}>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
