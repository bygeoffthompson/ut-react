import React, { useState, useEffect } from 'react';
import data from './content.json'; // Import the JSON data

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      if (searchTerm) {
          const results = data.filter(item =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.text.toLowerCase().includes(searchTerm.toLowerCase())
          ).slice(0,10);
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
              <h2 className="heading">Search<span className="d-none"> our Content</span></h2>
              <input
                  type="text"
                  placeholder="Our Content"
                  value={searchTerm}
                  onChange={handleChange}
              />
          </div>
          <div id="search-container">
              {searchResults.map(item => (
                  <div className="search-result" key={item.id}>
                      <a href={item.href}>{item.title}</a>
                      <span className="search-text">{item.text}</span>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default App;