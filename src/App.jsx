import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Moodify from "./components/moodify/moodify";
import Selfcare from "./components/selfcare/selfcare";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moodify" element={<Moodify />} />
            <Route path="/selfcare" element={<Selfcare />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
