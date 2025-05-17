import React, { useRef } from 'react';
import './home.css'; 
import { Player } from '@lottiefiles/react-lottie-player';
import animation from "../../assets/animation.json";

import RotatingText from '../RotatingText/RotatingText';

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
       
      <div ref={scrollRef}></div>
      <div className="home-quote">
        <RotatingText texts={[
          "Moodcalender and tracking",
          "Generate quotes based on your mood",
          "Reflect with journaling",
          "Meditate with a timer",
          "Empower your mental health."
        ]} />

      </div>
    </div>
    </div>
</div>
  );
}

export default Home;
