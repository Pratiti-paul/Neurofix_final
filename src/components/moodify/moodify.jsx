import React from 'react';
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import QuoteGenerator from "../QuoteGenerator/QuoteGenerator";

import './moodify.css'; 

function Moodify() {
  const scrollRef = React.useRef(null);
  return (
    <div>
      <div ref={scrollRef} className="tracker-intro">
        <p className="tracker-text">
          Start by logging your daily mood below. Click on any date to select how you're feeling...
        </p>
        <ul className="tracker-tips">
          <li>🎯 Tap a date to log your mood.</li>
          <li>📝 Add a short note if you like.</li>
          <li>📊 Track your growth and trends over time.</li>
        </ul>

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

      <div className="quote-generator-section">
        <h2 className="quote-heading">Feeling stuck?</h2>
        <h2 className="quote-subheading">Get inspired with a random quote!</h2>
        <QuoteGenerator />
      </div>

    </div>
  );
}

export default Moodify;
