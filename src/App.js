import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./Components/Navigation/Navigation";
import QuestionContainer from "./Components/QuestionContainer/QuestionContainer";
import { Route } from "react-router-dom";

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
    if (this.state.loading) {
      return <p className="loading">LOADING!!!</p>;
    }
    return (
      <div className="App">
        {this.state.error && (
          <h1 className="error-message" data-cy="error">
            Uh oh! Something went wrong, please try again!
          </h1>
        )}

        <Navigation />
        <QuestionContainer quotes={this.state.quotes} />
        <div></div>
      </div>
    );
  }
}
export default App;
