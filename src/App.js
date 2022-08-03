import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: [],
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
        console.log(quotes);
        this.setState({ quotes: quotes, loading: false });
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
        <p></p>
      </div>
    );
  }
}
export default App;
