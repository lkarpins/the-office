import React, { Component } from "react";
import "./App.css";
import QuestionContainer from "./Components/QuestionContainer/QuestionContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      character: [],
      error: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    fetch("https://the-office-api-11.herokuapp.com/")
      .then((res) => res.json())
      .then((quotes) => {
        this.setState({ quotes: quotes.quotes, loading: false });
        console.log(quotes.quotes);
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">the office.</header>
        <div>
          <QuestionContainer quotes={this.state.quotes} />
        </div>
      </div>
    );
  }
}
export default App;
