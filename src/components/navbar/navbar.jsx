import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";



    export default function Navbar() {
        const [menuOpen, setMenuOpen] = useState(false);

        return (
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-menu">
                        <h1 className="logo">NeuroFix</h1>
                    </div>
                    <div className="nav-links">
                        <div className="linksholder">
                            <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                                <li onClick={() => setMenuOpen(false)}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li onClick={() => setMenuOpen(false)}>
                                    <Link to="/journal">Journal</Link>
                                </li>
                                <li onClick={() => setMenuOpen(false)}>
                                    <Link to="/selfcare">Self-Care</Link>
                                </li>
                                <li onClick={() => setMenuOpen(false)}>
                                    <Link to="/about">About Page</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>
                </div>
            </nav>
        );
    }
