import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './moodcalendar.css'; 

function MoodCalendar() {
  const [moods, setMoods] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem('moods')) || {};
    setMoods(storedMoods);
  }, []);

  const handleDayClick = (date) => {
    const mood = prompt('Enter your mood (Happy, Sad, Anxious, Neutral):');
    if (mood) {
      const updatedMoods = { ...moods, [date.toDateString()]: mood };
      setMoods(updatedMoods);
      localStorage.setItem('moods', JSON.stringify(updatedMoods));
    }
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
    </div>
  );
}

export default MoodCalendar;
