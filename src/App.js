import React, { Component } from "react";
import "./App.css";
import { Navigation } from "./Components/Navigation/Navigation";
import { QuestionContainer } from "./Components/QuestionContainer/QuestionContainer";
import { Route, Switch } from "react-router-dom";
import { HomeView } from "./Components/HomeView/HomeView";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      filteredQuotes: [],
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
          loading: false,
          value: "",
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
    const { value } = event.target;
    const searchedQuotes = this.state.quotes.filter((quote) => {
      if (quote.content.toLowerCase().includes(value.toLowerCase())) {
        return quote;
      }
    });
    console.log(searchedQuotes);
    console.log(value);
    this.setState({ filteredQuotes: searchedQuotes });
  };

  selectQuotesToRender = () => {
    return !this.state.filteredQuotes.length
      ? this.state.quotes
      : this.state.filteredQuotes;
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
                    Search Quotes: <br></br>
                    <input
                      type="text"
                      data-cy="search"
                      placeholder="Search Quotes"
                      name="search-form"
                      className="input"
                      aria-label="search quoes"
                      onChange={(event) => this.searchQuotes(event)}
                    />
                  </label>
                </div>
                {<QuestionContainer quotes={this.selectQuotesToRender()} />}
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

{
}
