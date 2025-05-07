import React, { useState, useEffect, useRef } from 'react';
import './meditationtimer.css';

const MeditationTracker = () => {
  const INITIAL_TIME = 10 * 60;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(INITIAL_TIME);
  };

  return (
    <div className="meditation-tracker">
      <h2>Meditation Timer</h2>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(true)} disabled={isRunning || timeLeft === 0}>Start</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      {timeLeft === 0 && <p className="done-message">🧘 Time's up! Great job!</p>}
    </div>
  );
};

export default MeditationTracker;
