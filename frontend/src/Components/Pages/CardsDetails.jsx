import React from 'react';
import { useParams, Link } from 'react-router';
import { gallery } from './LandingPage';
import cubeImg from '../../assets/cube-not-found.png';
import '../Styles/CardsDetails.css';
import Navbar from './Navbar';

/**
 * CardsDetails Component
 * Displays the full details (image, title, description) of a selected card.
 * If the card ID is not found, renders a premium "Card Not Found" empty state.
 */
const CardsDetails = ({ image: propImage, title: propTitle, desc: propDesc, id: propId }) => {
    // 1. Get the card ID from route parameters (e.g. /cards/1 -> id: "1")
    const { id: routeId } = useParams();
    const currentId = propId || routeId;

    // 2. Find the corresponding card item from gallery data
    const card = gallery.find((item) => String(item.id) === String(currentId));

    // 3. Resolve data values (prefer direct props if passed, otherwise use found card)
    const displayImage = propImage || card?.img;
    const displayTitle = propTitle || card?.title;
    const displayDesc = propDesc || card?.desc;

    // 4. Fallback view: Card not found (Premium empty-state design)
    if (!card && !propTitle) {
        return (
            <div className="card-details-page-wrapper">
                <Navbar />
                <main className="card-details-main-container">
                    <div className="card-details-wrapper">
                        <Link to="/" className="card-details-back-btn">
                            ← Back to Overview
                        </Link>

                        <div className="card-details-container card-details-not-found">
                            <div className="card-not-found-image-wrapper">
                                <img
                                    src={cubeImg}
                                    alt="Cube Not Found"
                                    className="card-not-found-image"
                                />
                            </div>

                            <div className="card-not-found-content">
                                <span className="card-not-found-badge">Resource Not Found</span>
                                <h1 className="card-details-heading">Card Not Found</h1>
                                <p className="card-details-content">
                                    No operational record found with ID <strong>#{currentId}</strong>. It may have been archived, relocated, or does not exist in the telemetry hub.
                                </p>
                                <Link to="/" className="card-not-found-action-btn">
                                    Return to Popular Pages
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // 5. Main detail view
    return (
        <div className="card-details-page-wrapper">
            <Navbar />
            <main className="card-details-main-container">
                <div className="card-details-wrapper">
                    <Link to="/" className="card-details-back-btn">
                        ← Back to Overview
                    </Link>

                    <div className="card-details-container">
                        <div className="card-details-image-container">
                            <img
                                src={displayImage}
                                alt={displayTitle}
                                className="card-details-image"
                            />
                        </div>

                        <div className="card-details-content-container">
                            <h1 className="card-details-heading">{displayTitle}</h1>
                            <p className="card-details-content">{displayDesc}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CardsDetails;