import React from 'react';
import './home.css'; 
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import QuoteGenerator from "../QuoteGenerator/QuoteGenerator";
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../../assets/animation.json";






const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Home() {

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="text-section">
        <h1 className='maintag'>Welcome to NeuroFix</h1>
          <p className='subtitletag'>Your space to reflect, relax, and grow — with mood tracking, journaling, and self-care tools</p>
          <div className="calm-animation">
            <Player
              autoplay
              loop
              src={animation}
              className="calm-player"
            />
          </div>
        </div>
        <div className="tracker-intro">
          <h2 className="tracker-heading">Ready to Begin Your Journey?</h2>
          <p className="tracker-text">
            Start by logging your daily mood below. Click on any date to select how you're feeling. Over time, you’ll begin to notice patterns in your mood and mental well-being.
          </p>
          <ul className="tracker-tips">
            <li>🎯 Tap a date to log your mood.</li>
            <li>📝 Add a short note if you like.</li>
            <li>📊 Track your growth and trends over time.</li>
          </ul>
          <div className="calendar-section">
          <MoodCalendar />
        </div>
        </div>
        {/* <div className="calendar-section">
          <MoodCalendar />
        </div> */}
        <div className="quote-generator">
            <QuoteGenerator /> 
        </div>
      </div>
    </div>
  );
}

export default Home;

