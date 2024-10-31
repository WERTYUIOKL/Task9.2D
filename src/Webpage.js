import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

function Webpage() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">DEV@Deakin</Link>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
                <Link to="/login" className="login-link">Log In</Link>
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/query">Query</Link>
                <Link to="/pricing">Plan</Link> 
            </div>
        </div>
    );
}

export default Webpage;
