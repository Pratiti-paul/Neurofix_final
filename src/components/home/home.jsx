import React from 'react';
import './home.css'; 
import MoodCalendar from "../moodcalendar/moodcalendar"; 
import FlowingMenu from '../animation/animation';


function Home() {

  const menuItems = [
    {
      link: "#",
      text: "Mindfulness",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // use any image
    },
    {
      link: "#",
      text: "Self Care",
      image: "https://images.unsplash.com/photo-1523978591478-c753949ff840",
    },
    {
      link: "#",
      text: "Mood Journal",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
    },
  ];


  return (
    <div className="home-page">
      <div className="home-container">
        <div className="text-section">
          <h1>Welcome to NeuroFix</h1>
          <p>Track your mental health and moods with us.</p>
        </div>
        <div className="calendar-section">
          <FlowingMenu items={menuItems} />
          <MoodCalendar />
        </div>
      </div>
    </div>
  );
}

export default Home;

