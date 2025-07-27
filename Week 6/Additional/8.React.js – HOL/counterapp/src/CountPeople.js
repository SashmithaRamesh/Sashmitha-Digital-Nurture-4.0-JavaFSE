import React, { Component } from "react";
import "./CountPeople.css";
class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }
  updateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };
  updateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <button className="button" onClick={this.updateEntry}>Login</button>
          <div className="text">{this.state.entrycount} People Entered!!!</div>
        </div>
        <div className="card">
          <button className="button" onClick={this.updateExit}>Exit</button>
          <div className="text">{this.state.exitcount} People Left!!!</div>
        </div>
      </div>
    );
  }
}
export default CountPeople;