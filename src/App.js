import React, { Component } from 'react';
import './App.scss';

import Display from './components/Display'
import Button from './components/Button'
import ClearButton from './components/ClearButton'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history : 'lol',
      currentOperation: '123'
    }

    this.append = this.append.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  append() {
    
  }

  handleClear() {
    alert("CLICKED");
    this.setState({
      history: ' ',
      currentOperation: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Display history={this.state.history} currentOperation={this.state.currentOperation}/>
        <div className="buttons-container"> 
          <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    )
  }
}

export default App;
