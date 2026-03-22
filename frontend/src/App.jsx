import React, { useState } from 'react';
import StartPage from './components/StartPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SignupPage from './components/SignupPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page) => {
    if (page === 'logout') {
      setIsLoggedIn(false);
      setCurrentPage('start');
    } else {
      setCurrentPage(page);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('start');
  };

  return (
    <>
      {currentPage === 'start' && (
        <StartPage 
          onNavigate={handleNavigate} 
          isAuthenticated={isLoggedIn} 
        />
      )}

      {currentPage === 'login' && (
        <LoginPage 
          onNavigate={(target) => {
             if(target === 'start') {
                 handleLoginSuccess();
             } else {
                 handleNavigate(target);
             }
          }} 
        />
      )}

      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigate} />
      )}

      {currentPage === 'about' && (
        <AboutPage onNavigate={handleNavigate} />
      )}

      {/* Correctly passing handleNavigate to the SignupPage component */}
      {currentPage === 'signup' && (
        <SignupPage onNavigate={handleNavigate} />
      )}
    </>
  );
};

export default App;