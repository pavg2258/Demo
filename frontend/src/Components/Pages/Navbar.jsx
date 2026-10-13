import React from 'react';
import { Link } from 'react-router';
import '../Styles/Navbar.css';

/**
 * Universal Navigation Bar Component
 * Displays the Rio Tinto and HCLTech brand lockup with fluid responsiveness.
 * Links back to the homepage root.
 */
const Navbar = () => {
    return (
        <nav className="landing-nav-container">
            <Link to="/" className="nav-logo-link" aria-label="Rio Tinto HCLTech Homepage">
                <div className="nav-logo-container">
                    <img 
                        src="https://cdn-rio.dataweavers.io/-/media/project/riotinto/shared/riologo.svg?rev=-1" 
                        alt="Rio Tinto Logo" 
                        fetchPriority="high" 
                    />
                    <span className="nav-logo-divider">|</span>
                    <div className="hcltech-logo-wrapper">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                            <polyline points="2 17 12 22 22 17"></polyline>
                            <polyline points="2 12 12 17 22 12"></polyline>
                        </svg>
                        <span className="hcltech-text">HCLTech</span>
                    </div>
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;