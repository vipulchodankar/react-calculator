import React, { Component } from 'react';
import './App.scss';

import Display from './components/Display'
import Buttons from './components/Buttons'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history : '',
      currentOperation: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    )
  }
}

export default App;
