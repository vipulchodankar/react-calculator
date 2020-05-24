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

  // Clears input
  handleClear() {
    this.setState({
      input: ""
    });
  }

  // Checks if item is an operator
  isOperator = value => {
    return value === "+" || value === "-" || value === "*" || value === "/"
  }

  // Appends value to input
  append(val) {
    let latest = this.state.input.toString().split(/[+/\-*]+/);

    // To prevent numbers from beginning from multiple 0s
    if(this.state.input == 0 && val == 0) {
      this.setState({ input: "0" });
    } 

    // To prevent numbers to contain multiple decimals
    else if (latest[latest.length-1].includes(".") && val == ".") {
      this.setState({ input: this.state.input });
    }

    // To deal with latest operators
    else if(this.isOperator(this.state.input[this.state.input.length - 2]) && this.isOperator(this.state.input[this.state.input.length - 1]) && this.isOperator(val)) {
      this.setState({ input: this.state.input.slice(0, this.state.input.length - 2)  + val })
    }

    // Finally append
    else {
      this.setState({ input: this.state.input + val });
    }
  };

  // Function to evaluate input expression
  handleEqual() {
    try { 
      // Incase number begins with 0, then display it with 0
      if(this.state.input[0] == "0")
        this.setState({ input: "0" + evaluate(this.state.input) }) 
      else 
        this.setState({ input: evaluate(this.state.input) }) 
    }
    catch(err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="App">
        <Display input={this.state.input}/>
        <div className="buttons-container"> 
          <ClearButton name="clear" handleClear={this.handleClear}>Clear</ClearButton>
          <Button name="seven" handleClick={this.append}>7</Button>
          <Button name="eight" handleClick={this.append}>8</Button>
          <Button name="nine" handleClick={this.append}>9</Button>
          <Button name="divide" handleClick={this.append}>/</Button>
          <Button name="four" handleClick={this.append}>4</Button>
          <Button name="five" handleClick={this.append}>5</Button>
          <Button name="six" handleClick={this.append}>6</Button>
          <Button name="multiply" handleClick={this.append}>*</Button>
          <Button name="one" handleClick={this.append}>1</Button>
          <Button name="two" handleClick={this.append}>2</Button>
          <Button name="three" handleClick={this.append}>3</Button>
          <Button name="add" handleClick={this.append}>+</Button>
          <Button name="decimal" handleClick={this.append}>.</Button>
          <Button name="zero" handleClick={this.append}>0</Button>
          <Button name="equals" handleClick={() => this.handleEqual()}>=</Button>
          <Button name="subtract" handleClick={this.append}>-</Button>
        </div>
      </div>
    )
  }
}

export default App;
