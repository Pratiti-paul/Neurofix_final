import { Link } from 'react-router-dom';

import React, { useState } from "react";
import "./writepad.css";

function Writepad() {
  const [entry, setEntry] = useState("");

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSave = () => {
    if (entry.trim() !== "") {
      
      const previousEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
      const newEntries = [...previousEntries, { text: entry, date: new Date().toLocaleString() }];
      localStorage.setItem("journalEntries", JSON.stringify(newEntries));
      alert("Entry saved!");
      setEntry(""); 
    }
  };

  return (
    <div className="journal-container">
      <h1 className='heading'>My Journal</h1>
      <textarea
        value={entry}
        onChange={handleChange}
        placeholder="Start writing your thoughts here..."
        className="journal-textarea"
      />
      <div className="journal-buttons">
      <button className="journal-button" onClick={handleSave}>Save Entry</button>
      </div>
    </div>
  );
}

export default Writepad;

  
  
  