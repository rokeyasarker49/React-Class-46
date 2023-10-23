import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="header-container">
                <ul>
                    <li><NavLink to="/">Sign In</NavLink></li>
                    <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;