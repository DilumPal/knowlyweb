import React, { useState } from 'react';
import './LoginPage.css';

// Component now accepts the onNavigate prop from App.jsx
const LoginPage = ({ onNavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); 
        
        // Placeholder credentials for successful login: test/123
        if (username === 'test' && password === '123') {
            // CALL onNavigate to move to the 'start' view
            onNavigate('start');
        } else {
            alert('Invalid credentials. Please use test/123.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Knowly Login</h2>
                
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required
                        placeholder="Use: test"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        placeholder="Use: 123"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <button type="submit">Login and Go to Start Page</button>
            </form>
        </div>
    );
};

export default LoginPage;