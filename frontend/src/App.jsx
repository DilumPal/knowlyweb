import React, { useState } from 'react';
// CORRECTED PATHS: Imports now point to the './components/' folder
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import StartPage from './components/StartPage';
import './app.css'; // Assuming this is in src/

function App() {
    // State to track the current page view: 'login', 'start', or 'home'
    const [currentView, setCurrentView] = useState('login'); 

    // Navigation function passed down to children to change the view
    const navigate = (viewName) => {
        setCurrentView(viewName);
        console.log(`Navigation: Switched to ${viewName}`);
    };

    // Conditional Rendering based on the currentView state
    const renderContent = () => {
        switch (currentView) {
            case 'login':
                // Successful login should navigate to 'start' page
                return <LoginPage onNavigate={navigate} />; 
            case 'start':
                // From the start page, navigate to the 'home' dashboard
                return <StartPage onNavigate={navigate} />; 
            case 'home':
                // From the dashboard, navigate back to 'login' (or 'start' for logout)
                return <HomePage onNavigate={navigate} />; 
            default:
                return <h1>404 Page Not Found</h1>;
        }
    };

    return (
        <div className="app-main-container">
            {renderContent()}
        </div>
    );
}

export default App;