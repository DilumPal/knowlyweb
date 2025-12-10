import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onNavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault(); 
        if (username === 'test' && password === '123') {
            onNavigate('start');
        } else {
            alert('Invalid credentials. Please use test/123.');
        }
    };

    return (
        <div className="login-container">
            {/* --- FIREFLIES CONTAINER --- */}
            <div className="firefly-container">
                {/* Generates 15 fireflies automatically */}
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="firefly"></div>
                ))}
            </div>

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