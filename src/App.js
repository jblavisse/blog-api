import React, { Component } from 'react';
import './App.css';

import Timer from "./Timer";

class App extends Component {
  state = {
    timerVisible: true
  }

  toggleTimer = () => {
    this.setState({
      timerVisible: !this.state.timerVisible
    })
  }

  render() {
    let timer = this.state.timerVisible ? <Timer/> : "";
    return (
      <div className="App">
        {timer}
        <button onClick={this.toggleTimer}>Toggle timer</button>
      </div>
    );
  }

}

export default App;
