import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; 

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
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
                        <Link to="/journal" className="nav-links" onClick={() => setMenuOpen(false)}>Journal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/selfcare" className="nav-links" onClick={() => setMenuOpen(false)}>Self-Care</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                </ul>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


