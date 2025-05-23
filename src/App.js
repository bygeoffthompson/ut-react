import React, { useState, useEffect } from 'react';
import data from './content.json'; // Import the JSON data

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      if (searchTerm) {
          const results = data.filter(item =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
      } else {
          setSearchResults([]);
      }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <div>
          <div className="body-text">
              <h2 className="heading">Search</h2>
              <input
                  type="text"
                  placeholder="Our Content"
                  value={searchTerm}
                  onChange={handleChange}
              />
          </div>
          <ul>
              {searchResults.map(item => (
                  <li key={item.id}>
                      <a href={item.href}>{item.title}</a>
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default App;