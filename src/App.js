import React, { Component } from 'react';
import './App.scss';

import Display from './components/Display'
import Button from './components/Button'
import ClearButton from './components/ClearButton'

import {evaluate} from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.append = this.append.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClear() {
    alert("CLICKED");
    this.setState({
      input: ''
    });
  }

  append(val) {
    this.setState({ input: this.state.input + val });
  };

  handleEqual() {
    this.setState({ input: evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <Display input={this.state.input}/>
        <div className="buttons-container"> 
          <ClearButton id="clear" handleClear={this.handleClear}>Clear</ClearButton>
          <Button id="seven" handleClick={this.append}>7</Button>
          <Button id="eight" handleClick={this.append}>8</Button>
          <Button id="nine" handleClick={this.append}>9</Button>
          <Button id="divide" handleClick={this.append}>/</Button>
          <Button id="four" handleClick={this.append}>4</Button>
          <Button id="five" handleClick={this.append}>5</Button>
          <Button id="six" handleClick={this.append}>6</Button>
          <Button id="multiply" handleClick={this.append}>*</Button>
          <Button id="1" handleClick={this.append}>1</Button>
          <Button id="2" handleClick={this.append}>2</Button>
          <Button id="3" handleClick={this.append}>3</Button>
          <Button id="add" handleClick={this.append}>+</Button>
          <Button id="decimal" handleClick={this.append}>.</Button>
          <Button id="zero" handleClick={this.append}>0</Button>
          <Button id="equals" handleClick={() => this.handleEqual()}>=</Button>
          <Button id="subtract" handleClick={this.append}>-</Button>
        </div>
      </div>
    )
  }
}

export default App;
