import React, { useState, useEffect } from 'react';

const MeditationTimer = () => {
  const [duration, setDuration] = useState(300); // default 5 minutes
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
    setRemainingTime(duration);
    setIsRunning(true);
  };

  return (
    <div className="p-4 bg-blue-50 rounded-xl shadow-md text-center max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Meditation Tracker</h2>
      
      <div className="mb-4">
        <label className="mr-2 font-medium">Choose duration:</label>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="p-2 rounded border"
        >
          <option value={300}>5 minutes</option>
          <option value={600}>10 minutes</option>
          <option value={900}>15 minutes</option>
        </select>
      </div>

      <button
        onClick={startMeditation}
        className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded"
        disabled={isRunning}
      >
        {isRunning ? 'Meditating...' : 'Start Meditation'}
      </button>

      <p className="mt-4 text-lg font-mono">
        Timer: {formatTime(remainingTime)}
      </p>
    </div>
  );
};

export default MeditationTimer;
