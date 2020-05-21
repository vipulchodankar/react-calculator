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
    this.setState({
      input: ""
    });
  }

  isOperator = value => {
    return value === "+" || value === "-" || value === "*" || value === "/"
  }

  append(val) {
    // console.log(this.state.input.split(/[\+\/\-\*]+/));
    


    let latest = this.state.input.toString().split(/[\+\/\-\*]+/);
    
    // if(this.state.input.length>1)
    //   latest = this.state.input.split(/[\+\/\-\*]+/);

    // if(typeof(latest) === "undefined")
    //   console.log("Undefined")
    // else 
    //   console.log();

    if(this.state.input == 0 && val == 0) {
      this.setState({ input: "0" });
    } 

    else if (latest[latest.length-1].includes(".") && val == ".") {
      this.setState({ input: this.state.input });
    }

    else if(this.isOperator(this.state.input[this.state.input.length - 2]) && this.isOperator(this.state.input[this.state.input.length - 1]) && this.isOperator(val)) {
      console.log("HERE");
      this.setState({ input: this.state.input.slice(0, this.state.input.length - 2)  + val })
    }

    else {
      this.setState({ input: this.state.input + val });
    }
  };

  handleEqual() {
    try { 
      if(this.state.input[0] == "0")
        this.setState({ input: "0" + evaluate(this.state.input) }) 
      else 
      this.setState({ input: evaluate(this.state.input) }) 
    }
    catch(err) {
      console.log(err);
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
