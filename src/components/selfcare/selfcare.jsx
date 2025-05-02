import { Link } from 'react-router-dom';
import './selfcare.css';
import MeditationTimer from "../meditationtimer/meditationtimer"; 
import MusicPlayer from "../musicplayer/musicplayer";



function Selfcare() {
    return (
      <div>
        <div className="meditationtimer">
        <MeditationTimer />
        </div>
        <div className="musicplayer">
        <MusicPlayer />
        </div>
      </div>
    );
  }
  
  export default Selfcare;
  