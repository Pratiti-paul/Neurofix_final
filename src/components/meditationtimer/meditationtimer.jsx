import React, { useState, useEffect } from 'react';
import './MeditationTimer.css';

const MeditationTimer = () => {
  const [inputMinutes, setInputMinutes] = useState(5);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      alert('Meditation session complete! 🧘');
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const startMeditation = () => {
    const totalSeconds = parseInt(inputMinutes) * 60 + parseInt(inputSeconds);
    if (totalSeconds <= 0) return alert("Please set a valid time.");
    setRemainingTime(totalSeconds);
    setIsRunning(true);
    setHasStarted(true);
  };

  const pauseMeditation = () => {
    setIsRunning(false);
  };

  const stopMeditation = () => {
    setIsRunning(false);
    setHasStarted(false);
    setRemainingTime(0);
  };

  return (
    <div className="meditation-container">
      <h2 className="meditation-title">Meditation Tracker</h2>

      <div className="meditation-inputs">
        <label>Minutes: </label>
        <input
          type="number"
          min="0"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
        />
        <label>Seconds: </label>
        <input
          type="number"
          min="0"
          max="59"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
        />
      </div>

      <div className="meditation-controls">
        {!hasStarted || !isRunning ? (
          <button onClick={startMeditation} className="meditation-button">
            {hasStarted ? 'Resume' : 'Start'}
          </button>
        ) : (
          <button onClick={pauseMeditation} className="meditation-button">
            Pause
          </button>
        )}
        {hasStarted && (
          <button onClick={stopMeditation} className="meditation-button stop">
            Stop
          </button>
        )}
      </div>

      <p className="meditation-timer">Timer: {formatTime(remainingTime)}</p>
    </div>
  );
};

export default MeditationTimer;
