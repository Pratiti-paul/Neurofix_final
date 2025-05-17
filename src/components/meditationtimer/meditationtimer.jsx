import React, { useState, useRef } from 'react';
import './meditationtimer.css';

const MeditationTimer = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleSet = () => {
    const total = parseInt(minutes) * 60 + parseInt(seconds);
    setTimeLeft(total);
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const handleStart = () => {
    if (timeLeft > 0 && !isActive) {
      setIsActive(true);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(timerRef.current);
    setTimeLeft(minutes * 60 + seconds);
  };

  return (
    <div className="timer-container">
      <h2 className="timer-heading">Meditation Timer</h2>
      <div className="input-row">
        <label className="timer-label1">Set Time:&nbsp;</label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="timer-input1"
          min="0"
        />
        <span className="timer-label2">min</span>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="timer-input2"
          min="0"
          max="59"
        />
        <span className="timer-label3">sec</span>
        <button onClick={handleSet} className="timer-button">Set</button>
      </div>
      <div className="time-display">{formatTime(timeLeft)}</div>
      <div className="button-row">
        <button onClick={handleStart} className="timer-button">Start</button>
        <button onClick={handlePause} className="timer-button">Pause</button>
        <button onClick={handleReset} className="timer-button">Reset</button>
      </div>
    </div>
  );
};

export default MeditationTimer;
