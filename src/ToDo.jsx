import React, { Component } from 'react';

export default class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      todo: '',
      todos: []
    };
  }

  handleChange = (e) => this.setState({ todo: e.target.value })

  handleSubmit = () => {
    const { todo: newTodo, todos } = this.state;

    this.setState({
      todo: '',
      todos: [...todos, newTodo]
    });
  }

  render() {
    const { todo, todos } = this.state;

    return (
      <div className='todos'>
        <div>
          <form action='#' onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={todo}
            />
            <input type='submit' />
          </form>
          <ul>
            {todos.map(t => <li>{t}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}