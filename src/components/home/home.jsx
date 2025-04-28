import React from 'react';
import './home.css'; 
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import QuoteGenerator from "../QuoteGenerator/QuoteGenerator";
import BlurText from "../BlurrText/BlurrText";  



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Home() {

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="text-section">
        <BlurText
            text="Welcome to NeuroFix"
            delay={150}
            animateBy="words"  
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <p>Track your mental health and moods with us.</p>
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

