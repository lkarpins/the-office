import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { QuestionContainer } from "./Components/QuestionContainer/QuestionContainer";
import { Route, Switch } from "react-router-dom";
import { HomeView } from "./Components/HomeView/HomeView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      characters: [],
      selectedQuotes: {},
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
        this.setState({
          quotes: quotes.quotes,
          characters: quotes.characters,
          loading: false,
        });
        this.randomizeQuote();
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  randomizeQuote = () => {
    const randomQuote =
      this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    console.log(randomQuote);
    return randomQuote;
  };

  render() {
    if (this.state.loading) {
      return <p className="loading">LOADING!!!</p>;
    }
    return (
      <div className="App">
        {this.state.error && (
          <h1 className="error-message" data-cy="error">
            <div className="error-box">
              Uh oh! Something went wrong, please try again!
            </div>
          </h1>
        )}
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/quotes">
            <QuestionContainer quotes={this.state.quotes} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
