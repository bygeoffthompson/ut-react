import React, { useState, useEffect } from 'react';
import data from './content.json'; // Import the JSON data

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <div>
        <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleChange}
        />
        <ul>
          {searchResults.map(item => (
              <li key={item.id}><a href={item.href}>{item.title}</a></li>
          ))}
        </ul>
      </div>
  );
}

export default App;