import React from 'react';
import './StartPage.css'; 

const StartPage = ({ onNavigate, isAuthenticated = false }) => {

    // --- Handlers for Private View (Logged In) ---
    const handleGoHomeClick = () => onNavigate('home');
    
    const handleLogoutClick = () => {
        onNavigate('logout'); 
    };

    const handleProfileClick = () => {
        // You can update this later when you build the Profile page
        onNavigate('profile'); 
    };

    // UPDATED: Now navigates to the 'about' page instead of alerting
    const handleAboutClick = () => {
        onNavigate('about');
    };

    // --- Handlers for Public View (Not Logged In) ---
    const handleLoginClick = () => onNavigate('login');
    
    const handleSignupClick = () => {
        onNavigate('signup'); // Prepare for the signup page later
    };

    return (
        <div className="start-page-container">
            
            {/* --- Animated Background --- */}
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

            {/* --- TOP NAVIGATION (Only visible if Authenticated) --- */}
            {isAuthenticated && (
                <div className="start-top-nav">
                    {/* Top Left: Logout */}
                    <button className="nav-top-btn" onClick={handleLogoutClick}>
                        <span className="material-symbols-outlined">logout</span>
                        Logout
                    </button>

                    {/* Top Right: Profile */}
                    <button className="nav-top-btn" onClick={handleProfileClick}>
                        <span className="material-symbols-outlined">person</span>
                        View My Profile
                    </button>
                </div>
            )}

            {/* --- Main Content --- */}
            <div className="content-wrapper">
                {/* Title Section */}
                <div className="title-section">
                    <h1 className="knowly-title">KNOWLY</h1>
                    <p className="knowly-subtitle">More studying. Less scrolling. Organize your notes the smarter way!</p>
                </div>

                {/* --- 3D Rotating Cube --- */}
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

                {/* --- Action Buttons (Switches based on Auth state) --- */}
                <div className='start-page-actions'>
                    {isAuthenticated ? (
                        // --- PRIVATE VIEW (Logged In) ---
                        <>
                            <button className='action-btn primary-btn' onClick={handleGoHomeClick}>
                                Go to Dashboard
                            </button>
                            
                            <button className='action-btn small-btn' onClick={handleAboutClick}>
                                About Knowly
                            </button>
                        </>
                    ) : (
                        // --- PUBLIC VIEW (Not Logged In) ---
                        <>
                            <button className='action-btn primary-btn' onClick={handleLoginClick}>
                                Login
                            </button>
                            
                            <button className='action-btn small-btn' onClick={handleSignupClick}>
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StartPage;