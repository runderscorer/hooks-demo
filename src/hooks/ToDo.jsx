import React, { useState } from 'react';

export default function ToDo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);

  const handleSubmit = () => {
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <div className='todos'>
      <div>
        <form action='#' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
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