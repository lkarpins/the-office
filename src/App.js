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
      filteredQuotes: [],
      error: false,
      value: "",
      noResults: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: true,
    });
    fetch("https://the-office-api-11.herokuapp.com/")
      .then((res) => res.json())
      .then((quotes) => {
        this.randomizeQuotes(quotes.quotes);
        this.setState({
          quotes: quotes.quotes,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  searchQuotes = (event) => {
    this.setState({ noResults: "" });
    const { value } = event.target;
    const searchedQuotes = this.state.quotes.filter((quote) => {
      if (quote.content.toLowerCase().includes(value.toLowerCase())) {
        return quote;
      }
    });

    this.setState({ filteredQuotes: searchedQuotes, value: value });
    this.selectQuotesToRender();
  };

  selectQuotesToRender = () => {
    if (this.state.value.length > 0 && !this.state.filteredQuotes.length) {
      return this.setState({ noResults: "Sorry, no quotes found!" });
    } else if (!this.state.value.length && !this.state.filteredQuotes.length) {
      return this.state.quotes;
    } else {
      return this.state.filteredQuotes;
    }
  };

  randomizeQuotes = (quotes) => {
    for (let i = quotes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = quotes[i];
      quotes[i] = quotes[j];
      quotes[j] = temp;
    }
  };

  render() {
    if (this.state.loading) {
      <div className="loading-box">
        return <p className="loading">LOADING!!!</p>;
      </div>;
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

          <Route
            exact
            path="/quotes"
            render={() => (
              <>
                <div className="search-area">
                  <label className="label">
                    Search Quotes <br></br>
                  </label>
                  <input
                    type="text"
                    data-cy="search"
                    placeholder="Search Quotes"
                    name="search-form"
                    className="input"
                    aria-label="search quoes"
                    onChange={(event) => this.searchQuotes(event)}
                  />
                </div>
                {!this.state.noResults ? (
                  <QuestionContainer quotes={this.selectQuotesToRender()} />
                ) : (
                  <div className="quote-card no-results" data-cy="no-results">
                    <h2>{this.state.noResults}</h2>
                  </div>
                )}
              </>
            )}
          />
          <Route
            path="*"
            render={() => (
              <h1 className="error-message" data-cy="error">
                <div className="error-box">
                  Uh oh! Something went wrong, please try again!
                </div>
              </h1>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}
export default App;

// {
// }
