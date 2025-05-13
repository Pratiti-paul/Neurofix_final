import React, { useState, useEffect, useRef } from 'react';
import './meditationtimer.css';

const MeditationTracker = () => {
  const [minutesInput, setMinutesInput] = useState(10);
  const [secondsInput, setSecondsInput] = useState(0);
  const [initialTime, setInitialTime] = useState(10 * 60);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
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

  const handleTimeSet = () => {
    const totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);
    setInitialTime(totalSeconds);
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div className="meditation-tracker">
      <h2 className='header'>Meditation Timer</h2>

      <div className="time-setter">
        <label>Set Time:</label>
        <input
          type="number"
          min="0"
          value={minutesInput}
          onChange={(e) => setMinutesInput(e.target.value)}
          disabled={isRunning}
        /> min
        <input
          type="number"
          min="0"
          max="59"
          value={secondsInput}
          onChange={(e) => setSecondsInput(e.target.value)}
          disabled={isRunning}
        /> sec
        <button onClick={handleTimeSet} disabled={isRunning}>
          Set
        </button>
      </div>

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
