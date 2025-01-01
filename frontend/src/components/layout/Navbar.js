import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="planit-full-logo.png" className='planit-navbar-logo' alt="planit logo" />
                </Link>
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <button onClick={handleLogout} className='logout-button'>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;