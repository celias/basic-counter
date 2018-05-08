import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.baseState = this.state;
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  resetState = () => {
    this.setState(
      this.baseState 
    );
  }
  render() {
    return (
      <section className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} className="full-width">Increment</button>
        <button onClick={this.decrement} className="full-width">Decrement</button>
        <button onClick={this.resetState} className="full-width">Reset</button>
      </section>
    );
  }
}
