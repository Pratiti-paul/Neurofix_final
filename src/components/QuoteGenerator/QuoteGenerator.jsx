import { useState } from 'react';
import './QuoteGenerator.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState('Select a mood and generate a quote!');
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState('neutral');

  const generateQuote = async () => {
    setLoading(true);

    const apiKey = 'AIzaSyA1fJJHdgrrRhxq3G2Umt8tFRKpPeA5NJM'; 

    const moodPrompts = {
      happy: "Give me a short, uplifting and happy quote.",
      sad: "Give me a comforting quote for someone feeling sad.",
      anxious: "Give me a calming quote for someone feeling anxious.",
      neutral: "Give me a thoughtful, neutral quote suitable for any mood.",
    };

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: moodPrompts[mood] }] }],
          }),
        }
      );

      const data = await response.json();
      const generatedQuote = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedQuote) {
        setQuote(generatedQuote);
      } else {
        setQuote('Failed to generate a quote.');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('An error occurred.');
    }

    setLoading(false);
  };

  return (
    <div className="generator-container">
      <div className="mood-selector">
        <select 
          value={mood} 
          onChange={(e) => setMood(e.target.value)}
          className="select-mood"
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <button 
        onClick={generateQuote} 
        disabled={loading} 
        className="generate-button"
      >
        {loading ? 'Generating...' : 'Generate Quote'}
      </button>

      <div className="quote-display">
        {quote}
      </div>
    </div>
  );
}




export default QuoteGenerator;
