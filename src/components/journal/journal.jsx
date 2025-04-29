import { Link } from 'react-router-dom';

// function Journal() {
//     return (
//       <div>
//         <h2>Journal Page</h2>
//       </div>
//     );
//   }

import React, { useState } from "react";
import "./journal.css"; 

function Journal() {
  const [entry, setEntry] = useState("");

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSave = () => {
    if (entry.trim() !== "") {
      // Save to localStorage (temporary storage in browser)
      const previousEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
      const newEntries = [...previousEntries, { text: entry, date: new Date().toLocaleString() }];
      localStorage.setItem("journalEntries", JSON.stringify(newEntries));
      alert("Entry saved!");
      setEntry(""); // Clear the textarea
    }
  };

  return (
    <div className="journal-container">
      <h1>My Journal</h1>
      <textarea
        value={entry}
        onChange={handleChange}
        placeholder="Start writing your thoughts here..."
        className="journal-textarea"
      />
      <div className="journal-buttons">
        <button onClick={handleSave}>Save Entry</button>
      </div>
    </div>
  );
}

export default Journal;

  
  
  