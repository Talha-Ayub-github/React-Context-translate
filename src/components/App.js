import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        Select a language
        <br />
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
        <br />
        {/* {this.state.language} */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;