import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Compare from './Compare';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstlines: [],
      secondlines: []
    };
    this.handleTextFirst = this.handleTextFirst.bind(this);
    this.handleTextSecond = this.handleTextSecond.bind(this);
  }

  handleTextFirst(firstlines){
    this.setState({firstlines: firstlines});
  }

  handleTextSecond(secondlines){
    this.setState({secondlines: secondlines });
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Input onChangeText={this.handleTextFirst}/>
          <Input onChangeText={this.handleTextSecond}/>
        </div>
        <Compare firstArr = {this.state.firstlines} secondArr = {this.state.secondlines}/>
      </div>
    );
  }
}

export default App;
