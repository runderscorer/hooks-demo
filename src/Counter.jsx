import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleClick = () => this.setState({ count: this.state.count += 1 });

  render() {
    const { count } = this.state;

    return (
      <div className='counter'>
        <h2>Count: {count}</h2>
        <button onClick={this.handleClick}>+</button>

        <div className='counts'>
          {Array(count).fill(undefined).map(n => <img src='https://media0.giphy.com/media/IXB6mQUgOqWQM/giphy.gif' />)}
        </div>
      </div>
    )
  }
}