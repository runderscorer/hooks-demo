import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1)

  return (
    <div className='counter'>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>+</button>

      <div className='counts'>
        {Array(count).fill(undefined).map(n => <img src='https://media0.giphy.com/media/IXB6mQUgOqWQM/giphy.gif' />)}
      </div>
    </div>
  )
}