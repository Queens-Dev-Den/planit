import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignupPage.css'

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [password2, setPassword2] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Dummy data integration will be added later
    };

    return (
        <div className="signup-page">
            <img src="planit-full-logo.png" className='planit-full-logo' alt="planit logo" />
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
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
                    <label htmlFor='text'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='password'>Create a Password</label>
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
                <div className='input-group'>
                    <label htmlFor='password'>Re-Type Password</label>
                    <div className='password-input-group'>
                        <input
                            type={showPassword2 ? 'text' : 'password'}
                            id='password'
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword2(!showPassword2)}
                        >
                            {showPassword2 ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button className="submit-button" type='submit'>Sign Up</button>
            </form>
            <p className="signup-text">
                Already have an account? <Link to="/login" className="login-link">Login</Link>
            </p>
        </div>
    );
};

export default SignupPage;