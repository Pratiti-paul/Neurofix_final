import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './moodcalendar.css'; 

function MoodCalendar() {
  const [moods, setMoods] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showMoodSelector, setShowMoodSelector] = useState(false);

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem('moods')) || {};
    setMoods(storedMoods);
  }, []);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowMoodSelector(true);
  };

  const handleMoodSelect = (mood) => {
    if (selectedDate) {
      const updatedMoods = { ...moods, [selectedDate.toDateString()]: mood };
      setMoods(updatedMoods);
      localStorage.setItem('moods', JSON.stringify(updatedMoods));
    }
    setShowMoodSelector(false);
    setSelectedDate(null);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const mood = moods[date.toDateString()];
      if (mood === 'Happy') return 'tile-happy';
      if (mood === 'Sad') return 'tile-sad';
      if (mood === 'Anxious') return 'tile-anxious';
      if (mood === 'Neutral') return 'tile-neutral';
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        onClickDay={handleDayClick}
        tileClassName={tileClassName}
      />

      {showMoodSelector && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Select Your Mood</h3>
            <button onClick={() => handleMoodSelect('Happy')}>😊 Happy</button>
            <button onClick={() => handleMoodSelect('Sad')}>😢 Sad</button>
            <button onClick={() => handleMoodSelect('Anxious')}>😟 Anxious</button>
            <button onClick={() => handleMoodSelect('Neutral')}>😐 Neutral</button>
            <button className="cancel-button" onClick={() => setShowMoodSelector(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodCalendar;
