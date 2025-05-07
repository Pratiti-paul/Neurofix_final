import { Link } from 'react-router-dom';
import './selfcare.css';
import MeditationTimer from "../meditationtimer/meditationtimer"; 
import Writepad from '../writepad/writepad';



function Selfcare() {
    return (
      <div>
         <div className="journal-container">
          <Writepad />
          </div>
        <div className="meditationtimer">
        <MeditationTimer />
        </div>
      </div>
    );
  }
  
  export default Selfcare;
  