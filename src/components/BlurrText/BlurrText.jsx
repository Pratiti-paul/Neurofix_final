import React from 'react';
import './BlurrText.css';

function BlurrText({ text, animateBy = 'letters', direction = 'top', className }) {

  const renderText = () => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="word">
        {word.split('').map((letter, letterIndex) => (
          <span 
            key={letterIndex} 
            className={`letter animated`} 
            style={{ animationDelay: `${(wordIndex * 0.5) + (letterIndex * 0.25)}s` }} // Increased delay for slower animation
          >
            {letter}
          </span>
        ))}
        {/* Space between words */}
        <span className="space"> </span>
      </span>
    ));
  };

  return (
    <div className={`blur-text ${direction} ${className}`}>
      {renderText()}
    </div>
  );
}

export default BlurrText;
