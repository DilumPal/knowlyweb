import React from 'react';
import './StartPage.css'; 

// Component now accepts the onNavigate prop
const StartPage = ({ onNavigate }) => {

    // Functions call the navigation prop directly
    const handleGoHomeClick = () => onNavigate('home');
    const handleLogoutClick = () => onNavigate('login'); // Logout returns to Login

    return (
        <div className="start-page-container">
            <header className='start-page-header'>
                <h1>Welcome to Knowly, Kevin!</h1>
                <p>This is the initial landing page after logging in.</p>
            </header>
            
            <main className='start-page-content'>
                <p>You can use this page for quick settings, a summary, or a quick launchpad.</p>

                <div className='start-page-actions'>
                    <button className='action-btn primary-btn' onClick={handleGoHomeClick}>
                        Go to Dashboard (Homepage)
                    </button>
                    {/* The logout button now uses the proper navigation call */}
                    <button className='action-btn secondary-btn' onClick={handleLogoutClick}>
                        Logout and Return to Login
                    </button>
                </div>
            </main>
        </div>
    );
};

export default StartPage;