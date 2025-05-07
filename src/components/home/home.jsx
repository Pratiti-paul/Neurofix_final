import React, { useRef } from 'react';
import './home.css'; 
// import MoodCalendar from "../moodcalendar/moodcalendar"; 
// import QuoteGenerator from "../QuoteGenerator/QuoteGenerator";
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../../assets/animation.json";
import StartButton from "../startbutton/startbutton";

function Home() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="text-section">
          <h1 className='maintag'>Welcome to NeuroFix</h1>
          <p className='subtitletag'>
            Your space to reflect, relax, and grow — with mood tracking, journaling, and self-care tools
          </p>
          
          <div className="calm-animation">
            <Player
              autoplay
              loop
              src={animation}
              className="calm-player"
            />
          </div>

          <div className="start-button-wrapper">
            <StartButton scrollToTarget={handleScroll} />
          </div>
        </div>

       
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
    </div>
  );
}

export default Home;
