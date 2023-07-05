import React, { useState } from 'react';


function App() {
  const [keywords, setKeywords] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [language, setLanguage] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleKeywordsChange = (event) => {
    setCurrentKeyword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && currentKeyword.trim() !== '') {
      addKeyword();
    }
  };

  const addKeyword = () => {
    if (currentKeyword.trim() !== '') {
      setKeywords((prevKeywords) => [...prevKeywords, currentKeyword.trim()]);
      setCurrentKeyword('');
    }
  };

  const removeKeyword = (index) => {
    setKeywords((prevKeywords) => prevKeywords.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const generateStory = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/story', {
        method: 'POST',
        body: JSON.stringify({ keywordsArray: keywords, language }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to generate story');
      }

      const data = await response.json();
      setLoading(false);
      setStory(data.story);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="app-container">
      <h1>Story App</h1>
      <div className="form-container">
        <label htmlFor="keywords">Keywords:</label>
        <div className="input-container">
          {keywords.map((keyword, index) => (
            <div key={index} className="keyword-pill">
              <span>{keyword}</span>
              <button onClick={() => removeKeyword(index)}>&times;</button>
            </div>
          ))}
          <input
            type="text"
            id="keywords"
            value={currentKeyword}
            onChange={handleKeywordsChange}
            onKeyDown={handleKeyDown}
            placeholder='press enter to store keywords'
          />
        </div>

        <label htmlFor="language">Language:</label>
        <select id="language" onChange={handleLanguageChange}>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
          <option value="Hinglish">Hinglish</option>
          <option value="Korean">Korean</option>  
        </select>

        <button onClick={generateStory}>Generate Story</button>
      </div>

      {loading && <h2>Generating story...</h2>}
      {error && <h2>Error: {error}</h2>}
      {story && <div className="story-container">{story}</div>}
    </div>
  );
}

export default App;
