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
            {/* Ambient Background Shapes (Blue Theme) */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>

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