import React from 'react';
import {  NavLink } from 'react-router-dom';
import './index.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/add" activeClassName="active">Add Book</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
