import React from 'react';
import Writepad from '../writepad/writepad'; 
import DrawPad from '../drawpad/drawpad';
import './journal.css'; 

function Journal() {
  return (
    <>
      <div className="journal-container">
        <Writepad />
      </div>
      <div className="drawpad-container">
        <DrawPad />
      </div>
    </>
  );
}

export default Journal;
