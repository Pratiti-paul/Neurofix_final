import { Link } from 'react-router-dom';
import './about.css';
import feedbackImg from '../../assets/feedbackpic.png'
import missionpic from '../../assets/missionpic.png'
import visionpic from '../../assets/visionpic.png'

function About() {
    return (
    <>
      <div className="cardcontainer">
        <div className="card1">
          <h2 className="cardtitle">Our Mission</h2>
          <p className="cardtext">
            To support individuals on their mental wellness journey by providing a safe, calming digital space for daily reflection, emotional awareness, and self-care — empowering users to track their moods, journal their thoughts, and nurture personal growth with compassion and clarity.
          </p> 
        </div>
        <div className="missionimage">
          <img src={missionpic} alt="Feedback Illustration" />
        </div>
      </div>
      <div className="cardcontainer2">
        <div className="card2">
          <h2 className="cardtitle2">Our Vision</h2>
          <p className="cardtext2">
            To create a world where mental health is prioritized and personalized — where every individual has the tools, insights, and support to understand themselves, manage their well-being, and thrive emotionally, every day.
          </p>
        </div>
        <div className="visionimage">
          <img src={visionpic} alt="Feedback Illustration" />
        </div>
      </div>

     <div className="cardcontainer3">
        <div className="feedbackbox">
          <h2 className="maintag">Feedback Portal</h2>
          <input className="tag1" type="text" placeholder="Your Name" />
          <input className="tag2" type="email" placeholder="Your Email" />
          <textarea className="tag3" placeholder="Your feedback..."></textarea>
          <button className="tag4">Submit</button>
        </div>
        <div className="feedbackimage">
          <img src={feedbackImg} alt="Feedback Illustration"/>
        </div>
      </div>

    </>
    );
  }
  
  export default About;
  