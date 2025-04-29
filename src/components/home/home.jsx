import React from 'react';
import './home.css'; 
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import QuoteGenerator from "../QuoteGenerator/QuoteGenerator";
import BlurrText from "../BlurrText/BlurrText";  
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
        <BlurrText
            text="Welcome to NeuroFix"
            delay={150}
            animateBy="words"  
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <p>Track your mental health and moods with us.</p>
          <div className="calm-animation">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: '250px', width: '400px' }}
            />
          </div>
        </div>
        <div className="calendar-section">
          <MoodCalendar />
        </div>
        <div className="quote-generator">
            <QuoteGenerator /> 
        </div>
      </div>
    </div>
  );
}

export default Home;

