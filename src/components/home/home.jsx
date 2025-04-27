import React from 'react';
import './home.css'; 
import MoodCalendar from "../moodcalendar/moodcalendar"; 

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="text-section">
          <h1>Welcome to NeuroFix</h1>
          <p>Track your mental health and moods with us.</p>
        </div>
        <div className="calendar-section">
          <MoodCalendar />
        </div>
      </div>
    </div>
  );
}

export default Home;

