import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const navigateHome = () => {
        navigate('/');
    };

    const navigateCreate = () => {
        navigate('/create');
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="planit-full-logo.png" className='planit-navbar-logo' alt="planit logo" />
                </Link>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <button onClick={navigateHome} className='nav-button'>Home</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={navigateCreate} className='nav-button'>New Event</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleLogout} className='nav-button'>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;