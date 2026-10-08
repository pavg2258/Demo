import React from 'react';
import { Link } from 'react-router';
import '../Styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="notfound-error-code">404</div>
                <h1 className="notfound-title">Page Not Found</h1>
                <p className="notfound-message">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="notfound-home-btn">
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
