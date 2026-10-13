import React from 'react';
import { Link } from 'react-router';
import notFoundIllustration from '../../assets/not-found-illustration.jpg';
import '../Styles/NotFound.css';
import Navbar from './Navbar';

/**
 * NotFound (404) Component
 * Executive-grade error page for undefined routes.
 * Features RioTinto & HCLTech corporate aesthetics with custom 3D telemetry graphics.
 */
const NotFound = () => {
    return (
        <div className="notfound-page-wrapper">
            {/* Top Minimal Brand Bar */}
            <Navbar />

            {/* Main Content Card */}
            <main className="notfound-main-container">
                <div className="notfound-card">
                    {/* Status Badge */}
                    <div className="notfound-status-badge">
                        <span className="notfound-status-dot"></span>
                        Error 404 • Signal Lost
                    </div>

                    {/* Page Not Found Heading */}
                    <h1 className="notfound-hero-title">
                        Page Not Found
                    </h1>

                    {/* 3D Visual (On Desktop: displayed in right column; On Responsive: displayed below heading) */}
                    <div className="notfound-visual-col">
                        <div className="notfound-image-frame">
                            <img
                                src={notFoundIllustration}
                                alt="404 Telemetry Radar Scanning Terrain"
                                className="notfound-hero-image"
                            />
                            <div className="notfound-image-overlay-glow"></div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="notfound-hero-description">
                        The coordinates or page path you requested cannot be located. The resource may have been decommissioned, relocated, or is temporarily offline.
                    </p>

                    {/* Actions Group */}
                    <div className="notfound-actions-group">
                        <Link to="/" className="notfound-primary-btn">
                            Return to Homepage
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <a href="#" className="notfound-secondary-btn">
                            Contact IT Support
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
