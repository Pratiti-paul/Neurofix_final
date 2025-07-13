import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginModal from "../login/LoginModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-menu">
          <h1 className="logo">NeuroFix</h1>
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/moodify" className="nav-links" onClick={() => setMenuOpen(false)}>Moodify</Link>
          </li>
          <li className="nav-item">
            <Link to="/selfcare" className="nav-links" onClick={() => setMenuOpen(false)}>Self-Care</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>

        <div className="login-signup">
          <button className="login-btn" onClick={() => setShowModal(true)}>Login / Signup</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </nav>
  );
}

export default Navbar;
