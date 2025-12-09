import React, { useState } from 'react';
import './HomePage.css';

// Component now accepts the onNavigate prop
const HomePage = ({ onNavigate }) => {
  // State to track the currently active sidebar link
  const [activeLink, setActiveLink] = useState('Dashboard');

  // Function to handle link clicks and update the active state
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    console.log(`Navigation: Switched to ${linkName}`);
  };

  // Function to handle logout, navigating back to 'login'
  const handleLogout = () => {
    alert("Logging out...");
    onNavigate('login'); // <--- Navigates back to the LoginPage
  };


  // Placeholder functions for the New Note button
  const handleNewNote = () => {
    alert('New Note functionality triggered!');
    console.log('Action: New Note button clicked.');
  };

  // Placeholder functions for the Quick Thought card
  const handleQuickThoughtSave = () => {
    alert('Quick Thought saved!');
    console.log('Action: Quick Thought saved.');
  };
  
  const handleQuickThoughtCancel = () => {
    alert('Quick Thought cancelled.');
    console.log('Action: Quick Thought cancelled.');
  };

  return (
    <div className='home-container'>
      {/*Top nav bar*/}
      {/* ... (Header content remains the same) ... */}
      <div className='main-layout'>
        {/*side nav bar*/}
        <aside className='side-nav-bar'>
          <div className='side-nav-top'>
            {/* ... (Nav links remain the same) ... */}
          </div>
          <div className="side-nav-bottom">
            {/* ... (Trash & Settings links remain the same) ... */}
            
            {/* Logout Link - Now using the proper navigation call */}
            <a 
              className="nav-link" 
              href="#"
              onClick={handleLogout} // <--- Calls the new logout function
            >
              <span className="material-symbols-outlined">logout</span>
              <p>Logout</p>
            </a>
          </div>
        </aside>
        
        {/* Main Content Area with Grid (rest of the content remains the same) */}
        {/* ... */}
      </div>
    </div>
  );
};

export default HomePage;