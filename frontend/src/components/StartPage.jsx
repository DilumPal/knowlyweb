import React from 'react';
import './StartPage.css'; 

const StartPage = ({ onNavigate }) => {

    const handleGoHomeClick = () => onNavigate('home');
    const handleLogoutClick = () => onNavigate('login');

    return (
        <div className="start-page-container">
            
            {/* --- New Animated Background --- */}
            <div className="background-animation">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
            {/* ------------------------------- */}

            {/* Content Wrapper to ensure text sits ABOVE the background */}
            <div className="content-wrapper">
                {/* Title Section */}
                <div className="title-section">
                    <h1 className="knowly-title">KNOWLY</h1>
                    <p className="knowly-subtitle">More studying. Less scrolling. Organize your notes the smarter way!</p>
                </div>

                {/* --- 3D Rotating Cube Section --- */}
                <div className="cube-scene">
                    <div className="box-card">
                        <div className="face front">KNOWLY</div>
                        <div className="face back">KNOWLY</div>
                        <div className="face right">KNOWLY</div>
                        <div className="face left">KNOWLY</div>
                        <div className="face top">KNOWLY</div>
                        <div className="face bottom">KNOWLY</div>
                    </div>
                </div>

                {/* Actions Section */}
                <div className='start-page-actions'>
                    <button className='action-btn primary-btn' onClick={handleGoHomeClick}>
                        Go to Dashboard
                    </button>
                    
                    <button className='action-btn small-btn' onClick={handleLogoutClick}>
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;