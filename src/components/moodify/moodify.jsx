import React from 'react';
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import AvatarPic from '../../assets/avatarpic.png';


import './moodify.css'; 

function Moodify() {
  return (
    <div>
      <div className='edit-mood'>
        <div className="avatar-container">
          <img src={AvatarPic} alt="Avatar" className="avatar-image" />
        </div>
        <div className="moodify-text">
        <h1 className='headingmain'>Track your mood now!!</h1>
        <p className="tracker-text">
          Start by logging your daily mood below.
        </p>
        <p className="tracker-text2">
          Click on any date to select how you're feeling.
        </p>
        <ul className="tracker-tips">
          <li>🎯 Tap a date to log your mood.</li>
          <li>📝 Add a short note if you like.</li>
          <li>📊 Track your growth and trends over time.</li>
        </ul>
        </div>
        </div>

        <div className="calendar-section">
          <MoodCalendar />
          <div className="legend">
            <div className="legend-item"><div className="legend-box happy"></div> Happy</div>
            <div className="legend-item"><div className="legend-box sad"></div> Sad</div>
            <div className="legend-item"><div className="legend-box anxious"></div> Anxious</div>
            <div className="legend-item"><div className="legend-box neutral"></div> Neutral</div>
          </div>
        </div>
      </div>
  );
}

export default Moodify;
