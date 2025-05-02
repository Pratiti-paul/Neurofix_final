import React, { useState } from 'react';
import './musicplayer.css'; 

const MusicPlayer = () => {
  const [selectedTrack, setSelectedTrack] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

  return (
    <div className="music-container">
      <h3 className="section-title">Optional: Play Calming Music</h3>
      
      <div className="music-controls">
        <label>Select Music:</label>
        <select
          onChange={(e) => setSelectedTrack(e.target.value)}
          className="music-select"
        >
          <option value="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">Gentle Rain</option>
          <option value="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3">Forest Birds</option>
          <option value="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3">Ocean Waves</option>
        </select>
      </div>

      <audio controls className="music-audio">
        <source src={selectedTrack} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
