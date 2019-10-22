import React, { useState, useEffect } from 'react';

export default function SearchIndex() {
  const [query, setQuery] = useState('react');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('updated!')

    async function fetchResults() {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const data = await response.json();

      setResults(data.hits);
    };

    fetchResults();
  }, [query]);

  return (
    <div className='search-index'>
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>

      <ul>
        {results.map(result => <li>{result.title}</li>)}
      </ul>
    </div>
  )
}