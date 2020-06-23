import React, { Component } from 'react';
import './App.css';

import PostList from "./PostList";


class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <PostList/>
      </div>
    );
  }

}

export default App;
