import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Dummy data integration will be added later
    };

    return (
        <div className="login-page">
            <img src="planit-full-logo.png" className='planit-full-logo' alt="planit logo" />
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Password</label>
                    <div className='password-input-group'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button className="submit-button" type='submit'>Login</button>
            </form>
            <p className="signup-text">
                New to planit? <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginPage;